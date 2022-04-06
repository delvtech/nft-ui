import { PrimaryButton } from "common/Button/styles";
import useWeb3 from "elf/useWeb3";
import { useRouter } from "next/router";

interface MintButtonProps {
  active: boolean;
  hasMinted?: boolean;
  canMint: boolean;
  isLoading: boolean;
  isWhitelisted?: boolean;
  openDialog: () => void;
  handleMint: () => void;
}

export const MintButton = ({
  hasMinted,
  // canMint means that we found a merkle proof for the connected address
  canMint,
  openDialog,
  handleMint,
  isLoading,
  // isWhitelisted means that we found the connected address in our whitelist
  isWhitelisted,
}: MintButtonProps) => {
  const { active } = useWeb3();
  const { push } = useRouter();

  // Wallet not active
  if (!active) {
    return <PrimaryButton onClick={openDialog}>Connect wallet</PrimaryButton>;
  }
  // Proof or whitelist is loading
  if (isLoading) {
    return <PrimaryButton disabled>Loading eligibility...</PrimaryButton>;
  }

  // Mint available
  if (canMint && !hasMinted) {
    return <PrimaryButton onClick={handleMint}>Confirm mint</PrimaryButton>;
  }

  // Has already minted
  if (hasMinted) {
    return (
      <PrimaryButton onClick={() => push("/collection")}>
        Elf minted click to view collection
      </PrimaryButton>
    );
  }

  // Whitelisted but not available to mint now
  if (isWhitelisted) {
    return <PrimaryButton disabled>Account eligible!</PrimaryButton>;
  }

  return <PrimaryButton disabled>Account not eligible for mint.</PrimaryButton>;
};

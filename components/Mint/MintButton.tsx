import { PrimaryButton } from "common/Button/styles";
import useWeb3 from "elf/useWeb3";
import { useRouter } from "next/router";

interface MintButtonProps {
  active: boolean;
  hasMinted?: boolean;
  canMint: boolean;
  isProofLoading: boolean;
  openDialog: () => void;
  handleMint: () => void;
}

export const MintButton = ({
  hasMinted,
  canMint,
  openDialog,
  handleMint,
  isProofLoading,
}: MintButtonProps) => {
  const { active } = useWeb3();
  const { push } = useRouter();

  if (active) {
    if (hasMinted) {
      return (
        <PrimaryButton onClick={() => push("/collection")}>
          Elfi has already been minted.
        </PrimaryButton>
      );
    }

    if (!hasMinted && canMint) {
      return <PrimaryButton onClick={handleMint}>Confirm mint</PrimaryButton>;
    }

    if (isProofLoading) {
      <PrimaryButton disabled>Checking eligibility...</PrimaryButton>;
    }

    return (
      <PrimaryButton disabled>Not currently eligible for mint.</PrimaryButton>
    );
  } else {
    return <PrimaryButton onClick={openDialog}>Connect wallet</PrimaryButton>;
  }
};

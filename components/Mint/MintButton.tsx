import { PrimaryButton } from "common/Button/styles";
import useWeb3 from "elf/useWeb3";
import { useRouter } from "next/router";
import { isFeatureEnabled } from "src/features";

interface MintButtonProps {
  active: boolean;
  hasMinted?: boolean;
  canMint: boolean;
  isProofLoading: boolean;
  isWhitelisted?: boolean;
  openDialog: () => void;
  handleMint: () => void;
}

export const MintButton = ({
  hasMinted,
  canMint,
  openDialog,
  handleMint,
  isProofLoading,
  isWhitelisted,
}: MintButtonProps) => {
  const { active } = useWeb3();
  const { push } = useRouter();

  if (!active) {
    return <PrimaryButton onClick={openDialog}>Connect wallet</PrimaryButton>;
  }

  if (isFeatureEnabled("preLaunch")) {
    return isWhitelisted ? (
      <PrimaryButton disabled>Account eligible!</PrimaryButton>
    ) : (
      <PrimaryButton disabled>Account not eligible.</PrimaryButton>
    );
  }

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
};

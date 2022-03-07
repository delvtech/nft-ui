import { PrimaryButton } from "common/Button/styles";
import { ContentPage } from "components/ContentPage";
import { ContentWrapper } from "components/Entrance/styles";
import { MintContainer, ProgressContainer } from "components/Mint/styles";
import { useMinter } from "elf/hooks/useMinter";
import { useProof } from "elf/hooks/useProof";
import { useTokenBalanceOf } from "elf/hooks/useTokenBalanceOf";
import { useWalletDialog } from "elf/hooks/useWalletDialog";
import useWeb3 from "elf/useWeb3";
import {
  createToastError,
  createToastLoading,
  createToastSuccess,
} from "helpers/createToast";
import Image from "next/image";
import MintGIF from "public/assets/gif/hero_image.gif";
import LoadingMintImage from "public/assets/svg/minting_loading.svg";
import { useMemo, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import ReactTextTransition, { presets } from "react-text-transition";
import content from "./content.json";

export const Mint = () => {
  const { active, account, library } = useWeb3();
  const { data: proofData, isLoading: isProofLoading } = useProof(account);
  const { data: mintedCount } = useTokenBalanceOf(account);
  const toastIdRef = useRef<string>();

  const canMint = !!proofData;
  const hasMinted = mintedCount && mintedCount.gt(0);

  console.log(mintedCount, canMint, hasMinted);

  const {
    mutate: mint,
    isLoading: isMinting,
    isSuccess,
  } = useMinter(library?.getSigner(), {
    onError: (e) => {
      createToastError(e.message, { id: toastIdRef.current });
    },
    onTransactionSubmitted: () => {
      toastIdRef.current = createToastLoading("Confirming mint transaction.", {
        id: toastIdRef.current,
      });
    },
    onTransactionMined: () => {
      createToastSuccess("Elfi has been successfully minted!", {
        id: toastIdRef.current,
      });
      // TODO @cashd: push to collection view
    },
  });

  const { open } = useWalletDialog();

  const currentContent = useMemo(
    () =>
      isMinting ? content.pending : isSuccess ? content.success : content.stale,
    [isMinting, isSuccess],
  );

  const handleMint = () => {
    if (canMint) {
      mint([proofData.leaf.tokenId, proofData.proof]);
    }
  };

  const HeroImage = isMinting ? (
    <Image
      src={LoadingMintImage}
      alt="Elfiverse"
      width="600px"
      height="800px"
    />
  ) : (
    <Image src={MintGIF} alt="Elfiverse" width="640px" height="400px" />
  );

  return (
    <ContentPage padding="100px 124px 144px 124px" title="Mint">
      <MintContainer>
        <h1>
          <ReactTextTransition
            text={currentContent.title}
            springConfig={presets.gentle}
          />
        </h1>
        {HeroImage}
        {!isMinting ? (
          <MintButton
            active={active}
            canMint={canMint}
            hasMinted={hasMinted}
            openDialog={open}
            handleMint={handleMint}
            isProofLoading={isProofLoading}
          />
        ) : (
          <Fade>
            <ProgressContainer>
              <h2>
                <ReactTextTransition
                  text={currentContent.status}
                  springConfig={presets.gentle}
                />
              </h2>
            </ProgressContainer>
          </Fade>
        )}
        <ContentWrapper>
          <ReactTextTransition
            text={currentContent.description}
            springConfig={presets.gentle}
          />
        </ContentWrapper>
      </MintContainer>
    </ContentPage>
  );
};

interface MintButtonProps {
  active: boolean;
  hasMinted?: boolean;
  canMint: boolean;
  isProofLoading: boolean;
  openDialog: () => void;
  handleMint: () => void;
}

const MintButton = ({
  active,
  hasMinted,
  canMint,
  openDialog,
  handleMint,
  isProofLoading,
}: MintButtonProps) => {
  if (active) {
    if (hasMinted) {
      return (
        <PrimaryButton disabled>Elfi has already been minted.</PrimaryButton>
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

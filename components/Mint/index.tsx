import { PrimaryButton } from "common/Button/styles";
import { ContentPage } from "components/ContentPage";
import { ContentWrapper } from "components/Entrance/styles";
import { MintContainer, ProgressContainer } from "components/Mint/styles";
import { useMinter } from "elf/hooks/useMinter";
import { useProof } from "elf/hooks/useProof";
import { useTokenBalanceOf } from "elf/hooks/useTokenBalanceOf";
import { useWalletDialog } from "elf/hooks/useWalletDialog";
import useWeb3 from "elf/useWeb3";
import Image from "next/image";
import MintGIF from "public/assets/gif/hero_image.gif";
import LoadingMintImage from "public/assets/svg/minting_loading.svg";
import { useEffect, useMemo, useState } from "react";
import { Fade } from "react-awesome-reveal";
import ReactTextTransition, { presets } from "react-text-transition";
import content from "./content.json";

export const Mint = () => {
  const { active, account, library } = useWeb3();
  const { data: proofData } = useProof(account);
  const { data: mintedCount } = useTokenBalanceOf(account);
  const { mutate: mint, isLoading } = useMinter(library?.getSigner());

  const { openModal } = useWalletDialog();

  const [showProgress, setShowProgress] = useState<boolean>(false);

  useEffect(() => {
    setShowProgress(isLoading);
  }, [isLoading]);

  const currentContent = useMemo(() => {
    // TODO @cashd: figure out what to do here
    const STATUS = false;

    return isLoading
      ? content.pending
      : STATUS
      ? content.success
      : content.stale;
  }, [isLoading]);

  const canMint = useMemo(() => !!proofData, [proofData]);
  const hasMinted = useMemo(
    () => mintedCount && mintedCount.gt(0),
    [mintedCount],
  );

  const handleMint = () => {
    if (canMint && proofData) {
      mint([proofData.leaf.tokenId, proofData.proof]);
    }
  };

  const HeroImage = useMemo(() => {
    return isLoading ? (
      <Image
        src={LoadingMintImage}
        alt="Elfiverse"
        width="600px"
        height="800px"
      />
    ) : (
      <Image src={MintGIF} alt="Elfiverse" width="640px" height="400px" />
    );
  }, [isLoading]);

  const MintButton = useMemo(() => {
    if (!active) {
      return <PrimaryButton onClick={openModal}>Connect wallet</PrimaryButton>;
    }

    if (active && !canMint) {
      return (
        <PrimaryButton disabled>Not currently eligible for mint.</PrimaryButton>
      );
    }

    if (active && hasMinted) {
      return (
        <PrimaryButton disabled>Elfi has already been minted.</PrimaryButton>
      );
    }

    if (active && !hasMinted && canMint) {
      return <PrimaryButton onClick={handleMint}>Confirm mint</PrimaryButton>;
    }
  }, [active, hasMinted, canMint]);

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
        {!showProgress ? (
          MintButton
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

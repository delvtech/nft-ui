import { PrimaryButton } from "common/Button/styles";
import { ContentPage } from "components/ContentPage";
import { ContentWrapper } from "components/Entrance/styles";
import { MintContainer, ProgressContainer } from "components/Mint/styles";
import { useMinter } from "elf/hooks/useMinter";
import { useProof } from "elf/hooks/useProof";
import { useWalletDialog } from "elf/hooks/useWalletDialog";
import useWeb3 from "elf/useWeb3";
import Image from "next/image";
import MintGIF from "public/assets/gif/hero_image.gif";
import { useEffect, useMemo, useState } from "react";
import { Fade } from "react-awesome-reveal";
import ReactTextTransition, { presets } from "react-text-transition";
import content from "./content.json";

const UPDATE_PER = 100;

export const Mint = () => {
  const { active, account, library } = useWeb3();
  const { data: proofData } = useProof(account);
  const { openModal } = useWalletDialog();

  const { mutate: mint } = useMinter(library?.getSigner());

  const [seconds, setSeconds] = useState<number>(1);
  const [showProgress, setShowProgress] = useState<boolean>(false);

  const currentContent = useMemo(() => {
    const PENDING_STATUS = showProgress && seconds < 100;
    const STATUS = seconds === 100;

    return PENDING_STATUS
      ? content.pending
      : STATUS
      ? content.success
      : content.stale;
  }, [seconds, showProgress]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (showProgress && seconds < 100) {
        setSeconds(seconds + 1);
      }
    }, UPDATE_PER);
    return () => clearInterval(timer);
  }, [seconds, showProgress]);

  const canMint = useMemo(() => !!proofData, [proofData]);

  const handleMint = () => {
    // setShowProgress(true);

    if (canMint && proofData) {
      mint([proofData.leaf.tokenId, proofData.proof]);
    }
  };

  return (
    <ContentPage padding="100px 124px 144px 124px" title="Mint">
      <MintContainer>
        <h1>
          <ReactTextTransition
            text={currentContent.title}
            springConfig={presets.gentle}
          />
        </h1>
        <Image src={MintGIF} alt="Elfiverse" width="640px" height="400px" />
        {!showProgress ? (
          <>
            {!active && (
              <PrimaryButton onClick={openModal}>Connect wallet</PrimaryButton>
            )}

            {active && canMint && (
              <PrimaryButton onClick={handleMint}>Confirm mint</PrimaryButton>
            )}

            {active && !canMint && (
              <PrimaryButton disabled>
                Not currently eligible for mint.
              </PrimaryButton>
            )}
          </>
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

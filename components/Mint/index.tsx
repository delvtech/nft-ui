import Image from "next/image";
import MintGIF from "public/assets/gif/hero_image.gif";
import ReactTextTransition, { presets } from "react-text-transition";
import content from "./content.json";
import useWeb3 from "elf/useWeb3";
import { ContentPage } from "components/ContentPage";
import { ContentWrapper } from "components/Entrance/styles";
import { Fade } from "react-awesome-reveal";
import { MintContainer, ProgressContainer } from "components/Mint/styles";
import { PrimaryButton } from "common/Button/styles";
import { useEffect, useMemo, useState } from "react";
import { useProof } from "elf/hooks/useProof";
import { useWalletDialog } from "elf/hooks/useWalletDialog";

const UPDATE_PER = 100;

export const Mint = () => {
  const { active, account } = useWeb3();
  const { data: proofData } = useProof(account);
  const { openModal } = useWalletDialog();

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

  const isAllowListed = useMemo(
    () => proofData?.proof && proofData?.tokenId,
    [proofData],
  );

  const handleClick = () => setShowProgress(true);

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
              <PrimaryButton onClick={() => openModal()}>
                Connect wallet
              </PrimaryButton>
            )}

            {active && isAllowListed && (
              <PrimaryButton onClick={handleClick}>Confirm mint</PrimaryButton>
            )}

            {active && !isAllowListed && (
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

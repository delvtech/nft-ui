import { useEffect, useMemo, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import ReactTextTransition, { presets } from "react-text-transition";
import { PrimaryButton } from "common/Button";
import { ContentPage } from "components/ContentPage";
import { ContentWrapper } from "components/Entrance/styles";
import { MintContainer, ProgressContainer } from "components/Mint/styles";

import MintGIF from "public/assets/gif/hero_image.gif";
import content from "./content.json";
// import { Progress } from "components/Formation/FormationSlider/styles";
// TODO @tina: create progress component

const UPDATE_PER = 100;

export const Mint: React.FC = () => {
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

  const handleClick = () => {
    setShowProgress(true);
  };

  return (
    <ContentPage padding="100px 125px 144px 125px" title="Mint">
      <MintContainer>
        <h1>
          <ReactTextTransition
            text={currentContent.title}
            springConfig={presets.gentle}
          />
        </h1>
        <Image src={MintGIF} alt="Elfiverse" width="640px" height="403px" />
        {!showProgress ? (
          <PrimaryButton text="Confirm mint" onClick={handleClick} />
        ) : (
          <Fade>
            <ProgressContainer>
              <h2>
                <ReactTextTransition
                  text={currentContent.status}
                  springConfig={presets.gentle}
                />
              </h2>
              {/* <Progress progress={seconds} /> */}
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

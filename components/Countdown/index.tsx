import { Fade, Zoom } from "react-awesome-reveal";
import { SectionContainer } from "common/Container";
import { Timer } from "components/Countdown/Timer";
import { ContentWrapper, CountdownDate } from "components/Countdown/styles";

export const Countdown = () => {
  return (
    <SectionContainer padding="10rem 0 5rem 0" maxWidth="38.5rem">
      <ContentWrapper>
        <Fade triggerOnce>
          <h3>First drop hits</h3>
          <Zoom triggerOnce>
            <CountdownDate>February 9th</CountdownDate>
          </Zoom>
          <Timer />
        </Fade>
      </ContentWrapper>
    </SectionContainer>
  );
};

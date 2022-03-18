import { SectionContainer } from "common/Container";
import { ContentWrapper, CountdownDate } from "components/Countdown/styles";
import { Timer } from "components/Countdown/Timer";
import { Fade, Zoom } from "react-awesome-reveal";
import { releaseDate } from "src/constants";

export const Countdown = () => {
  return (
    <SectionContainer padding="10rem 0 5rem 0" maxWidth="38.5rem">
      <ContentWrapper>
        <Fade triggerOnce>
          <h3>First drop hits</h3>
          <Zoom triggerOnce>
            <CountdownDate>{releaseDate.format("MMMM Do")}</CountdownDate>
          </Zoom>
          <Timer targetDate={releaseDate} />
        </Fade>
      </ContentWrapper>
    </SectionContainer>
  );
};

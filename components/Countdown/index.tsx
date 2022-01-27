import { Fade, Zoom } from "react-awesome-reveal";
import { SectionContainer } from "common/Container";
import { CountdownDate } from "components/Countdown/styles";
import { Timer } from "components/Countdown/Timer";

export const Countdown = () => {
  return (
    <SectionContainer maxWidth="45rem" padding="0">
      <Fade triggerOnce>
        <h2>First drop hits</h2>
        <Zoom triggerOnce>
          <CountdownDate>February 9th</CountdownDate>
        </Zoom>
        <Timer />
      </Fade>
    </SectionContainer>
  );
};

import { Flex } from "common/Container/styles";
import { COLOR_GREEN_DARK } from "helpers/colorPalette";
import { devices } from "helpers/devices";
import styled from "styled-components";

export const CountdownDate = styled.div`
  margin-top: 60px;
  padding: 60px 70px;
  font-family: "Defcon Zero Title";
  font-size: 50px;
  background-color: ${COLOR_GREEN_DARK};

  clip-path: polygon(
    0% 20px,
    /* top left */ 20px 0%,
    /* top left */ calc(100% - 20px) 0%,
    /* top right */ 100% 20px,
    /* top right */ 100% calc(100% - 20px),
    /* bottom right */ calc(100% - 20px) 100%,
    /* bottom right */ 20px 100%,
    /* bottom left */ 0 calc(100% - 20px) /* bottom left */
  );

  @media ${devices.tabletM} {
    font-size: 35px;
    padding: 40px;
  }
`;

export const StyledTimer = styled.div`
  font-size: 60px;
  letter-spacing: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: max-content;
  font-family: "Calculator";
  font-weight: bold;
  letter-spacing: inherit;
  color: ${COLOR_GREEN_DARK};
  text-shadow: 0px 0px rgba(0, 181, 192, 1);
  text-shadow: 0px 0px rgba(0, 181, 192, 0.4);
`;

export const StyledSemiColon = styled.div`
  font-size: 60px;
  font-family: "Calculator";
  font-weight: bold;
  color: ${COLOR_GREEN_DARK};
  margin: 0 10px;

  @media ${devices.tabletM} {
    font-size: 30px;
  }
`;

export const TimerFlex = styled(Flex)`
  width: 100%;
  max-width: max-content;
  margin: 50px auto 0 auto;
  overflow: hidden;
`;

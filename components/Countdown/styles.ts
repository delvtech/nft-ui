import { Flex } from "common/Container/styles";
import {
  COLOR_GREEN_DARK,
  COLOR_WHITE,
  COLOR_WHITE_LIGHT,
} from "helpers/colorPalette";
import { devices } from "helpers/devices";
import styled from "styled-components";

export const CountdownDate = styled.div`
  font-family: "Rubik";
  font-weight: 600;
  text-transform: uppercase;
  font-size: 54px;
  margin: 30px 0;
  text-shadow: 0px 0px 10px rgba(20, 223, 186, 0.8);
  letter-spacing: 6px;

  @media ${devices.tabletL} {
    font-size: 3rem;
  }

  @media ${devices.tabletM} {
    font-size: 2.5rem;
  }
  @media ${devices.tabletM} {
    font-size: 2.5rem;
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
  text-shadow: 0px 0px 3px rgba(0, 181, 192, 0.8);

  @media ${devices.mobileL} {
    font-size: 50px;
  }
`;

export const StyledSemiColon = styled.div`
  font-size: 60px;
  font-family: "Calculator";
  font-weight: bold;
  color: ${COLOR_GREEN_DARK};
  margin: 0 10px;
  text-shadow: 0px 0px 3px rgba(20, 223, 186, 0.8);

  @media ${devices.tabletM} {
    font-size: 30px;
  }
`;

export const TimerFlex = styled(Flex)`
  width: 100%;
  max-width: max-content;
  margin: 0 auto;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  padding: 100px 65px 90px 65px;
  background-color: #09282d;
  border: 5px solid ${COLOR_WHITE_LIGHT};

  ${Flex} {
    border: 1px solid ${COLOR_WHITE};
    padding: 10px;
  }

  h3 {
    text-transform: uppercase;
    font-family: Defcon Zero;
  }

  @media ${devices.tabletM} {
    padding: 100px 35px 90px 35px;
  }

  @media ${devices.tabletM} {
    padding: 100px 35px 90px 35px;
  }
  @media ${devices.mobileL} {
    padding: 100px 1rem 90px 1rem;
  }
`;

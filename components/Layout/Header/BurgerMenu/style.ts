import styled from "styled-components";
import { COLOR_WHITE_LIGHT } from "helpers/colorPalette";
import { devices } from "helpers/devices";

export const BurgerMenuContainer = styled.div`
  display: none;

  @media ${devices.tabletL} {
    display: block;

    svg {
      cursor: pointer;
    }
  }
`;

export const NavigationPrimary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  margin: 6.5rem 0 2rem 0;

  div > p {
    font-size: 30px;
    margin: 1.5rem 0;
    color: ${COLOR_WHITE_LIGHT};

    @media ${devices.tabletM} {
      font-size: 24px;
    }

    @media ${devices.mobileL} {
      font-size: 1rem;
      margin: 1rem 0;
    }

    &:before {
      bottom: -10px;
    }
  }
`;

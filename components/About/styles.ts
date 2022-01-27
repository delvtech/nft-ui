import { Flex } from "common/Container/styles";
import { devices } from "helpers/devices";
import styled from "styled-components";
import { AbsoluteDecoration } from "styles/globalStyles";
import { StringProps } from "helpers/types";
import {
  COLOR_BLACK,
  COLOR_BLACK_DARK,
  COLOR_TRANSPARENT,
  COLOR_WHITE,
  COLOR_WHITE_LIGHT,
} from "helpers/colorPalette";

export const AboutContainer = styled.div`
  h2 {
    font-size: 80px;
  }

  h3 {
    margin-top: 50px;
  }

  ${AbsoluteDecoration} {
    top: 50%;
    transform: translateY(-50%);
    left: 22.5%;
  }

  .relative {
    position: relative;
  }

  @media ${devices.desktopL} {
    ${AbsoluteDecoration} {
      position: relative;
      top: 0%;
      transform: translateY(0%);
      left: 0%;
      margin-top: 90px;
    }
  }

  @media ${devices.tabletM} {
    h2 {
      font-size: 45px;
    }

    ${AbsoluteDecoration} {
      margin-top: 60px;
    }
  }
`;

export const NoteContainer = styled.div`
  padding: 22px 1rem 2rem 1rem;
  background-color: ${COLOR_BLACK};
  max-width: 24rem;
  margin: 90px auto 150px auto;
  border: 1px solid ${COLOR_WHITE_LIGHT};

  p {
    font-weight: 400;
    font-family: "Defcon Zero Condensed";
    margin: 0;
  }

  @media ${devices.tabletM} {
    margin: 60px auto;
  }
`;

export const TabButtons = styled.div<StringProps>`
  font-size: 14px;
  font-family: "Defcon Zero";
  cursor: pointer;
  position: relative;
  padding: 12.5px 1rem;
  background-color: ${({ activeTab }) =>
    activeTab ? COLOR_BLACK_DARK : COLOR_TRANSPARENT};
  border: 3px solid ${COLOR_WHITE};
  margin: 2px 0;
  transition: 0.3s background-color;

  &:hover {
    background-color: ${COLOR_BLACK_DARK};
  }
`;

export const TabFlex = styled(Flex)`
  max-width: max-content;
  margin: 0 auto;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -8.5px;
    right: -12px;
    border-bottom: 8.5px solid ${COLOR_WHITE};
    border-right: 8.5px solid ${COLOR_BLACK_DARK};
    border-left: 8.5px solid ${COLOR_BLACK_DARK};
    width: calc(100% - 17px);
    left: 0;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -8.5px;
    border-bottom: 8.5px solid ${COLOR_WHITE};
    width: 100%;
    left: 0;
  }
`;

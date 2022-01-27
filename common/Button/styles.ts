import styled from "styled-components";
import { COLOR_GREEN_DARKEST, COLOR_GREEN_LIGHT } from "helpers/colorPalette";

export const ButtonsContainer = styled.div`
  margin: 2rem auto;
  width: 130px;

  svg {
    rect,
    path {
      transition: 0.3s all;
    }

    &:hover {
      rect {
        fill: ${COLOR_GREEN_DARKEST};
      }
      path {
        fill: ${COLOR_GREEN_LIGHT};
      }
    }
    cursor: pointer;
  }
`;

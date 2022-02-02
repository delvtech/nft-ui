import styled from "styled-components";
import colors, {
  COLOR_GREEN_DARKEST,
  COLOR_GREEN_LIGHT,
} from "helpers/colorPalette";
import fontSizes from "helpers/fontSizes";

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

interface ButtonProps {
  bgColor?: keyof typeof colors;
  borderColor?: keyof typeof colors;
  color?: keyof typeof colors;
  fontSize?: keyof typeof fontSizes;
}

export const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  width: max-content;

  background-color: ${({ bgColor = "greenDarkest" }) => colors[bgColor]};
  border: 1px solid ${({ borderColor = "greenLight" }) => colors[borderColor]};

  font-family: "Rubik", sans-serif;
  font-size: ${({ fontSize = "md" }) => fontSizes[fontSize]};
  color: ${({ color = "white" }) => colors[color]};
`;

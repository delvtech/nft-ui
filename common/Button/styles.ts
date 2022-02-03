import styled from "styled-components";
import {
  COLORS,
  COLOR_GREEN_DARKEST,
  COLOR_GREEN_LIGHT,
} from "helpers/colorPalette";

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

/**
 * Button Variants
 */
export enum ButtonVariant {
  PRIMARY = "primary",
}

/**
 * Button sizes
 */
export enum ButtonSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  AUTO = "AUTO",
}

const buttonSizes: Record<ButtonSize, string> = {
  [ButtonSize.SMALL]: "40px",
  [ButtonSize.MEDIUM]: "50px",
  [ButtonSize.LARGE]: "60px",
  [ButtonSize.AUTO]: "auto",
};

/**
 * Style helpers
 */
const getBorder = (variant: ButtonVariant) => {
  switch (variant) {
    case ButtonVariant.PRIMARY:
      return COLORS.greenLight;
    default:
      return COLORS.transparent;
  }
};

const getBackground = (variant: ButtonVariant) => {
  switch (variant) {
    case ButtonVariant.PRIMARY:
      return COLORS.black;
    default:
      return COLORS.transparent;
  }
};

export const getHeight = (size: ButtonSize) => buttonSizes[size];

export interface ButtonStyles {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const StyledButton = styled.button<ButtonStyles>`
  padding: 0px 10px 0px 10px;
  width: max-content;
  height: ${({ size = ButtonSize.SMALL }) => getHeight(size)};
  background-color: ${({ variant = ButtonVariant.PRIMARY }) =>
    getBackground(variant)};
  border: 1px solid
    ${({ variant = ButtonVariant.PRIMARY }) => getBorder(variant)};
  font-family: "Defcon Zero";
  font-size: ${({}) => "14px"};
  color: ${({}) => "white"};
`;

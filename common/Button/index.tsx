import React, { MouseEventHandler } from "react";
import { ButtonsContainer, PrimaryButtonContainer } from "common/Button/styles";
import { COLOR_BLACK, COLOR_WHITE } from "helpers/colorPalette";
import { Flex } from "common/Container/styles";
import { StringProps } from "helpers/types";

export const NavigationButtons = ({ slider }: StringProps) => {
  return (
    <ButtonsContainer>
      <Flex>
        <svg
          width="57"
          height="79"
          viewBox="0 0 57 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => slider?.current?.slickPrev()}
        >
          <rect
            x="-0.5"
            y="0.5"
            width="56"
            height="78"
            transform="matrix(-1 0 0 1 56 0)"
            fill={COLOR_BLACK}
            stroke={COLOR_WHITE}
          />
          <path
            d="M13.4434 39.5L37.6415 54.4953V24.5047L13.4434 39.5Z"
            fill={COLOR_WHITE}
          />
        </svg>
        <svg
          width="57"
          height="79"
          viewBox="0 0 57 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => slider?.current?.slickNext()}
        >
          <rect
            x="0.5"
            y="0.5"
            width="56"
            height="78"
            fill={COLOR_BLACK}
            stroke={COLOR_WHITE}
          />
          <path
            d="M43.5566 39.5L19.3585 54.4953L19.3585 24.5047L43.5566 39.5Z"
            fill={COLOR_WHITE}
          />
        </svg>
      </Flex>
    </ButtonsContainer>
  );
};

export const PrimaryButton = ({ text, hasBorder }: StringProps) => {
  return (
    <PrimaryButtonContainer hasBorder={hasBorder}>
      <div className="box foo">{text}</div>
    </PrimaryButtonContainer>
  );
};

interface ButtonProps extends ButtonStyles {
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
  size,
  variant,
}) => (
  <StyledButton
    disabled={disabled}
    onClick={onClick}
    size={size}
    type="button"
    variant={variant}
  >
    {children}
  </StyledButton>
);

export default Button;

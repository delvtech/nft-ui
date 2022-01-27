import { COLOR_BLACK_DARK, COLOR_WHITE } from "helpers/colorPalette";
import { devices } from "helpers/devices";
import { StringProps } from "helpers/types";
import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  width: 330px;
  height: 330px;

  img {
    object-fit: cover;
  }
`;

export const ContentContainer = styled.div`
  background-color: ${COLOR_BLACK_DARK};
  border: 1px solid ${COLOR_WHITE};
  padding: 26px 30px 30px 30px;
  position: relative;
  align-items: center;
  display: flex;

  p {
    font-size: 0.875rem;
    font-family: "Defcon Zero Condensed";
    text-align: start;
    direction: initial;
    line-height: 16.41px;
  }

  br {
    display: block;
    content: "";
    margin-bottom: 1rem;
  }

  &:after {
    content: " ";
    background-image: url("/assets/svg/About/content_decoration.svg");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    top: -35px;
    height: 15px;
    width: 141px;
  }

  &:before {
    content: " ";
    background-image: url("/assets/svg/About/content_decoration.svg");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    right: 0;
    bottom: -35px;
    height: 15px;
    width: 141px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: " ";
    background-image: url("/assets/svg/Collection/background.svg");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
`;

export const GridContainer = styled.div<StringProps>`
  display: grid;
  grid-template-columns: 1.125fr 1fr 1fr;
  grid-gap: 45px;
  gap: 45px;
  margin: 4.3125rem 0;
  min-height: 392px;
  height: 100%;
  direction: ${({ isEven }) => isEven && "rtl"};

  @media (max-width: 1439px) {
    ${ContentContainer} {
      grid-column: 1 /3;
      margin-bottom: 2rem;
    }

    ${ImageWrapper} {
      max-width: 300px;
      max-height: 300px;
    }

    ${ImageContainer} {
      width: calc(100% - 28px);
    }

    img {
      object-fit: contain;
    }

    grid-gap: 35px;
    gap: 35px;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.tabletM} {
    ${ContentContainer} {
      grid-column: auto;
    }
    margin: 6.3125rem 0;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const OriginalVersionContainer = styled.div<StringProps>`
  display: ${({ hidden }) => (hidden ? "none" : "block")};
`;

export const MemeVersionContainer = styled.div<StringProps>`
  display: ${({ hidden }) => (hidden ? "none" : "block")};
`;

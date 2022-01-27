import styled from "styled-components";
import { devices } from "helpers/devices";

export const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 60px;
  gap: 60px;

  @media ${devices.desktopL} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.tabletL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 475px;
  max-width: 660px;
  margin-left: auto;

  &:after {
    content: " ";
    background-image: url("/assets/svg/HeroSection/vector-top.svg");
    background-repeat: no-repeat;
    background-size: contain;
    right: 0;
    position: absolute;
    left: -60px;
    top: -50px;
    height: 100%;
    width: 100%;
    max-width: 404px;
    max-height: 192px;
  }

  &:before {
    content: " ";
    background-image: url("/assets/svg/HeroSection/vector-bottom.svg");
    background-repeat: no-repeat;
    background-size: contain;
    right: 0;
    position: absolute;
    right: -100px;
    bottom: -55px;
    height: 100%;
    width: 100%;
    max-width: 404px;
    max-height: 192px;
  }

  @media ${devices.tabletL} {
    margin: 5rem auto;
  }

  @media ${devices.tabletM} {
    min-height: 50vh;
    margin: 0;

    &:after {
      display: none;
    }

    &:before {
      display: none;
    }
  }
`;

export const HeroSectionContainer = styled.section`
  padding: 19.75rem 0;

  @media ${devices.tabletM} {
    padding: 6.75rem 0 0 0;
  }
`;

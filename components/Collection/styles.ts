import Slider from "react-slick";
import { StringProps } from "helpers/types";
import styled from "styled-components";

export const CollectionContainer = styled.div<StringProps>`
  position: relative;
  width: 200px !important;
  height: 200px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:after {
    content: " ";
    background-image: url("/assets/svg/Collection/background.svg");
    background-repeat: no-repeat;
    background-size: auto;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 1300px) {
    width: 100% !important;

    &:after {
      background-repeat: round;
      background-size: cover;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 170px;
  width: 170px;
`;

export const StyledSlider = styled(Slider)`
  margin: 6.875rem 0 0 0;
  width: 100%;
  display: grid;

  .slick-list {
    padding: 40px 0 !important;
    transition: 0.5s transform;
  }

  .slick-current {
    transform: scale(1.18);
    transition: 0.5s transform;
  }

  .slick-center {
    transform: scale(1.18);
    transition: 0.5s transform;

    ${CollectionContainer} {
      transition: 0.5s transform;

      &:after {
        background-image: url("/assets/svg/Collection/active-background.svg");
        background-size: cover;
        width: 100%;
        height: 100%;
        top: 0px;
        left: -5px;
        transform: scale(1.18);
      }
    }

    ${ImageContainer} {
      transition: 0.5s transform;
      transform: scale(1.18);
    }
  }

  @media (max-width: 876px) {
    margin: 2.875rem 0 0 0;

    .slick-center {
      ${CollectionContainer} {
        &:after {
          background-image: url("/assets/svg/Collection/background.svg");
          transform: scale(1);
          background-repeat: no-repeat;
          background-position: center;
          background-size: auto;
          left: 0;
        }

        ${ImageContainer} {
          transform: scale(1);
        }
      }
    }

    .slick-current,
    .slick-center {
      transform: scale(1);
    }
  }
`;

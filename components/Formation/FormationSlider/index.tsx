import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NavigationButtons } from "common/Button";
import { Data, StringProps } from "helpers/types";
import {
  FormationSliderContainer,
  RarityContainer,
  ImageContainer,
  Progress,
  FormationItem,
  Missing,
  StyledSlider,
} from "components/Formation/FormationSlider/styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Rarity = ({ rarity }: StringProps) => {
  return (
    <RarityContainer>
      0%
      <Progress>
        <Missing rarity={rarity} />
      </Progress>
      {rarity}%
    </RarityContainer>
  );
};

export const FormationSlider = ({ data }: Data) => {
  const slider = useRef<any>(null);
  const [slideState, setSlideState] = useState({
    children: 3,
    slidesToShow: 3,
  });

  const settings = {
    draggable: false,
    swipe: false,
    arrows: false,
    speed: 500,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    centerPadding: "0px",
    infinite: slideState.children > 3,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          centerPadding: "-20px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  useEffect(() => {
    setSlideState({
      children: slider?.current?.props.children.length,
      slidesToShow: slider?.current?.props.slidesToShow,
    });
  }, [slider]);

  return (
    <FormationSliderContainer>
      <h3>{data.title}</h3>
      <StyledSlider ref={slider} {...settings}>
        {data.content.map((item: Data, index: number) => {
          return (
            <FormationItem key={index}>
              <ImageContainer>
                <Image
                  src={`/assets/png/Formation/${data.title}/${item.image}.png`}
                  alt={item.image}
                  layout="fill"
                />
              </ImageContainer>
              <Rarity rarity={item.rarity} />
              <span>{item.description}</span>
            </FormationItem>
          );
        })}
      </StyledSlider>
      {slideState.children > slideState.slidesToShow && (
        <NavigationButtons slider={slider} />
      )}
    </FormationSliderContainer>
  );
};

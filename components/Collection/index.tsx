import useSWR from "swr";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import { SectionContainer } from "common/Container";
import { NavigationButtons } from "common/Button";
import fetcher from "helpers/fetcher";
import { Data, StringProps } from "helpers/types";
import {
  CollectionContainer,
  ImageContainer,
  StyledSlider,
} from "components/Collection/styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Collection = () => {
  const { data } = useSWR<Data>("/api/collection", fetcher);
  const slider = useRef<any>(null);

  const settings = {
    draggable: false,
    swipe: false,
    arrows: false,
    infinite: true,
    className: "center",
    speed: 500,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    centerPadding: "-40px",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <SectionContainer>
      <Fade triggerOnce>
        <h2>Browse Our Collection</h2>
      </Fade>
      <StyledSlider ref={slider} {...settings}>
        {data?.map((item: StringProps, index: number) => {
          return (
            <CollectionContainer key={index}>
              <ImageContainer>
                <Image src={item.image} layout="fill" alt="" />
              </ImageContainer>
            </CollectionContainer>
          );
        })}
      </StyledSlider>
      <NavigationButtons slider={slider} />
    </SectionContainer>
  );
};

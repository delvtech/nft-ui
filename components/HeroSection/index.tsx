import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { SectionContainer } from "common/Container";
import {
  HeroSectionContainer,
  HeroWrapper,
  ImageContainer,
} from "components/HeroSection/styles";

import HeroImage from "public/assets/gif/hero_image.gif";

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <SectionContainer padding="0" textAlign="start" hasOverflow>
        <Fade triggerOnce>
          <HeroWrapper>
            <h1>Welcome to Principal Valley</h1>
            <ImageContainer>
              <Image src={HeroImage} alt="hero" layout="fill" priority />
            </ImageContainer>
          </HeroWrapper>
        </Fade>
      </SectionContainer>
    </HeroSectionContainer>
  );
};

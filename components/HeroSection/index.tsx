import { Fade } from "react-awesome-reveal";
import { SectionContainer } from "common/Container";
import { DesktopHeader, MobileHeader } from "components/Entrance/styles";
import { PrimaryButton } from "common/Button";
import {
  HeroSectionContainer,
  HeroWrapper,
  ContentWrapper,
  ContentCenter,
  ButtonWrapper,
} from "components/HeroSection/styles";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <SectionContainer padding="0" textAlign="start" hasOverflow>
        <Fade triggerOnce>
          <HeroWrapper>
            <ContentWrapper>
              <ContentCenter>
                <DesktopHeader>
                  <h1>
                    wander <mark>to the</mark> elfiverse
                  </h1>
                </DesktopHeader>
                <MobileHeader>
                  <h1>wander to the elfiverse</h1>
                </MobileHeader>
                <ButtonWrapper>
                  <Link href="/mint">
                    <PrimaryButton text="Start minting" />
                  </Link>
                  <PrimaryButton text="The Council" hasBorder />
                </ButtonWrapper>
              </ContentCenter>
            </ContentWrapper>
          </HeroWrapper>
        </Fade>
      </SectionContainer>
    </HeroSectionContainer>
  );
};

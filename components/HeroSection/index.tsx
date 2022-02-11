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
import { useMint } from "elf/hooks/useSmartContract";
import useWeb3 from "elf/useWeb3";
import { useCallback } from "react";
import toast from "react-hot-toast";

export const HeroSection = () => {
  const { library } = useWeb3();
  const signer = library?.getSigner();

  const { mutate: mint } = useMint(signer);

  const handleMint = useCallback(async () => {
    try {
      mint([1, []]);
    } catch (error) {
      toast.error("User cancelled transaction");
    }
  }, [mint]);

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
                  <PrimaryButton text="Start minting" onClick={handleMint} />
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

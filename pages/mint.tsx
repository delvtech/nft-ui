import type { NextPage } from "next";
import {
  ContentPage,
  ContentPageContainer,
  ContentSection,
} from "components/ContentPage";

import { Fade } from "react-awesome-reveal";
import { SectionContainer } from "common/Container";
import { PrimaryButton } from "common/Button";
import { Flex } from "common/Container/styles";
import { NextSeo } from "next-seo";
import { Spacer } from "common/Spacer";
import { useProof } from "elf/hooks/useProof";
import useWeb3 from "elf/useWeb3";
import { useMinter } from "elf/hooks/useMinter";
import { useCallback } from "react";

const HowToMint: NextPage = () => {
  const { account, library, active } = useWeb3();
  const { data: proof } = useProof(account);
  const { mutate: mint } = useMinter(library?.getSigner());

  const handleMint = useCallback(() => {
    if (active && proof) {
      mint([proof.tokenId, proof.proof]);
    }
  }, [active, proof]);

  return (
    <ContentSection>
      <SectionContainer padding="0" textAlign="start" justifyItems="center">
        <NextSeo title={`Element ElfiVerse - Mint`} />
        <ContentPageContainer padding="100px">
          <Flex direction="column" align="center">
            <Fade triggerOnce>
              <h1>Mint yours today!</h1>
              <img
                src="/assets/gif/hero_image.gif"
                style={{
                  maxWidth: "100%",
                }}
              />
              <Spacer size="50px" />
              <PrimaryButton
                text="Confirm Mint"
                hasBorder
                onClick={handleMint}
              />
            </Fade>
          </Flex>
        </ContentPageContainer>
      </SectionContainer>
    </ContentSection>
  );
};
export default HowToMint;

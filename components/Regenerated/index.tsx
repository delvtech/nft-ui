import { SectionContainer } from "common/Container";
import Image from "next/image";
import ElfGrid from "public/assets/png/Regeneration/ElfGrid.png";
import styled from "styled-components";

export const Regenerated = () => {
  return (
    <SectionContainer>
      <h2>regenerated uniquely</h2>
      <ImageContainer>
        <Image src={ElfGrid} alt="regenerated uniquely" quality={100} />
      </ImageContainer>
    </SectionContainer>
  );
};

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vw / 1.4);
`;

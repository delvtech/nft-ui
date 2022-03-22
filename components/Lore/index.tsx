import { SectionContainer } from "common/Container";
import { Flex } from "common/Container/styles";
import { First } from "components/Lore/First";
import { Second } from "components/Lore/Second";
import { GridContainer, LoreTitle } from "components/Lore/styles";
import { Third } from "components/Lore/Third";
import DefconZero from "components/Text/DefconZero";
import { useState } from "react";
import styled from "styled-components";

export const Lore = () => {
  const [isMeme, setIsMeme] = useState(false);

  return (
    <SectionContainer padding="4rem 0">
      <LoreTitle>The lore</LoreTitle>
      <Flex margin="-60px 0px 40px 0px" justify="center">
        <LoreButton onClick={() => setIsMeme(false)}>
          <DefconZero size="16px" margin="0px 40px 0px 0px" hoverColor="yellow">
            Original Version
          </DefconZero>
        </LoreButton>

        <LoreButton onClick={() => setIsMeme(true)}>
          <DefconZero size="16px" hoverColor="yellow">
            Meme Version
          </DefconZero>
        </LoreButton>
      </Flex>
      <GridContainer>
        <First isMeme={isMeme} />
        <Second isMeme={isMeme} />
        <Third isMeme={isMeme} />
      </GridContainer>
    </SectionContainer>
  );
};

const LoreButton = styled.button`
  background: none;
  padding: 0;
`;

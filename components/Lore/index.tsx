import { SectionContainer } from "common/Container";
import { Flex } from "common/Container/styles";
import { First } from "components/Lore/First";
import { Second } from "components/Lore/Second";
import { GridContainer, LoreTitle } from "components/Lore/styles";
import { Third } from "components/Lore/Third";
import { COLORS } from "helpers/colorPalette";
import { devices } from "helpers/devices";
import { useState } from "react";
import styled from "styled-components";

export const Lore = () => {
  const [isMeme, setIsMeme] = useState(false);

  return (
    <SectionContainer padding="4rem 0">
      <LoreTitle>The lore</LoreTitle>
      <Flex margin="-60px 0px 40px 0px" justify="center">
        <LoreButton onClick={() => setIsMeme(false)} margin="0px 40px 0px 0px">
          <ModeText active={!isMeme}>Original Version</ModeText>
        </LoreButton>

        <LoreButton onClick={() => setIsMeme(true)}>
          <ModeText active={isMeme}>Meme Version</ModeText>
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

const ModeText = styled.div<{ active?: boolean }>`
  font-family: Defcon Zero;
  font-size: 20px;
  letter-spacing: 2px;
  transition: color 250ms;
  color: ${({ active }) => (active ? COLORS.yellow : COLORS.white)};
  text-shadow: ${({ active }) => active && `0px 0px 10px ${COLORS.yellow}`};

  :hover {
    color: ${COLORS.yellow};
  }

  @media ${devices.tabletM} {
    font-size: 16px;
  }

  @media ${devices.mobileL} {
    font-size: 14px;
  }
`;

const LoreButton = styled.button<{ margin?: string }>`
  background: none;
  padding: 0;

  margin: ${({ margin }) => margin};
`;

import { SectionContainer } from "common/Container";
import { First } from "components/Lore/First";
import { Second } from "components/Lore/Second";
import { GridContainer, LoreTitle } from "components/Lore/styles";
import { Third } from "components/Lore/Third";

export const Lore = () => (
  <SectionContainer padding="4rem 0">
    <LoreTitle>The lore</LoreTitle>
    <GridContainer>
      <First />
      <Second />
      <Third />
    </GridContainer>
  </SectionContainer>
);

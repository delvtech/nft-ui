import { SectionContainer } from "common/Container";
import { Formation } from "components/Formation";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const FormationPage: NextPage = () => (
  <SectionContainer padding="8rem 0">
    <NextSeo title="Element ElfiVerse - Formation" />
    <Formation />
  </SectionContainer>
);

export default FormationPage;

import type { NextPage } from "next";
import { Formation } from "components/Formation";
import { SectionContainer } from "common/Container";
import { NextSeo } from "next-seo";

const FormationPage: NextPage = () => {
  return (
    <SectionContainer padding="8.5rem 0">
      <NextSeo title={`Element ElfiVerse - Formation`} />
      <Formation />
    </SectionContainer>
  );
};

export default FormationPage;

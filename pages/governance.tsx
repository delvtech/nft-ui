import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { SectionContainer } from "common/Container";

const GovernancePage: NextPage = () => {
  return (
    <SectionContainer padding="8.5rem 0">
      <NextSeo title={`Element ElfiVerse - Governance`} />
    </SectionContainer>
  );
};

export default GovernancePage;

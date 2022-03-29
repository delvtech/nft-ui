import { SectionContainer } from "common/Container";
import { Collection } from "components/Collection/Collection";
import { getDelegatorHistory } from "elf/council/getDelegatorHistory";
import { getMintHistory } from "elf/elfiverse/getMintHistory";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import { DayCount } from "src/types";

interface CollectionPageProps {
  mintHistory: Array<DayCount>;
  delegationHistory: Array<DayCount>;
}

export const CollectionPage: NextPage<CollectionPageProps> = ({
  mintHistory,
  delegationHistory,
}) => (
  <SectionContainer padding="8rem 0">
    <NextSeo title={`Element ElfiVerse - Collection`} />
    <Collection
      mintHistory={mintHistory}
      delegationHistory={delegationHistory}
    />
  </SectionContainer>
);

export async function getStaticProps() {
  const delegationHistory = await getDelegatorHistory();
  const mintHistory = await getMintHistory();

  return {
    props: {
      delegationHistory,
      mintHistory,
    },
    revalidate: 60, // seconds
  };
}

export default CollectionPage;

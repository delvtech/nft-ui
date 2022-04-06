import { SectionContainer } from "common/Container";
import { Collection } from "components/Collection/Collection";
import { getMintHistory } from "elf/elfiverse/getMintHistory";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import { DayCount } from "src/types";
import { getCurrentMintCount } from "src/util/getCurrentMintCount";

interface CollectionPageProps {
  mintHistory: Array<DayCount>;
  mintCount: number;
}

export const CollectionPage: NextPage<CollectionPageProps> = ({
  mintHistory,
  mintCount,
}) => (
  <SectionContainer padding="8rem 0">
    <NextSeo title={`Element ElfiVerse - Collection`} />
    <Collection mintHistory={mintHistory} mintCount={mintCount} />
  </SectionContainer>
);

export async function getStaticProps() {
  const mintCount = await getCurrentMintCount();
  const mintHistory = await getMintHistory();

  return {
    props: {
      mintCount,
      mintHistory,
    },
    revalidate: 60, // seconds
  };
}

export default CollectionPage;

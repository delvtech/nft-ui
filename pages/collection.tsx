import { SectionContainer } from "common/Container";
import { Collection } from "components/Collection/Collection";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";

export const CollectionPage: NextPage = () => {
  return (
    <SectionContainer padding="8rem 0">
      <NextSeo title={`Element ElfiVerse - Collection`} />
      <Collection />
    </SectionContainer>
  );
};

export default CollectionPage;

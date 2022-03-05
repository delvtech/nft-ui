import { ContentPage } from "components/ContentPage";
import React from "react";
import { Fade } from "react-awesome-reveal";
import ReactTextTransition, { presets } from "react-text-transition";
import { CollectionCard } from "./CollectionCard";
import { CollectionContainer } from "./styles";

export const Collection = () => {
  return (
    <ContentPage padding="100px 124px 144px 124px" title="Collection">
      <CollectionContainer>
        <h1>
          <ReactTextTransition
            text="My ELF Collection"
            springConfig={presets.gentle}
          />
        </h1>
        <Fade>
          <CollectionCard />
        </Fade>
      </CollectionContainer>
    </ContentPage>
  );
};

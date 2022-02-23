import Image from "next/image";
import React from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import { ContentPage } from "components/ContentPage";
import { ContentWrapper } from "components/Entrance/styles";
import { MintContainer } from "./styles";

import MintGIF from "public/assets/gif/hero_image.gif";

export const MintPlaceholder = () => (
  <ContentPage padding="100px 125px 144px 125px" title="Mint">
    <MintContainer>
      <h1>
        <ReactTextTransition
          text="Not currently eligible for mint."
          springConfig={presets.gentle}
        />
      </h1>

      <Image src={MintGIF} alt="Elfiverse" width="640px" height="403px" />

      <ContentWrapper>
        <ReactTextTransition
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into stale."
          springConfig={presets.gentle}
        />
      </ContentWrapper>
    </MintContainer>
  </ContentPage>
);

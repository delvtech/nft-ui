import React from "react";
import { SectionContainer } from "common/Container";
import { InternalLink } from "common/InternalLink";
import { Timer } from "components/Countdown/Timer";
import {
  ContentWrapper,
  DesktopHeader,
  EntranceContainer,
  EntranceSection,
  MobileHeader,
} from "components/Entrance/styles";
import { PrimaryButton } from "common/Button/styles";

const handleClick = () => {
  localStorage.setItem("hasEntered", "true");
};

export const Entrance = () => (
  <EntranceSection>
    <SectionContainer padding="0">
      <EntranceContainer>
        <DesktopHeader>
          <h1>
            wander <mark>into the</mark> elfiverse
          </h1>
        </DesktopHeader>
        <MobileHeader>
          <h1>wander into the elfiverse</h1>
        </MobileHeader>
        <ContentWrapper>
          <p>
            The <i>ELFIVerse</i> is what you want it to be. It can be a place of
            community, a place of peace and a place of laughter. The{" "}
            <i>ELFIVerse</i> <br />
            is your place online with Element.
          </p>
        </ContentWrapper>
        <InternalLink href="/home" noUnderline onClick={handleClick}>
          <PrimaryButton>Enter world</PrimaryButton>
        </InternalLink>
        <Timer />
      </EntranceContainer>
    </SectionContainer>
  </EntranceSection>
);

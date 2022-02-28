import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { SectionContainer } from "common/Container";
import { ExternalLink } from "common/ExternalLink";
import {
  Copyright,
  GridContainer,
  LogoContainer,
  LogoMobileContainer,
} from "components/Layout/Footer/styles";

import Logo from "public/assets/svg/logo.svg";
import { DISCORD_URL, ELEMENT_FI_URL, TWITTER_URL } from "src/urls";

export const Footer = () => {
  return (
    <SectionContainer textAlign="start" padding="5rem 0">
      <Fade triggerOnce>
        <LogoMobileContainer>
          <Image
            src={Logo}
            alt=""
            layout="fixed"
            height="120px"
            width="272px"
          />
        </LogoMobileContainer>
        <GridContainer>
          <LogoContainer>
            <Image
              src={Logo}
              alt=""
              layout="fixed"
              height="120px"
              width="272px"
            />
          </LogoContainer>
          <div>
            <h4>Home</h4>
            <ExternalLink href="/formation">Formation</ExternalLink>
            <ExternalLink href="/minting">How to mint</ExternalLink>
            <ExternalLink href="/rollout-release">
              The rollout release
            </ExternalLink>
          </div>
          <div>
            <h4>Learn</h4>
            <ExternalLink href={ELEMENT_FI_URL}>Governance</ExternalLink>
            <ExternalLink href={ELEMENT_FI_URL}>Documentation</ExternalLink>
            <ExternalLink href={ELEMENT_FI_URL}>
              Introduction to the Elfiverse
            </ExternalLink>
          </div>
          <div>
            <h4>Social</h4>
            <ExternalLink href={DISCORD_URL}>Discord</ExternalLink>
            <ExternalLink href={TWITTER_URL}>Twitter</ExternalLink>
          </div>
        </GridContainer>
      </Fade>
      <Fade triggerOnce>
        <Copyright>
          <p>©2021 ElementFi. All rights reserved</p>
        </Copyright>
      </Fade>
    </SectionContainer>
  );
};

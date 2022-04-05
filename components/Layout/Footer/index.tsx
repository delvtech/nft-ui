import { SectionContainer } from "common/Container";
import { ExternalLink } from "common/ExternalLink";
import {
  Copyright,
  GridContainer,
  LogoContainer,
  LogoMobileContainer,
} from "components/Layout/Footer/styles";
import Image from "next/image";
import Logo from "public/assets/svg/logo.svg";
import { Fade } from "react-awesome-reveal";
import {
  CC0_URL,
  COUNCIL_DELEGATE_URL,
  COUNCIL_DOC_URL,
  COUNCIL_URL,
  DISCORD_URL,
  PRIVACY_POLICY_URL,
  TOS_URL,
  TWITTER_URL,
} from "src/urls";

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
            <ExternalLink href="/rollout-release">
              The rollout release
            </ExternalLink>
            <ExternalLink href={TOS_URL}>Terms of Service</ExternalLink>
            <ExternalLink href={CC0_URL}>Artwork License</ExternalLink>
            <ExternalLink href={PRIVACY_POLICY_URL}>
              Privacy Policy
            </ExternalLink>
          </div>
          <div>
            <h4>Governance</h4>
            <ExternalLink href={COUNCIL_URL}>Council</ExternalLink>
            <ExternalLink href={COUNCIL_DELEGATE_URL}>Delegate</ExternalLink>
            <ExternalLink href={COUNCIL_DOC_URL}>Documentation</ExternalLink>
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
          <p>©2022 ElementFi. All rights reserved</p>
        </Copyright>
      </Fade>
    </SectionContainer>
  );
};

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
            <ExternalLink href="/minting">How to mint</ExternalLink>
            <ExternalLink href="/rollout-release">
              The rollout release
            </ExternalLink>
            <ExternalLink href="/governance">governance dashboard</ExternalLink>
          </div>
          <div>
            <h4>Learn</h4>{" "}
            <ExternalLink href="https://www.youtube.com/">
              Governance
            </ExternalLink>
            <ExternalLink href="https://www.youtube.com/">
              Documentation
            </ExternalLink>
            <ExternalLink href="https://www.youtube.com/">
              Governance Grants
            </ExternalLink>
            <ExternalLink href="https://www.youtube.com/">
              Dashboard UI Guide
            </ExternalLink>
            <ExternalLink href="https://www.youtube.com/">
              Introduction to the elfiverse
            </ExternalLink>
          </div>
          <div>
            <h4>Social</h4>
            <ExternalLink href="https://www.youtube.com/">Discord</ExternalLink>
            <ExternalLink href="https://www.youtube.com/">Twitter</ExternalLink>
            <ExternalLink href="https://www.youtube.com/">Medium</ExternalLink>
            <ExternalLink href="https://www.youtube.com/">Github</ExternalLink>
            <ExternalLink href="https://www.youtube.com/">
              Telegram
            </ExternalLink>
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

import styled from "styled-components";
import { SectionContainer } from "common/Container";
import { COLOR_WHITE_LIGHT } from "helpers/colorPalette";
import { devices } from "helpers/devices";

export const OurProcess = () => {
  return (
    <SectionContainer padding="0">
      <h2>our process</h2>
      <ContentWrapper>
        <p>
          This nascent form of Crypto Coven is a series of generative portraits
          of WITCHES, forged in this corner we&apos;ve carved out of the flat
          and open internet.
        </p>
        <p>
          Each WITCH manifests virtually as an array of pixels (in lieu of flesh
          and blood or sweat or paint), and each is unique, with a non-fungible
          token (NFT) stored on the Ethereum mainnet that attests to that
          uniqueness.
        </p>
        <p>
          While anyone may steal a WITCH&apos;S visage, if you hold a token, the
          identity you form and the treasures you reap from this world will
          travel with you to any web3 destination that may welcome a WITCH.
          Strangeness begets strangeness, and in coming days you&apos;ll see
          that number grow — we hope that you will grow it.
        </p>
        <p>
          For this initial coven, each WITCH falls into an archetype of power
          and will be named, described, and articulated. May you take them into
          the metaverse and roam.
        </p>
      </ContentWrapper>
    </SectionContainer>
  );
};

const ContentWrapper = styled.div`
  padding: 55px 75px;
  background-color: #09282d;
  border: 5px solid ${COLOR_WHITE_LIGHT};

  p {
    margin: 1rem 0;
    text-align: start;
    font-family: "Rubik Medium";
  }

  @media ${devices.tabletM} {
    padding: 55px 35px;
  }

  @media ${devices.mobileL} {
    padding: 55px 1rem;
  }
`;

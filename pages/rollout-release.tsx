import { ContentPage } from "components/ContentPage";
import type { NextPage } from "next";

const RolloutRelease: NextPage = () => (
  <ContentPage title="Rollout Release">
    <h1>Rollout release</h1>
    <p>
      The Elfiverse is a gift for the Element community to commemorate the
      launch of the Element DAO. An amplification of the community involvement
      in Element. The release schedule below was designed to enable a fair and
      transparent distribution that ensures accessibility of NFTs for eligible
      community members and{" "}
      <mark>prioritizes humans over the masses of bots</mark>. A total of{" "}
      <mark>10,000 ELFs</mark> will be available to mint.
    </p>
    <h2>First Release</h2>
    <p>
      The first <mark>4,700 community members</mark> qualified by trading fixed
      rates, depositing their assets for variable rates, or providing liquidity
      in the protocol, and were given the opportunity to mint on
      <mark> April 6th, 2022</mark>.
    </p>
    <h2>Second release</h2>
    <p>
      A second release to mint 2,800 ELFs will be offered to{" "}
      <mark>Discord Community</mark> members, Github DeFi{" "}
      <mark>Ecosystem Contributors</mark>, and users who traded fixed rates,
      deposited their assets for variable rates, or provided liquidity in the
      protocol but didn&apos;t make it in time for the First Release. This will
      be a limited release and more details will be announced shortly.
    </p>
    <h2>Release and Minting Details</h2>
    <p>
      You can learn more about the eligibility criteria all protocol users,
      community members and ecosystem contributors in the following blog post:
      <a href="https://mirror.xyz/0x3fcAf7DDf64E6e109B1e2A5CC17875D4a5993F39/bctuLRkf7oBL4mMJ9lPf0y0blFjBDslTUfUL0CEk1gc">
        Element DAO - ELFI Voting Distribution
      </a>
      After minting, you will be able to see your elf on the Elfiverse website
      immediately. You will need to connect your wallet at the top right and
      click on the My Collection button to see your revealed elf. Wallets and
      platforms like OpenSea typically take a while to update the refreshed
      metadata.
    </p>
    <h2>The Elven Reserve</h2>
    <p>
      The remaining 2,500 ELFs will be given to the Element DAO, so that the
      DAO&apos;s governance participants can decide upon how to use the NFTs.
    </p>
    <h2>Non-investments</h2>
    <p>
      These ELF NFTs are not for sale. They are not investments or hold or
      represent anything of monetary value. The overarching goal of this NFT
      project is to foster a collaborative community around the Element DAO.
    </p>
  </ContentPage>
);

export default RolloutRelease;

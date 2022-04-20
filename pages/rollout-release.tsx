import { ContentPage } from "components/ContentPage";
import type { NextPage } from "next";

const RolloutRelease: NextPage = () => (
  <ContentPage title="Rollout Release">
    <h1>Rollout release</h1>
    <p>
      The Elfiverse is a gift to the Element community to commemorate the launch
      of the Element DAO. It is a way to expand the possibilities of how the
      community can participate in the thriving ecosystem surrounding the
      Element Protocol. The release schedule below was designed to enable a fair
      and transparent distribution that ensures accessibility of NFTs for
      eligible community members and 
      <mark>prioritizes humans over bot armies</mark>. A total of{" "}
      <mark>10,000 ELFs</mark> will be available to mint.
    </p>
    <h2>First Release</h2>
    <p>
      The first <mark>4,700 community members</mark> qualified for minting by
      trading fixed rates, depositing their assets for variable rates, or
      providing liquidity in the Element Protocol. They were all given the
      opportunity to mint their ELFs on
      <mark> April 6th, 2022</mark>.
    </p>
    <h2>Second release</h2>
    <p>
      A second release to mint 2,800 ELFs will be offered to{" "}
      <mark>Discord Community</mark> members, GitHub DeFi{" "}
      <mark>Ecosystem Contributors</mark>, and users who have either traded
      fixed rates, deposited their assets for variable rates, or provided
      liquidity in the Element Protocol but didn&apos;t make it in time for the
      First Release. More details will be announced shortly.
    </p>
    <h2>Release Details</h2>
    <p>
      Everyone who claimed and delegated their Element DAO ELFI tokens before
      the 7,500 whitelist spots were filled had (or will have) the opportunity
      to mint an ELF. You can learn more about the eligibility criteria for the
      Element Protocol users, community members, and ecosystem contributors in
      the following blog post:
      <a
        href="https://mirror.xyz/0x3fcAf7DDf64E6e109B1e2A5CC17875D4a5993F39/bctuLRkf7oBL4mMJ9lPf0y0blFjBDslTUfUL0CEk1gc"
        target="_blank"
        rel="noreferrer"
      >
        Element DAO - ELFI Voting Distribution
      </a>
    </p>
    <h2>Minting Details</h2>
    <p>
      After minting, you will be able to see your ELF on the Elfiverse website
      immediately. You will have to connect your wallet at the top right and
      click on the &apos;My Collection&apos; button to see your revealed ELF.
      Wallets and NFT platforms typically take a while to update the refreshed
      metadata.
    </p>
    <h2>The Elven Reserve</h2>
    <p>
      The Element DAO will be given control over minting and distribution for
      the remaining 2,500 ELFs, so that the DAO&apos;s governance participants
      can decide on the usage of the NFTs.
    </p>
    <h2>Non-investments</h2>
    <p>
      These ELF NFTs are not for sale. They are not investments or hold or
      represent anything of monetary value. The overarching goal of this NFT
      project is to foster a collaborative community around the Element Protocol
      and DAO.
    </p>
  </ContentPage>
);

export default RolloutRelease;

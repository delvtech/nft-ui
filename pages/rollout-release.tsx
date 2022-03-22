import { ContentPage } from "components/ContentPage";
import type { NextPage } from "next";

const RolloutRelease: NextPage = () => (
  <ContentPage title="Rollout Release">
    <h1>Rollout release</h1>
    <p>
      The Elfiverse is a gift for the Element community to commemorate the
      launch of the Element DAO. An amplification of the community involvement
      in Element. The release schedule below was designed to enable a fair and
      transparent distribution that ensures accessibility of NFTs for{" "}
      <mark>
        {" "}
        all Element community members and prioritizes humans over the masses of
        bots.
      </mark>
    </p>
    <h2>First Release</h2>
    <p>
      An initial set of 2000 Elfis will be available to mint starting at{" "}
      <mark> 2:00p.m. EST on March 30, 2022. </mark> It will be accessible for
      active Element community members only and <mark> completely free. </mark>
      Each active community member will be able to mint one Elfi. <br /> Active
      community members are traders, LPs, and any community member that has used
      Element, the fixed rate protocol. <br /> Active community members will
      automatically receive their unique Elfi generated custom for their
      minting. Each elf contains traits that hold different rarities or
      formations stored in the Elfiverse library.
    </p>
    <h2>Second release</h2>
    <p>
      A second release of 2000 Elfis provides a second opportunity to
      participate, while opening up participation to a broader section of the
      community. This includes active members of the Element discord community
      as well members of the Ethereum ecosystem based on Github contributions.
      For more info on how we chose this set of community members and how you
      can participate, check out <mark> this link. </mark>
    </p>
    <h2>Third Release</h2>
    <p>Details of the final release are to be announced.</p>
    <h2>Release and Minting Details</h2>
    <p>
      After a release and mint release, you will be able to see your elf on the
      Elfiverse website immediately. You will need to connect your wallet at the
      top right and click on the My Collection button to see your revealed elf.
      Wallets and platforms like OpenSea typically take a while to update the
      refreshed metadata.
    </p>
  </ContentPage>
);

export default RolloutRelease;

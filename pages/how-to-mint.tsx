/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import { ContentPage } from "components/ContentPage";

const HowToMint: NextPage = () => {
  const content = [
    <h1 key={1}>Minting release</h1>,
    <p key={2}>
      This process was designed with three aims: make distribution fair and
      transparent,<mark> ensure access for element community members,</mark> and
      favor humans over bots.
    </p>,
    <h2 key={3}>Community Pre-release</h2>,
    <p key={4}>
      1,000 elves will be available to mint for element community members
      starting 5:35 p.m. ET on february 9 at <mark>completely free</mark>. Each
      person can mint up to 4 elves. <br /> Active community members are defined
      as anyone who has used element, the defi fixed rate protocol. <br /> These
      members will automatically receive <mark>their custom "elf"</mark>, which
      will grant them access to a private Discord channel
      <mark> (#custom-elfi)</mark> where they can get updates about future
      community involvement in the elfiverse and future nft related content.
      <br /> The community pre-release will be
      <mark> open indefinitely until we reach the cap of 1,000.</mark>
    </p>,
    <h2 key={5}>Public release</h2>,
    <p key={6}>
      The remaining Elves (plus any remaining from the pre-release) will be
      available to mint for the general public at 12 p.m. ET on february 10 at
      <mark> completely free</mark>. Each person can mint up up to 4 elves, and
      this per-wallet cap includes any elves minted in the community-release or
      exchanged on secondary marketplaces.
    </p>,
    <h2 key={7}>Unveiling</h2>,
    <p key={8}>
      The elves are revealed in weekly batches (Monday and Friday) to ensure
      that minters can't select their elves based on rarity. Minters may view
      their witches within a few days after minting them. <br />
      After an unveiling, you can always see your elf on our website
      immediately. Connect your wallet at the top right and click on the button
      to go to "Your Wallet," where you'll be able to see your revealed elf.
      Wallets and platforms like OpenSea typically take a while (sometimes a few
      hours, sometimes as long as days) to update to the refreshed metadata. On
      your elf’s OpenSea page, you can click a "Refresh metadata" button at the
      top right to request that OpenSea refresh the metadata more quickly.
    </p>,
    <h2 key={9}>Gifts</h2>,
    <p key={10}>
      Each of our HIGH elves Council (the core team) and army (contributors)
      will receive a custom, regenerative-designed elf. <br /> Friends of
      elfiverse with significant followings may receive a elfi. <br /> Community
      members who participate in the element governance system may be selected
      to receive a elfi.
    </p>,
  ];

  return <ContentPage content={content} title="How to Mint" />;
};
export default HowToMint;

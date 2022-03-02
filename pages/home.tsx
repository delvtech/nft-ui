import type { NextPage } from "next";
import { HeroSection } from "components/HeroSection";
import { Countdown } from "components/Countdown";
import { Regenerated } from "components/Regenerated";
import { OurProcess } from "components/OurProcess";
import { Lore } from "components/Lore";

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <Regenerated />
      <OurProcess />
      <Countdown />
      <Lore />
    </>
  );
};

export default Home;

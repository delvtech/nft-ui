import type { NextPage } from "next";
import { HeroSection } from "components/HeroSection";
import { Countdown } from "components/Countdown";
import { Collection } from "components/Collection";
import { About } from "components/About";
import { Formation } from "components/Formation";

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <Countdown />
      <Collection />
      <About />
      <Formation />
    </>
  );
};

export default Home;

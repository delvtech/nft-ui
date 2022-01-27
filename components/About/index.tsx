import Image from "next/image";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { SectionContainer } from "common/Container";
import { Tabs } from "components/About/Tabs";
import { AbsoluteDecoration } from "styles/globalStyles";
import {
  AboutContainer,
  NoteContainer,
  TabButtons,
  TabFlex,
} from "components/About/styles";

import WarningSVG from "public/assets/svg/warning.svg";

export const About = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <SectionContainer padding="2rem 0">
      <Fade triggerOnce>
        <AboutContainer>
          <h2>about the elfiverse</h2>
          <h3>A long time in a galaxy far away....</h3>
          <div className="relative">
            <AbsoluteDecoration>
              <Image
                alt="warning"
                src={WarningSVG}
                width="110px"
                height="110px"
                layout="fixed"
              />
            </AbsoluteDecoration>
            <NoteContainer>
              <p>
                note to users: please be advised our meme version was crafted
                for our valiant community. It was not meant for the dark elves
                or those without a sense of humour.
              </p>
            </NoteContainer>
          </div>
        </AboutContainer>
      </Fade>
      <Fade triggerOnce>
        <TabFlex justify="center">
          <TabButtons
            onClick={() => setActiveTab(0)}
            activeTab={activeTab === 0}
          >
            Original version
          </TabButtons>
          <TabButtons
            onClick={() => setActiveTab(1)}
            activeTab={activeTab === 1}
          >
            Meme version
          </TabButtons>
        </TabFlex>
        <Tabs activeTab={activeTab} />
      </Fade>
    </SectionContainer>
  );
};

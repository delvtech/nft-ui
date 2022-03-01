import { SectionContainer } from "common/Container";
import { FormationSlider } from "components/Formation/FormationSlider";
import {
  FormationContainer,
  FormationSection,
} from "components/Formation/styles";
import { Fade } from "react-awesome-reveal";
import formationData from "./formation.json";

export const Formation = () => (
  <FormationSection>
    <SectionContainer padding="6rem 0" textAlign="start">
      <Fade triggerOnce>
        <FormationContainer>
          <h2>The formation</h2>
          {formationData.data.map((item) => (
            <FormationSlider title={item.title} content={item.content} />
          ))}
        </FormationContainer>
      </Fade>
    </SectionContainer>
  </FormationSection>
);

import { ContainerProps } from "helpers/types";
import {
  Container,
  Section,
  SectionWrapper,
  SectionCenter,
} from "common/Container/styles";

export const SectionContainer = ({
  maxWidth,
  children,
  textAlign,
  padding,
  hasOverflow,
  id,
}: ContainerProps) => {
  return (
    <Section padding={padding} hasOverflow={hasOverflow} id={id}>
      <SectionWrapper>
        <SectionCenter textAlign={textAlign} gridColumn="1/13">
          <Container maxWidth={maxWidth}>{children}</Container>
        </SectionCenter>
      </SectionWrapper>
    </Section>
  );
};

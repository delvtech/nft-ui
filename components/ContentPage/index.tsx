import styled from "styled-components";
import { NextSeo } from "next-seo";
import { SectionContainer } from "common/Container";
import { Data } from "helpers/types";
import { Section } from "common/Container/styles";
import { devices } from "helpers/devices";
import {
  COLOR_GREEN_LIGHT,
  COLOR_TRANSPARENT,
  COLOR_WHITE_LIGHT,
} from "helpers/colorPalette";

export const ContentPage = ({ content, title }: Data) => {
  return (
    <ContentSection>
      <SectionContainer padding="0" textAlign="start">
        <NextSeo title={`Element ElfiVerse - ${title}`} />
        <ContentPageContainer>{content}</ContentPageContainer>
      </SectionContainer>
    </ContentSection>
  );
};

const ContentSection = styled.section`
  padding: 13.75rem 0 0 0;

  ${Section} {
    padding: 0;
  }
`;

const ContentPageContainer = styled.div`
  padding: 100px 125px 235px 125px;
  background-color: #09282d;
  border: 3px solid ${COLOR_WHITE_LIGHT};

  br {
    display: block;
    content: "";
    margin-bottom: 25px;
  }

  p {
    font-size: 20px;
    font-family: "Defcon Zero";
    font-weight: 400;
  }

  mark {
    color: ${COLOR_GREEN_LIGHT};
    background: ${COLOR_TRANSPARENT};
  }

  h1 {
    font-family: "Defcon Zero";
    font-size: 80px;
    margin-bottom: 55px;
  }

  h2 {
    margin: 40px 0;
    font-size: 40px;
    font-weight: 400;
    font-family: "Defcon Zero Condensed";
  }

  @media ${devices.tabletL} {
    padding: 80px 65px 155px 65px;

    h1 {
      font-size: 55px;
    }

    h2 {
      font-size: 30px;
    }
  }

  @media ${devices.mobileL} {
    padding: 60px 1rem 125px 1rem;

    h1 {
      font-size: 35px;
    }

    h2 {
      font-size: 25px;
    }
  } ;
`;

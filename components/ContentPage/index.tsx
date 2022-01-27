import styled from "styled-components";
import { NextSeo } from "next-seo";
import { SectionContainer } from "common/Container";
import { Data } from "helpers/types";
import { devices } from "helpers/devices";
import { COLOR_GREEN_LIGHT, COLOR_TRANSPARENT } from "helpers/colorPalette";

export const ContentPage = ({ content, title }: Data) => {
  return (
    <SectionContainer padding="11.5rem 0" textAlign="start" maxWidth="65rem">
      <NextSeo title={`Element ElfiVerse - ${title}`} />
      <ContentPageContainer>{content}</ContentPageContainer>
    </SectionContainer>
  );
};

const ContentPageContainer = styled.div`
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
    h1 {
      font-size: 55px;
    }

    h2 {
      font-size: 30px;
    }
  }

  @media ${devices.mobileL} {
    h1 {
      font-size: 35px;
    }

    h2 {
      font-size: 25px;
    }
  } ;
`;

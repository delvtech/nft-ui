import Image from "next/image";
import { StringProps } from "helpers/types";
import {
  ContentContainer,
  GridContainer,
  ImageContainer,
  ImageWrapper,
  MemeVersionContainer,
  OriginalVersionContainer,
} from "components/About/Tabs/styles";

import { OriginalVersion } from "components/About/Tabs/content/originalContent";
import { MemeVersion } from "components/About/Tabs/content/memeContent";

const GridComponent = ({
  firstImage,
  secondImage,
  content,
  isEven,
}: StringProps) => {
  return (
    <GridContainer isEven={isEven}>
      <ContentContainer>
        <div>{content}</div>
      </ContentContainer>
      <ImageWrapper>
        <ImageContainer>
          <Image
            src={`/assets/png/About/${firstImage}.png`}
            layout="fill"
            alt=""
          />
        </ImageContainer>
      </ImageWrapper>
      <ImageWrapper>
        <ImageContainer>
          <Image
            src={`/assets/png/About/${secondImage}.png`}
            layout="fill"
            alt=""
          />
        </ImageContainer>
      </ImageWrapper>
    </GridContainer>
  );
};

export const Tabs = ({ activeTab }: StringProps) => {
  return (
    <>
      <OriginalVersionContainer hidden={activeTab !== 0}>
        {OriginalVersion.map((item, index) => {
          return (
            <GridComponent
              content={item.content}
              firstImage={item.first_image}
              secondImage={item.second_image}
              isEven={index % 2 !== 0}
              key={index}
            />
          );
        })}
      </OriginalVersionContainer>
      <MemeVersionContainer hidden={activeTab !== 1}>
        {MemeVersion.map((item, index) => {
          return (
            <GridComponent
              content={item.content}
              firstImage={item.first_image}
              secondImage={item.second_image}
              isEven={index % 2 !== 0}
              key={index}
            />
          );
        })}
      </MemeVersionContainer>
    </>
  );
};

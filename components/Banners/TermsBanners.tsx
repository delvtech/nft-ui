import { COLORS } from "helpers/colorPalette";
import { devices } from "helpers/devices";
import Image from "next/image";
import Logo from "public/assets/svg/element.svg";
import React, { useState } from "react";
import styled from "styled-components";

export const TermsBanner = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    !accepted && (
      <Container>
        <LogoContainer>
          <Image src={Logo} height={100} width={100} />
        </LogoContainer>
        <ChildrenWrapper>
          <SummaryWrapper>
            <Rubik>
              By continuing to navigate, we assume your permission to accept our
              Terms of Service and Privacy Policies.
            </Rubik>
          </SummaryWrapper>
          <PrimaryButton onClick={() => setAccepted(true)}>
            Accept Terms
          </PrimaryButton>
          <SecondaryButton onClick={() => setAccepted(false)}>
            Decline
          </SecondaryButton>
        </ChildrenWrapper>
      </Container>
    )
  );
};

const ChildrenWrapper = styled.div`
  margin-left: 25px;
  display: flex;
  align-items: center;

  width: 100%;

  @media ${devices.tabletM} {
    padding: 30px;
  }

  @media ${devices.mobileL} {
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    text-align: center;
    margin-left: 0;
  }
`;

const SummaryWrapper = styled.div`
  max-width: 50%;
  margin-right: auto;

  @media ${devices.mobileL} {
    margin-right: 0;
    max-width: none;
    margin-bottom: 10px;
  }
`;

const Rubik = styled.text`
  font-family: Rubik;
  font-size: 14px;

  @media ${devices.tabletM} {
    font-size: 14px;
  }
`;

const PrimaryButton = styled.button`
  padding: 14px 18px;
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  border-radius: 56px;
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;

  margin-left: 20px;
  margin-right: 20px;
  @media ${devices.tabletM} {
    font-size: 12px;
  }

  @media ${devices.mobileL} {
    margin-left: 0;
    margin-bottom: 10px;
    margin-right: 0px;
  }

  &:hover {
    background-color: ${COLORS.greenLight};
  }
`;

const SecondaryButton = styled.button`
  padding: 14px 18px;
  background-color: ${COLORS.jade};
  color: ${COLORS.white};
  border-radius: 56px;
  font-size: 14px;
  white-space: nowrap;

  margin-right: 30px;

  @media ${devices.tabletM} {
    font-size: 12px;
  }

  @media ${devices.mobileL} {
    margin-right: 0;
  }

  &:hover {
    background-color: #e5aca3;
    opacity: .4
    color: ${COLORS.black};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: red;

  position: sticky;
  margin: auto;
  top: 84%;
  z-index: 2;

  max-width: 80%;

  border-radius: 20px;
  border-color: ${COLORS.grayLight};
  border-width: 1px;

  background-color: ${COLORS.black};

  @media ${devices.tabletM} {
    top: 84%;
    max-width: 100%;
    margin: 0px 20px;
  }

  @media ${devices.mobileL} {
    top: 76%;
    max-width: 100%;
  }
  animation: fadeIn ease-in 500ms;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LogoContainer = styled.div`
  margin-top: 25px;
  margin-left: -15px;
  min-width: fit-content;

  @media ${devices.tabletM} {
    display: none;
    margin-top: 25px;
    margin-left: -15px;
  }
`;

import { COLORS } from "helpers/colorPalette";
import Logo from "public/assets/svg/element.svg";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 400px;
  height: 100px;
  background-color: red;

  position: sticky;
  margin: auto;
  top: 80%;
  z-index: 2;

  border-radius: 20px;
  border-color: ${COLORS.grayLight};
  border-width: 1px;

  background-color: ${COLORS.black};
`;

const LogoContainer = styled.div`
  margin-top: 25px;
  margin-left: -15px;
`;

export const Banner = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo height={100} width={100} />
      </LogoContainer>
      {/* <Image src={Logo} /> */}
      {/* <Logo /> */}
    </Container>
  );
};

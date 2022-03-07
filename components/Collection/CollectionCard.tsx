import { Spacer } from "common/Spacer";
import { useProof } from "elf/hooks/useProof";
import useWeb3 from "elf/useWeb3";
import { devices } from "helpers/devices";
import Image from "next/image";
import React from "react";
import { getTokenAssetURL } from "src/urls";
import { proofToTokenId } from "src/util/proofToTokenId";
import styled from "styled-components";
import { CollectionCardContainer } from "./styles";

export const CollectionCard = () => {
  const { account } = useWeb3();
  const { data: proofData } = useProof(account);
  const token = proofToTokenId(proofData);

  return (
    <CollectionCardContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ElfContainer>
          <Image src={getTokenAssetURL(token)} height={200} width={200} />
        </ElfContainer>
        <div
          style={{
            fontFamily: "Defcon Zero",
            marginTop: "8px",
          }}
        >
          ELF {token}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "center",
        }}
      >
        <NavButtonContainer>
          <CardNavButton>Elf Inventory</CardNavButton>
          <CardNavButton disabled>Minting History</CardNavButton>
        </NavButtonContainer>
        <MintingPeriodStatus />
      </div>
    </CollectionCardContainer>
  );
};

const NavButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  margin-left: 40px;
`;

export const ElfContainer = styled.div`
  margin-top: 10px;
  img {
    border-radius: 12px 12px 0px 0px;
  }
`;

export const CardNavButton = styled.button`
  padding: 10px;
  margin-right: 12px;
  border: none;
  font-family: Rubik;
  font-size: 16px;
  color: white;
  background: none;
`;

export const MintingPeriodStatusContainer = styled.div`
  border: 0.5px solid;
  border-radius: 12px;
  border-color: rgba(255, 255, 255, 1);

  padding: 20px;
  margin: 10px 30px;

  display: flex;
  flex-direction: column;

  h1 {
    font-family: Defcon Zero;
    font-size: 2rem;
    color: #4ecdc4;
    margin: 0;
  }

  h2 {
    font-family: Defcon Zero;
    font-size: 0.75rem;
    color: #f7fff7;
    margin: 0;
  }
`;

export const MintingPeriodStatus = () => (
  <MintingPeriodStatusContainer>
    <h1>501 Elves</h1>
    <Spacer size="16px" />
    <h2>Remaining in this minting period</h2>
    <Spacer size="20px" />
    <CountdownDate>05: 35: 35</CountdownDate>
  </MintingPeriodStatusContainer>
);

const CountdownDate = styled.div`
  font-family: "Defcon Zero";
  font-weight: 600;
  font-size: 30px;
  text-shadow: 0px 0px 20px rgba(20, 223, 186, 0.8);
  letter-spacing: 6px;

  outline: 1px solid #f7fff7;
  padding: 10px;
  margin-top: auto;

  @media ${devices.tabletL} {
    font-size: 2rem;
  }

  @media ${devices.mobileL} {
    font-size: 1rem;
  }
  @media ${devices.tabletM} {
    // font-size: 0.5rem;
  }
`;

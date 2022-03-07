import { Flex } from "common/Container/styles";
import { Spacer } from "common/Spacer";
import DefconZero from "components/Text/DefconZero";
import { useProof } from "elf/hooks/useProof";
import useWeb3 from "elf/useWeb3";
import Image from "next/image";
import React from "react";
import { getTokenAssetURL } from "src/urls";
import { proofToTokenId } from "src/util/proofToTokenId";
import styled from "styled-components";
import { MintingPeriodStatus } from "./MintingPeriodStatus";
import { CollectionCardContainer } from "./styles";

export const CollectionCard = () => {
  const { account } = useWeb3();
  const { data: proofData } = useProof(account);
  const token = proofToTokenId(proofData);
  const tokenURL = getTokenAssetURL(token);

  return (
    <CollectionCardContainer>
      <Flex direction="column">
        <ElfContainer>
          <Image src={tokenURL} height={200} width={200} alt="Minted elf" />
        </ElfContainer>

        <Spacer size="4px" />

        <DefconZero size="16px">ELF {token}</DefconZero>
      </Flex>

      <Flex direction="column" align="center" height="100%">
        <NavButtonContainer>
          <CardNavButton>Elf Inventory</CardNavButton>
          <CardNavButton disabled>Minting History</CardNavButton>
        </NavButtonContainer>
        <MintingPeriodStatus />
      </Flex>
    </CollectionCardContainer>
  );
};

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
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

  font-family: Rubik;
  font-size: 16px;

  color: white;
  border: none;
  background: none;
`;

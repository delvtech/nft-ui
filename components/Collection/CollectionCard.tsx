import { Flex } from "common/Container/styles";
import { Spacer } from "common/Spacer";
import DefconZero from "components/Text/DefconZero";
import { BigNumber } from "ethers";
import Image from "next/image";
import React from "react";
import { getTokenAssetURL } from "src/urls";
import styled from "styled-components";
import { MintingPeriodStatus } from "./MintingPeriodStatus";
import { CollectionCardContainer } from "./styles";

interface CollectionCardProps {
  tokenId?: BigNumber;
}

export const CollectionCard = ({ tokenId }: CollectionCardProps) => {
  const tokenURL = getTokenAssetURL(tokenId);

  return (
    <CollectionCardContainer>
      <Flex direction="column">
        <ElfContainer>
          <Image
            src={tokenURL}
            height={200}
            width={200}
            alt="Minted elf"
            quality={100}
          />
        </ElfContainer>

        <Spacer size="4px" />

        <DefconZero size="16px">ELF {tokenId?.toString()}</DefconZero>
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

import { Flex } from "common/Container/styles";
import { Spacer } from "common/Spacer";
import DefconZero from "components/Text/DefconZero";
import { BigNumber } from "ethers";
import { COLORS } from "helpers/colorPalette";
import Image from "next/image";
import React, { useState } from "react";
import { DayCount } from "src/types";
import { getTokenAssetURL } from "src/urls";
import styled from "styled-components";
import { MintHistoryChart } from "./MintHistoryChart";
import { MintingPeriodStatus } from "./MintingPeriodStatus";
import { CollectionCardContainer } from "./styles";

type CollectionCardView = "history" | "remaining";

interface CollectionCardProps {
  tokenId?: BigNumber;
  mintHistory: Array<DayCount>;
  delegationHistory: Array<DayCount>;
}

export const CollectionCard = ({
  tokenId,
  mintHistory,
  delegationHistory,
}: CollectionCardProps) => {
  const tokenURL = getTokenAssetURL(tokenId);
  const [view, setView] = useState<CollectionCardView>("remaining");

  return (
    <CollectionCardContainer>
      <Flex direction="column">
        <ElfContainer>
          {tokenURL ? (
            <Image
              src={tokenURL}
              height={250}
              width={250}
              alt="Minted elf"
              quality={100}
            />
          ) : (
            <ImagePlaceholder />
          )}
        </ElfContainer>

        <Spacer size="4px" />

        <DefconZero size="16px">
          ELF {!!tokenId ? tokenId.toString() : "?"}
        </DefconZero>
      </Flex>

      <Flex direction="column" align="center" height="100%">
        <NavButtonContainer>
          <CardNavButton onClick={() => setView("remaining")}>
            Elf Inventory
          </CardNavButton>
          <CardNavButton onClick={() => setView("history")}>
            Minting History
          </CardNavButton>
        </NavButtonContainer>
        {view === "remaining" ? (
          <svg width="85%" height={1}>
            <line x1="0" y1="0" x2="110" y2="0" stroke={COLORS.greenLight} />
            <line x1="110" y1="0" x2="400" y2="0" stroke={COLORS.whiteLight} />
          </svg>
        ) : (
          <svg width="85%" height={1}>
            <line x1="0" y1="0" x2="110" y2="0" stroke={COLORS.whiteLight} />
            <line x1="110" y1="0" x2="400" y2="0" stroke={COLORS.greenLight} />
          </svg>
        )}
        <CardContainer>
          {view === "remaining" && (
            <MintingPeriodStatus totalMints={delegationHistory.length} />
          )}
          {view === "history" && (
            <MintHistoryChart
              mintHistory={mintHistory}
              // isLoading={isMintHistoryLoading || isTransferLoading}
              // isError={didMintHistoryFail || didTransferFail}
              // isLoading={false}
              // isError={didMintHistoryFail || didTransferFail}
            />
          )}
        </CardContainer>
      </Flex>
    </CollectionCardContainer>
  );
};

const CardContainer = styled.div`
  max-width: 420px;
`;

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  margin-left: 40px;
`;

export const ElfContainer = styled.div`
  margin-top: 10px;
  div,
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

const ImagePlaceholder = styled.div`
  height: 250px;
  width: 250px;
  background: ${COLORS.semiTransparent};
`;

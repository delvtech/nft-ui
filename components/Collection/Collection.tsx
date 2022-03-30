import { Spacer } from "common/Spacer";
import DefconZero from "components/Text/DefconZero";
import { useHasMinted } from "elf/hooks/useHasMinted";
import { useMintDate } from "elf/hooks/useMintDate";
import { useTokenIds } from "elf/hooks/useTokenIds";
import { useWalletDialog } from "elf/hooks/useWalletDialog";
import useWeb3 from "elf/useWeb3";
import {
  COLORS,
  COLOR_GREEN_LIGHT,
  COLOR_TRANSPARENT,
  COLOR_WHITE_LIGHT,
} from "helpers/colorPalette";
import { devices } from "helpers/devices";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect } from "react";
import { DayCount } from "src/types";
import { getTokenAssetURL } from "src/urls";
import styled from "styled-components";
import { MintHistoryChart } from "./MintHistoryChart";
import { MintingPeriodStatus } from "./MintingPeriodStatus";

const Card = ({ title, children }: PropsWithChildren<{ title: string }>) => (
  <CardContainer>
    <h3>{title}</h3>
    <Spacer size="4px" />
    <svg width="100%" height={1}>
      <line x1="0" y1="0" x2="1000" y2="0" stroke={COLORS.whiteLight} />
    </svg>
    {children}
    <Spacer size="4px" />
  </CardContainer>
);

const CardContainer = styled.div`
  background-color: rgba(247, 255, 247, 0.07);

  padding: 24px;
  margin: 5px;

  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
`;

interface CollectionProps {
  mintHistory: Array<DayCount>;
  delegationHistory: Array<DayCount>;
}

export const Collection = ({
  mintHistory,
  delegationHistory,
}: CollectionProps) => {
  const hasMinted = useHasMinted();
  const { active, account } = useWeb3();
  const { open, close } = useWalletDialog();
  const { push } = useRouter();
  const tokenIds = useTokenIds(account);
  const firstTokenId = tokenIds[0];
  const { data: mintDate } = useMintDate(firstTokenId);

  const tokenURL = getTokenAssetURL(firstTokenId);

  useEffect(() => {
    if (!active) {
      open();
    } else {
      close();
    }
  }, [active, open, close]);

  return (
    <ContentPageContainer>
      <CollectionContainer>
        <h1>My ELF Collection</h1>
        <BodyContainer>
          <GraphContainer>
            <Card title="Minting Inventory">
              <MintingPeriodStatus totalMints={delegationHistory.length} />
            </Card>
            <Card title="Minting History">
              <MintHistoryChart mintHistory={mintHistory} />
            </Card>
          </GraphContainer>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              overflow: "scroll",
            }}
          >
            <Card title="Claimed ELF">
              {false ? (
                <ElfContainer>
                  <Image
                    src={tokenURL}
                    height={300}
                    width={300}
                    alt="Minted elf"
                    quality={100}
                  />
                  <Spacer size="6px" />
                  <DefconZero size="16px">ELF 123</DefconZero>
                </ElfContainer>
              ) : (
                <_TokensContainer>
                  {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
                    (x) => (
                      <ElfContainer>
                        {tokenURL ? (
                          <Image
                            src={tokenURL}
                            height={200}
                            width={200}
                            alt="Minted elf"
                            quality={100}
                          />
                        ) : (
                          <ImagePlaceholder />
                        )}
                        <Spacer size="6px" />

                        <DefconZero size="16px">ELF 123</DefconZero>
                      </ElfContainer>
                    ),
                  )}
                </_TokensContainer>
              )}
            </Card>
          </div>
        </BodyContainer>
      </CollectionContainer>
    </ContentPageContainer>
  );
};

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.desktopL} {
    flex-direction: column;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 10px;
  border-radius: 20px;
  justify-content: center;
`;

const CollectionContainer = styled.div`
  h3 {
    font-size: 14px;
    font-family: Rubik;

    place-self: flex-start;
    margin-bottom: 10px;
  }

  // * {
  //   outline: 1px solid red;
  // }
`;

const _TokensContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 200px 200px;

  max-height: 600px;
  overflow: scroll;

  @media ${devices.tabletL} {
    //grid-template-columns: 200px;
  }

  @media ${devices.tabletM} {
    grid-template-columns: 200px 200px;
  }
`;

const ElfContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: min-content;
  align-items: center;
  padding: 12px;

  margin: 10px;

  background-color: ${COLORS.greenDarkest};
  border-radius: 14px;

  div,
  img {
    border-radius: 12px 12px 0px 0px;
  }
`;

const ImagePlaceholder = styled.div`
  height: 100px;
  width: 100px;
  background: ${COLORS.semiTransparent};
`;

const ContentPageContainer = styled.div<{
  padding?: string;
}>`
  padding: ${({ padding }) => padding ?? "100px 0px 235px 0px"};
  background-color: #09282d;
  border: 3px solid ${COLOR_WHITE_LIGHT};

  h1 {
    font-size: 3rem;
  }

  br {
    display: block;
    content: "";
    margin-bottom: 25px;
  }

  p {
    font-size: 20px;
    font-family: "Rubik";
    font-weight: 400;
  }

  mark {
    color: ${COLOR_GREEN_LIGHT};
    background: ${COLOR_TRANSPARENT};
  }

  @media ${devices.tabletL} {
    padding: 80px 65px 155px 65px;
  }

  @media ${devices.mobileL} {
    padding: 60px 1rem 125px 1rem;
  } ;
`;

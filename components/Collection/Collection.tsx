import { Spacer } from "common/Spacer";
import DefconZero from "components/Text/DefconZero";
import { useTokenIds } from "elf/hooks/useTokenIds";
import { useWalletDialog } from "elf/hooks/useWalletDialog";
import useWeb3 from "elf/useWeb3";
import { COLORS } from "helpers/colorPalette";
import { devices } from "helpers/devices";
import Image from "next/image";
import React, { useEffect } from "react";
import { DayCount } from "src/types";
import { getTokenAssetURL } from "src/urls";
import styled from "styled-components";
import Card from "./Card";
import { MintHistoryChart } from "./MintHistoryChart";
import { MintingPeriodStatus } from "./MintingPeriodStatus";

interface CollectionProps {
  mintHistory: Array<DayCount>;
  delegationHistory: Array<DayCount>;
}

export const Collection = ({
  mintHistory,
  delegationHistory,
}: CollectionProps) => {
  const { active, account } = useWeb3();
  const { open, close } = useWalletDialog();
  const tokenIds = useTokenIds(account);
  const firstTokenId = tokenIds[0];

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
      <Header>My ELF Collection</Header>
      <Body>
        <GraphContainer>
          <Card title="Minting Inventory">
            <MintingPeriodStatus totalMints={delegationHistory.length} />
          </Card>
          <Card title="Minting History">
            <MintHistoryChart mintHistory={mintHistory} />
          </Card>
        </GraphContainer>
        <ClaimElfContainer>
          <Card title="Claimed ELF">
            {!!tokenIds.length ? (
              tokenURL && tokenURL?.length > 2 ? (
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
                <Tokens>
                  {tokenIds.map((id) => (
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
                  ))}
                </Tokens>
              )
            ) : (
              <ImagePlaceholder />
            )}
          </Card>
        </ClaimElfContainer>
      </Body>
    </ContentPageContainer>
  );
};

const Header = styled.text`
  font-size 50px;
  font-family: Defcon Zero;
`;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.desktopL} {
    flex-direction: column;
  }
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 20px;
  justify-content: center;
  margin-top: 30px;
`;

const ClaimElfContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: "scroll";
`;

const Tokens = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 200px 200px;
  max-height: 600px;
  overflow: scroll;

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

  box-shadow: 0px 0px 0px rgba(20, 223, 186, 0.8);

  transition: 0.3s;

  div,
  img {
    border-radius: 12px 12px 0px 0px;
  }

  :hover {
    box-shadow: 0px 5px 20px rgba(20, 223, 186, 0.8);
  }
`;

const ImagePlaceholder = styled.div`
  height: 100px;
  width: 100px;
  background: ${COLORS.semiTransparent};
`;

const ContentPageContainer = styled.div`
  // * {
  //   outline: 1px solid red;
  // }

  padding: 100px 0px 0px 0px;
  background-color: #09282d;
  border: 3px solid ${COLORS.whiteLight};
  margin-top: 30px;

  h1 {
    font-size: 3rem;
  }

  h3 {
    font-size: 14px;
    font-family: Rubik;

    place-self: flex-start;
    margin-bottom: 10px;
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
    color: ${COLORS.greenLight};
    background: ${COLORS.transparent};
  }

  @media ${devices.tabletL} {
    padding: 80px 0px 80px 0px;
    margin-top: 50px;
  }

  @media ${devices.mobileL} {
    padding: 30px 0px 30px 0px;
  }
`;

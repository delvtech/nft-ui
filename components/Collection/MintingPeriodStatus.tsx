import { Spacer } from "common/Spacer";
import { devices } from "helpers/devices";
import { firstBatchMintMax } from "src/constants";
import styled from "styled-components";

interface MintingPeriodStatusProps {
  totalMints: number;
}

export const MintingPeriodStatus = ({
  totalMints,
}: MintingPeriodStatusProps) => (
  <MintingPeriodStatusContainer>
    <h1>{firstBatchMintMax - totalMints} Elves</h1>
    <Spacer size="25px" />
    <h2>Remaining elfs left to claim!</h2>
    <Spacer size="10px" />
  </MintingPeriodStatusContainer>
);

const MintingPeriodStatusContainer = styled.div`
  padding: 20px;
  margin: 10px 30px;

  display: flex;
  flex-direction: column;

  h1 {
    font-family: Defcon Zero;
    font-size: 2rem !important;
    color: #4ecdc4;
    margin: 0;
  }

  h2 {
    font-family: Defcon Zero;
    font-size: 1rem;
    color: #f7fff7;
    margin: 0;
  }

  @media ${devices.mobileL} {
    padding: 12px;
    margin: 0px;

    h1 {
      font-size: 1.5rem !important;
    }

    h2 {
      font-family: Defcon Zero;
      font-size: 0.75rem !important;
      color: #f7fff7;
    }
  }
`;

const TimerContainer = styled.div`
  font-family: "Defcon Zero";
  font-weight: 600;
  font-size: 3rem;
  text-shadow: 0px 0px 20px rgba(20, 223, 186, 0.8);
  letter-spacing: 6px;

  padding: 10px;
  margin-top: auto;

  @media ${devices.tabletL} {
    font-size: 3rem;
  }

  @media ${devices.mobileL} {
    font-size: 2.25rem;
  }
`;

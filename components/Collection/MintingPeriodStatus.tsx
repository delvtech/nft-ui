import { Spacer } from "common/Spacer";
import { Timer } from "components/Countdown/Timer";
import { devices } from "helpers/devices";
import { firstBatchMintMax, releaseDate } from "src/constants";
import styled from "styled-components";

interface MintingPeriodStatusProps {
  totalMints: number;
}

export const MintingPeriodStatus = ({
  totalMints,
}: MintingPeriodStatusProps) => (
  <MintingPeriodStatusContainer>
    <h1>{firstBatchMintMax - totalMints} Elves</h1>
    <Spacer size="16px" />
    <h2>Remaining in this minting period</h2>
    <Spacer size="10px" />
    <TimerContainer>
      <Timer fontSize="50px" targetDate={releaseDate} />
    </TimerContainer>
  </MintingPeriodStatusContainer>
);

const MintingPeriodStatusContainer = styled.div`
  border: 1px solid;
  border-radius: 12px;
  border-color: rgba(255, 255, 255, 1);

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
`;

const TimerContainer = styled.div`
  font-family: "Defcon Zero";
  font-weight: 600;
  font-size: 30px;
  text-shadow: 0px 0px 20px rgba(20, 223, 186, 0.8);
  letter-spacing: 6px;

  // outline: 1px solid #f7fff7;
  padding: 10px;
  margin-top: auto;

  @media ${devices.tabletL} {
    font-size: 2rem;
  }

  @media ${devices.mobileL} {
    font-size: 1rem;
  }
`;

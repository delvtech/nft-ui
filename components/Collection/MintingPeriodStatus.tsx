import { Spacer } from "common/Spacer";
import { devices } from "helpers/devices";
import styled from "styled-components";

// @cashd: mocking this data for now
export const MintingPeriodStatus = () => (
  <MintingPeriodStatusContainer>
    <h1>501 Elves</h1>
    <Spacer size="16px" />
    <h2>Remaining in this minting period</h2>
    <Spacer size="20px" />
    <CountdownDate>05: 35: 35</CountdownDate>
  </MintingPeriodStatusContainer>
);

const MintingPeriodStatusContainer = styled.div`
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

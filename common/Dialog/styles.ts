import { COLORS } from "helpers/colorPalette";
import styled from "styled-components";

export const PaddedButton = styled.button`
  background: ${COLORS.blackDark};
  border: 1px solid ${COLORS.greenLight};
  padding: 50px;
  max-height: 150px;
  width: 225px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${COLORS.greenDarkest};
  }
`;

export const DialogTitle = styled.div`
  color: ${COLORS.white};
  font-size: 18px;
  font-family: "Defcon Zero";
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Spacer = styled.div`
  margin: 10px;
`;

export const BodyText = styled.div`
  margin-top: 11px;
  padding: 15px;
  font-size: 14px;
  font-family: Rubik;
  color: ${COLORS.white};
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
`;

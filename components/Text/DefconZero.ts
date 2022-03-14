import { COLORS } from "helpers/colorPalette";
import styled from "styled-components";
import { FontProps } from "./types";

const DefconZero = styled.text<FontProps>`
  font-family: Defcon Zero;
  font-size: ${({ size }) => size ?? "20px"};
  color: ${({ color }) => color && COLORS[color]};
  letter-spacing: 2px;
`;

export default DefconZero;

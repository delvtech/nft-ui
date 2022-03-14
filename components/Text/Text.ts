import { COLORS } from "helpers/colorPalette";
import styled from "styled-components";
import { FontProps } from "./types";

const Text = styled.text<FontProps>`
  font-size: ${({ size }) => size ?? "20px"};
  color: ${({ color }) => color && COLORS[color]};

  margin: ${({ margin }) => margin};
  &:hover {
    color: ${({ onHoverColor }) => onHoverColor && COLORS[onHoverColor]};
  }
`;

export default Text;

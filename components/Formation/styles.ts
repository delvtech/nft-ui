import { COLOR_BLACK, COLOR_WHITE_LIGHT } from "helpers/colorPalette";
import { devices } from "helpers/devices";
import styled from "styled-components";

export const FormationContainer = styled.div`
  background-color: ${COLOR_BLACK};
  border: 3px solid ${COLOR_WHITE_LIGHT};
  padding: 90px 195px;

  h2 {
    font-size: 80px;
    margin-bottom: 70px;
  }

  @media (max-width: 1300px) {
    padding: 90px 145px;

    h2 {
      font-size: 55px;
    }
  }

  @media ${devices.desktopM} {
    padding: 60px;
  }

  @media ${devices.mobileL} {
    padding: 60px 20px;

    h2 {
      font-size: 35px;
    }
  } ;
`;

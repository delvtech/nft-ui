import styled, { createGlobalStyle } from "styled-components";
import { devices } from "helpers/devices";
import { StringProps } from "helpers/types";
import { COLOR_BLACK, COLOR_WHITE } from "helpers/colorPalette";

export const GlobalStyle = createGlobalStyle`
    body {
      margin:0;
      padding:0;
      border: 0;
      outline: 0;
      overflow-x: hidden;
      background-color: ${COLOR_BLACK};
      color: ${COLOR_WHITE};
      background-image: url("/assets/svg/grid.svg");
      background-size: auto;
    }

    :root {
      color-scheme: dark;
    }

    * {
      box-sizing: border-box;
      border: 0 solid;
    }

    html {
      scroll-behavior: smooth;
    }

    #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    a {
      text-decoration: none;
      text-align: initial;
      outline: none;
      font-family: "Defcon Zero";
    }

    button {
      padding: 0;
      line-height: inherit;
      cursor: pointer;
    }
    
    button, input, textarea {
      outline: none;
      border: 0;
    }

    h1 {
      font-size: 4.375rem;      
      line-height: 70.29px;
      letter-spacing: 0.025rem;      
      font-family: "Defcon Zero Halftone";
      font-weight: 400;
      
      @media ${devices.tabletM} {
        font-size: 3rem;  
      }

    }

    h2 {
      line-height: 60px;
      font-size: 3.75rem;    
      font-family: "Defcon Zero";

      @media ${devices.tabletM} {
        font-size: 2rem;    
      }
    }

    h3 {
      font-size: 2.5rem;    
      font-family: "Defcon Zero 3D";
      font-weight: 400;
      
      @media ${devices.tabletL} {
        font-size: 1.8rem;  
      }
    }
    
    h4 {
      font-size: 1.25rem;    
      font-family: "Defcon Zero";
      color: #8FD8E7;
    }

    h5 {
      font-size: 1.375rem;    
    }

    h6 {
      font-size: 1.125rem;
      margin: 0;
    }
    
    h1, h2, h3, h4, h5, p {
      margin: 0;
      color: ${COLOR_WHITE};
    }

    p {
      line-height: 23px;
      font-family: "Defcon Zero";
    }

    p, button, input {
      font-size: 1rem;
    }
`;

export const AnimateSlideBurger = styled.div`
  &.burgerslide-transition-enter {
    opacity: 0;
  }
  &.burgerslide-transition-enter-active {
    opacity: 1;
    transition: opacity 400ms ease;
  }
  &.burgerslide-transition-exit {
    opacity: 1;
  }
  &.burgerslide-transition-exit-active {
    opacity: 0;
    transition: opacity 400ms ease;
  }
`;

export const PageHideOuterScroll = createGlobalStyle<StringProps>`
  @media ${devices.mobileM} {
    body {
      overflow-y: ${(p) => (p.shouldHide ? "hidden" : "auto")};
    }
  }
`;

export const AbsoluteDecoration = styled.div<StringProps>`
  position: absolute;
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
`;

import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { LinkProps, StringProps } from "helpers/types";
import { COLOR_WHITE_LIGHT, COLOR_YELLOW } from "helpers/colorPalette";
import { devices } from "helpers/devices";

export const InternalLink = ({ href, children }: LinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <div>
        <StyledLink isActive={router.pathname === href}>
          <p>{children}</p>
        </StyledLink>
      </div>
    </Link>
  );
};

export const StyledLink = styled.div<StringProps>`
  p {
    display: block;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.5s;
    font-size: 1rem;
    max-width: max-content;
    color: ${({ isActive }) => (isActive ? COLOR_YELLOW : COLOR_WHITE_LIGHT)};

    &:before {
      content: "";
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: -3px;
      height: 3px;
      background-color: ${COLOR_YELLOW};
      transition: transform 500ms ease-in-out;
      transform-origin: left;
      transform: scaleX(0);
    }

    &:hover {
      color: ${COLOR_YELLOW};
    }

    &:hover:before,
    &:focus:before {
      transform: scaleX(1);
    }
  }

  @media ${devices.mobileL} {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
        flex
        list-none
    `}
`;

const NavItem = styled.li<{ menu: boolean }>`
  ${tw`
        text-sm
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `}

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
            text-white
            text-xl
            mb-3
            focus:text-white
        `}
    `}
`;

const NavItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const listOfItems = (
    <ListContainer>
      <NavItem menu={isMobile}>
        <a href="#">Home</a>
      </NavItem>
      <NavItem menu={isMobile}>
        <a href="#">Cars</a>
      </NavItem>
      <NavItem menu={isMobile}>
        <a href="#">Services</a>
      </NavItem>
      <NavItem menu={isMobile}>
        <a href="#">Contact us</a>
      </NavItem>
    </ListContainer>
  );

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        {listOfItems}
      </Menu>
    );

  return <ListContainer>{listOfItems}</ListContainer>;
};

export default NavItems;

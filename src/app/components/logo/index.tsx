import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CarLogoImg from "../../../assets/images/car-logo.png";
import CarLogoImgDark from "../../../assets/images/car-logo-dark.png";

interface ILogoProps {
  color?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
        flex
        items-center   
    `}
`;

const LogoText = styled.div`
  ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1 
    `}
  ${({ color }: any) => (color === "white" ? tw`text-black` : tw`text-white`)}
` as any;

const Image = styled.div`
  width: auto;
  img: {
    width: auto;
    height: 100%;
  }
  ${tw`
        h-6 
        md:h-9
    `}
`;

const Logo = ({ color }: ILogoProps) => {
  return (
    <LogoContainer>
      <Image>
        <img src={color === "white" ? CarLogoImg : CarLogoImgDark} alt="Hey" />
      </Image>
      <LogoText color={color || "dark"}>Your car</LogoText>
    </LogoContainer>
  );
};

export default Logo;

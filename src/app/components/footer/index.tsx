import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";

const FooterContainer = styled.div`
  /* min-height: 24em; */
  background-color: #1d2124;
  ${tw`
        flex
        flex-col
        min-w-full
        pt-9
        md:pt-12
        pb-1
        items-center
        justify-center
    `}
`;

const InnerContainer = styled.div`
  ${tw`
        flex
        max-w-screen-2xl
        w-full
        h-full
        flex-wrap
    `}
`;

const AboutUsContainer = styled.div`
  ${tw`
        flex
        flex-col
        items-center
        md:items-start
        mr-2
        md:mr-1
    `}
`;

const AboutText = styled.p`
  ${tw`
        w-full
        text-white
        text-sm
        font-normal
        md:max-w-xs
        leading-5
        mt-6
        text-center
        md:text-left
        px-12
        md:px-3
    `}
`;

const LinkList = styled.ul`
  ${tw`
        outline-none
        list-none
        flex
        flex-col
        items-center
    `}
`;

const ListItem = styled.li`
  ${tw`
        mb-3
    `}

  & > a {
    ${tw`
            text-sm
            text-white
            transition-all
            hover:text-gray-200
        `}
  }
`;

const SectionContainer = styled.div`
  ${tw`
        w-full
        md:w-auto
        flex
        flex-col
        items-center
        mr-2
        md:mr-12
        px-10
        md:px-3
        mt-7
        md:mt-6
    `}
`;

const HeaderTitle = styled.h3`
  ${tw`
        text-2xl
        font-bold
        text-white
        mb-3
    `}
`;

const HorizontalContainer = styled.div`
  ${tw`
            flex
            items-center
        `}
`;

const RedIcon = styled.span`
  ${tw`
        w-9
        h-9
        rounded-full
        bg-red-500
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
    `}
`;

const SmallText = styled.h6`
  ${tw`
        text-sm
        text-white
    `}
`;

const ButtonContainer = styled.div`
  ${tw`
        w-full
        flex
        justify-center
        md:justify-start
        max-w-screen-2xl
        mt-7
        md:mt-1
    `}
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
        text-gray-400
    `}
`;
const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutUsContainer>
          <Logo color="dark" />
          <AboutText>
            YourCar is a Car renting and selling company located in many
            countries across the world wich has high quality cars an top rated
            service.
          </AboutText>
        </AboutUsContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinkList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinkList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinkList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Suppot</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinkList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+52 5546462915</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>angelhachede9678@gmail.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <ButtonContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} YourCar, All rights
          reserved.
        </CopyrightText>
      </ButtonContainer>
    </FooterContainer>
  );
};

export default Footer;

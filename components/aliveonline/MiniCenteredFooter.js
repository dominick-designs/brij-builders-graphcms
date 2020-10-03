import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/aliveonline/Layouts.js"
// import logo from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";

import { ORGANIZATION_FACEBOOK, ORGANIZATION_YOUTUBE, ORGANIZATION_LOGO_IMAGE128, ORGANIZATION_URL, ORGANIZATION_NAME } from '../../lib/constants'

const Container = tw(ContainerBase)`bg-golfblue-800 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-28`;
const LogoText = tw.h5`ml-2 text-3xl font-black text-white tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;


const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default ({ }) => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={ORGANIZATION_LOGO_IMAGE128} />
            <LogoText>{ORGANIZATION_NAME}</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href={`${ORGANIZATION_FACEBOOK}`}>
              <FacebookIcon />
            </SocialLink>
            <SocialLink href={`${ORGANIZATION_YOUTUBE}`}>
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2020, BV Presentations. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};

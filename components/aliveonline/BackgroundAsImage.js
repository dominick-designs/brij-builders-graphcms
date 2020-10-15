import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Link from 'next/link'
import { css } from "styled-components/macro"; //eslint-disable-line

export const Bridge = "/brij-builders-nature-1200/brij-builders-1200-06.jpg";




import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks, defaultLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed";


const StyledHeader = styled(Header)`
  ${tw` max-w-none bg-golfblue-800`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-secondary-500  hover:border-primary-500 hover:text-secondary-200 text-xl`}
  }
  ${NavToggle}.closed {
    ${tw`text-secondary-500 hover:text-secondary-200`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover `}
  background-image: url(${Bridge});
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0  opacity-25`; // bg-primary-100 removed this; it created overlay

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-secondary-500 leading-none  `}
  span {
    ${tw`inline-block mt-2 bg-golfblue-800 p-4`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-secondary-300 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-golfblue-800 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 text-secondary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-golfblue-100 focus:shadow-outline bg-golfblue-800`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

/* Navlinks.links comes from light.js. This makes light.js default for all links instead of default list just below here
 */

export default ({ landingPageUrl }) => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/about">
        About
      </NavLink>
      <NavLink href="/blog">
        Blog
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/contact">
        Contact
      </PrimaryLink>
    </NavLinks>
  ];


  return (
    <>
      <StyledHeader links={NavLinks.links} />
      <Container>
        <OpacityOverlay />
        <HeroContainer>
          <TwoColumn>
            <LeftColumn>
              {/* <Notification>Connecting to the heart of things</Notification> */}
              <Heading>
                <span>Brij Builders</span>
                <br />
                <SlantedBackground>Connecting to the heart of things</SlantedBackground>
              </Heading>
              <Link href="/contact">
                <PrimaryAction>Watch Our Videos</PrimaryAction>
              </Link>

            </LeftColumn>
            <RightColumn>
              <StyledResponsiveVideoEmbed
                url={landingPageUrl}
                background="transparent"
              />
            </RightColumn>
          </TwoColumn>
        </HeroContainer>
      </Container>
    </>
  );
};

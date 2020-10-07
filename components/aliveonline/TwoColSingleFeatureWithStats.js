import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/aliveonline/Headings.js";
import { Subheading } from "components/aliveonline/Headings.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col  justify-between max-w-screen-md mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)` flex-shrink-0 h-80 md:h-80`;
const TextColumn = styled(Column)(props => [
  tw`md:w-full mt-8 md:mt-0`,
  props.textOnLeft ? tw`md:mr-8 lg:mr-16 md:order-first` : tw`md:ml-auto md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-white `;


const Heading = tw(SectionHeading)`text-center text-3xl sm:text-4xl lg:text-5xl text-center md:text-center leading-tight`;
const Subheading1 = tw(Subheading)` text-secondary-900 text-center text-lg sm:text-xl lg:text-2xl text-center md:text-left leading-tight my-5 mx-5`;

const Description = tw.p`text-left p-8  md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4`

// with help from developer of twin.macro
// https://github.com/ben-rogerson/twin.macro/discussions/157#discussioncomment-89799

const BaseStyles = tw`text-left p-8  md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4`

const ChildrenStyles = css({
  h2: tw`text-secondary-900 text-center text-lg sm:text-xl lg:text-2xl text-center md:text-center leading-tight my-5 mx-5 mb-5`,
  'p img': tw`mt-10 mb-10`,

  img: tw` m-auto`,
  // and you can include advanced css selectors
  '> img + img': tw`mt-10 border-4 border-primary-700 text-center`,
  'img + &': tw`mt-10 border-4 border-primary-700 text-center`,
})

const RichText = styled.div(() => [BaseStyles, ChildrenStyles, Description])

const Statistics = tw.div`mt-6 lg:mt-8 xl:mt-16 flex flex-wrap`
const Statistic = tw.div`text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left`
const Value = tw.div`font-bold text-primary-500`
const Key = tw.div`font-medium text-gray-700`

export default ({ textOnLeft = false, title, subtitle, content }) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  // const statistics = [
  //   {
  //     key: "Countries",
  //     value: "192",
  //   },
  //   {
  //     key: "Hotels",
  //     value: "479",
  //   },
  //   {
  //     key: "Rooms",
  //     value: "2093",
  //   },
  //   {
  //     key: "Workers",
  //     value: "10347",
  //   }
  // ]



  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc="/brij-builders-nature/brij-builders-images-6.jpg" />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>

          <TextContent>
            <Heading>{title}</Heading>
            <Subheading1>{subtitle}</Subheading1>
            <RichText>
              <Description >{content}</Description>
            </RichText>
            {/* <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                <Value>{statistic.value}</Value>
                <Key>{statistic.key}</Key>
                </Statistic>
                ))}
              </Statistics> */}
          </TextContent>


        </TextColumn>
      </TwoColumn>
    </Container >
  );
};




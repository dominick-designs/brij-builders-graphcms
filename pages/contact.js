import Container from '../components/container'
import MoreStories from '../components/more-stories'
import TwoColSingleFeatureWithStats from '../components/features/TwoColSingleFeatureWithStats'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/graphcms'
import { getAllPages } from '../lib/graphcms'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'


import React from "react"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/FullWidthWithImage"
import tw from "twin.macro";
import styled from "styled-components";
import EmbedIframe from '../helpers/EmbedIframe'
import { css } from "styled-components/macro"; //eslint-disable-line
import { ORGANIZATION_NAME } from '../lib/constants'


const StyledEmbedIframe = styled(EmbedIframe)`
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;


export default function Contact({ url }) {
    return (
        <>
            <Layout >
                <Head>
                    <title>{ORGANIZATION_NAME}</title>
                </Head>
                <Container>
                    <section className="flex-col flex items-center md:justify-between mt-0 ">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight mt-10 md:pr-8">
                            Use this form to contact {ORGANIZATION_NAME}
                        </h1>
                        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                            We will respond ASAP.
                            </h4>
                    </section>
                    <StyledEmbedIframe />
                </Container>
            </Layout>
        </>
    )
}

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

// this is google contact form form iframe
// <p style="text-align: center;"><iframe width="640" height="1171" src="https://docs.google.com/forms/d/e/1FAIpQLScIUS0rJD1UkPshb-72MoFV9UN_m7CnrCAcYwgumFEiXCM_Sg/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></p>

export default function About({ pages }) {

    pages = pages[0]

    /* graphcms was returning content.text with space escape characters.
        This resolves the issue by calling html from graphcms content
    */
    const getHTML = function createMarkup() {
        const returnHTML = <div dangerouslySetInnerHTML={{ __html: pages.content.html }} />
        return returnHTML
    }

    console.log(getHTML)

    return (
        <>
            <Layout >
                <Head>
                    <title>Next.js Blog Example with {CMS_NAME}</title>
                </Head>

                {/* <AnimationRevealPage>
          <Hero />
        </AnimationRevealPage> */}

                <Container>
                    <TwoColSingleFeatureWithStats
                        title={pages.title}
                        subtitle={pages.subtitle}
                        content={getHTML()}
                    />
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps({ }) {
    const pages = (await getAllPages()) || []
    return {
        props: { pages },
    }
}
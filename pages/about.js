import Container from '../components/aliveonline/container'
import MoreStories from '../components/aliveonline/more-stories'
import TwoColSingleFeatureWithStats from '../components/aliveonline/TwoColSingleFeatureWithStats'
import Intro from '../components/aliveonline/intro'
import Layout from '../components/aliveonline/layout'
import { getAllPostsForHome } from '../lib/graphcms'
import { getAllPages } from '../lib/graphcms'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'



import React from "react"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/aliveonline/FullWidthWithImage"



export default function About({ pages }) {

    pages = pages[0]

    /* graphcms was returning content.text with space escape characters.
        This resolves the issue by calling html from graphcms content
    */
    const getHTML = function createMarkup() {
        const returnHTML = <div dangerouslySetInnerHTML={{ __html: pages.content.html }} />
        return returnHTML
    }

    return (
        <>
            <Layout >
                <Head>
                    <title>About Brij Builders {CMS_NAME}</title>
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
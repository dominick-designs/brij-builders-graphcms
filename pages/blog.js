import Container from '../components/aliveonline/container'
import MoreStories from '../components/aliveonline/more-stories'
import HeroPost from '../components/aliveonline/hero-post'
import Intro from '../components/aliveonline/intro'
import Layout from '../components/aliveonline/layout'
import { getAllPostsForHome } from '../lib/graphcms'
import { getAllPages } from '../lib/graphcms'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

import SectionSeparator from '../components/aliveonline/section-separator'

import React from "react"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/aliveonline/FullWidthWithImage"



export default function Blog({ posts, preview }) {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>

        {/* <AnimationRevealPage>
          <Hero />
        </AnimationRevealPage> */}

        <Container>

          <Intro />
          <SectionSeparator />

          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              tags={heroPost.tags}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}


        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) || []
  return {
    props: { posts, preview },
  }
}






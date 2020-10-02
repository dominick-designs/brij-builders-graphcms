import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from 'components/aliveonline/container'
import PostBody from 'components/aliveonline/post-body'
import MoreStories from 'components/aliveonline/more-stories'
import Header from 'components/aliveonline/header'
import PostHeader from 'components/aliveonline/post-header'
import SectionSeparator from 'components/aliveonline/section-separator'
import Layout from 'components/aliveonline/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/graphcms'
import PostTitle from 'components/aliveonline/post-title'
import Head from 'next/head'
import { CMS_NAME } from 'lib/constants'

export default function Post({ post, morePosts, preview }) {


  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
            <>
              <article>
                <Head>
                  <title>
                    {post.title} | Brij Builders Content {CMS_NAME}
                  </title>
                  {/* <meta property="og:image" content={post.ogImage.url} /> */}
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {

  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data.post,
      morePosts: data.morePosts || [],
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug()
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  }
}

import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import ContainerFull from '../../components/container-full'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import RecentArt from '../../components/recent'
import { getAllPostsWithSlug, getPostAndMorePosts, getMostRecent } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Tags from '../../components/tags'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


export default function Post({ post, posts, preview, finearts }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <ContainerFull>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.seo.title}</title>
			    <meta name="description" content={post.seo.metaDesc} />
                <meta property="og:title" content={ post.seo.title } />
				<meta property="og:description" content={post.seo.metaDesc} />
				<meta property="og:url" content="https://www.justinblayney.com/" />
				<meta property="og:image" content={post.featuredImage?.node?.sourceUrl} />
				<meta property="og:image:secure_url" content={post.featuredImage?.node?.sourceUrl} />
				
			
              </Head>
					<Container>
					<Row>
			
			
			{post.blog_extras.pageFull === "Yes"  ?
						<Col  xs={12}>
						<PostHeader
								title={post.title}
								coverImage={post.featuredImage?.node}
								date={post.date}
								
							  />
							  <PostBody content={post.content} />
							<br clear="all" />
						</Col>
			: 
					<Col  xs={12}  md={8} >
					<PostHeader
								title={post.title}
								coverImage={post.featuredImage?.node}
								date={post.date}
								
							  />
							  <PostBody content={post.content} />
							<br clear="all" />
						</Col>
			
			}
			
							  
			
					{post.blog_extras.pageFull === "No"  ?

							<Col xs={12}  md={4}>

								<RecentArt finearts={finearts}  />
								<br clear="all" />

							</Col>

				 : null }
			
					</Row>
				  </Container>
			
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <Container>
				<Row>
				{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Row>
			</Container>
          </>
        )}
      </ContainerFull>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)

  const recentart = await getMostRecent()
  //console.log(recentart)
  
  
  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
	  finearts: recentart,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/contemporary-art-blog/${node.slug}`) || [],
    fallback: true,
  }
}

import Head from 'next/head'
import ContainerContent from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForShows } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Justin Blayney Fine Art | Toronto Art Shows | Optical Art</title>
  		  <meta name="description" content="Justin Blayney can be found at many Toronto Art Shows including the Art Project, TOAF and many others." /> 
		
		
		<meta property="og:title" content="Justin Blayney Fine Art | Toronto Art Shows | Optical Art" />
				<meta property="og:description" content="Justin Blayney can be found at many Toronto Art Shows including the Art Project, TOAF and many others." />
				<meta property="og:url" content="https://www.justinblayney.com/" />
				<meta property="og:image" content="https://res.cloudinary.com/djk8wzpz4/image/upload/v1611272397/amelie-lg-e1611272369690_vu9uav.jpg" />
				<meta property="og:image:secure_url" content="https://res.cloudinary.com/djk8wzpz4/image/upload/v1611272397/amelie-lg-e1611272369690_vu9uav.jpg" />
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="og:image:width" content="452" />
				<meta property="og:image:height" content="550" />
				<meta property="og:image:alt" content="Justin Blayney Fine Art Pixelated Amelie Portrait" />
		
		
        </Head>
  		<Header />
        <ContainerContent>
          
           <Container>
				<Row>
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
  			   </Row>
		 </Container>
  
        </ContainerContent>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForShows(preview)
  return {
    props: { allPosts, preview },
  }
}
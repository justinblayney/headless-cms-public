import Head from 'next/head'
import Link from 'next/link'
import ContainerContent from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getNFTPage } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default function Page( {page} ) {

  return (
    <>
      <Layout>
        <Head>
          <title>{ page.seo.title }</title>
	      <meta name="description" content={page.seo.metaDesc} />
	  
	  <meta property="og:title" content={ page.seo.title } />
				<meta property="og:description" content={page.seo.metaDesc} />
				<meta property="og:url" content="https://www.justinblayney.com/" />
				<meta property="og:image" content="https://res.cloudinary.com/djk8wzpz4/image/upload/v1649023456/Radiance-sm_gi4f0x.jpg" />
				<meta property="og:image:secure_url" content="https://res.cloudinary.com/djk8wzpz4/image/upload/v1649023456/Radiance-sm_gi4f0x.jpg" />
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="og:image:width" content="622" />
				<meta property="og:image:height" content="718" />
				<meta property="og:image:alt" content="Justin Blayney Fine Art NFT: Radiance" />
	  
	  
	  
        </Head>
	   <Header />
        <ContainerContent>
	  		 <Container>
				  <Row>
					  <Col xs={12}>
	  
					  <h1>{ page.title }</h1>
					  <div dangerouslySetInnerHTML={{ __html: page.content }} />

	  				  
					  </Col>
				 </Row>
          </Container>
        </ContainerContent>
      </Layout>
    </>
  )
}


export async function getStaticProps({ params }) {
	
	
  const data = await getNFTPage()
 // console.log(data)
  
  
  return {
    props: {
      page: data,
  
    },
  }
}








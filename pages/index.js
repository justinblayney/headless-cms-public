import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import ContainerFull from '../components/container-full'
import HomeStories from '../components/home-stories'
import MyCarousel from '../components/carousel'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import CommissionCallout from '../components/commissions'
import { getHomePage, getHomeSlides, getAllPostsForLanding } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default function Page( {page, finearts, allTeases: { edges }} ) {

const allTeases = edges	
	
  return (
    <>
	  
      <Layout>
	 
			<Head>
			  <title>{ page.seo.title }</title>
			  	<meta name="description" content={page.seo.metaDesc} />
	  			<meta property="og:title" content={ page.seo.title } />
				<meta property="og:description" content={page.seo.metaDesc} />
				<meta property="og:url" content="https://www.justinblayney.com/" />
				<meta property="og:image" content="https://res.cloudinary.com/djk8wzpz4/image/upload/v1653233169/seer_ddwjkw.jpg" />
				<meta property="og:image:secure_url" content="https://res.cloudinary.com/djk8wzpz4/image/upload/v1653233169/seer_ddwjkw.jpg" />
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="og:image:width" content="550" />
				<meta property="og:image:height" content="550" />
				<meta property="og:image:alt" content="Justin Blayney Fine Art Pixelated: Art For Sale" />
	  
			</Head>
		   <Header />
        <ContainerFull>
		 
	  	<Container fluid>
	  	 <Row>
	      <Col className="wrap-carousel">
			    
				<MyCarousel 
	  					finearts={finearts} 
	  					imageQuery={(arts) => arts.fineartfields.finehome === 'Yes'} 
	  			/>

		  </Col>
		 </Row>
		</Container>
		
		<Container className="pad-row-bottom">
				<Row>
					<Col xs={12}>
						<h1>{ page.title }</h1>
							<div dangerouslySetInnerHTML={{ __html: page.content }} />
					</Col>
				</Row>
			</Container>
		

			<Container fluid className="home-blog pad-row-bottom">
				<Container>
					<Row>
						<Col xs={12}>	<h2>Art Shows / News / Blog</h2></Col>

						{allTeases.length > 0 && <HomeStories posts={allTeases} />}

					</Row>
				</Container>
			</Container>			
	    <CommissionCallout />		
	  


          
       </ContainerFull>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
		
  const allTeases = await getAllPostsForLanding(preview)		 
  //console.log(allTeases)	
	
  const data = await getHomePage()
 
  const fineart = await getHomeSlides()
 //console.log(fineart)	
  
  return {
    props: {
      page: data,
  	  finearts: fineart,
	  allTeases, 
    },
  }
}
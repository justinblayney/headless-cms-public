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
import Portfolio from '../components/portfolio'
import Legend from '../components/legend'



import { getFigPage, getHomeSlides, getAllPostsForLanding } from '../lib/api'
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
				<meta property="og:image" content="https://res.cloudinary.com/djk8wzpz4/image/upload/v1611035251/erin_in_blue_e1vu65.png" />
				<meta property="og:image:secure_url" content="https://res.cloudinary.com/djk8wzpz4/image/upload/v1611035251/erin_in_blue_e1vu65.png" />
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="og:image:width" content="550" />
				<meta property="og:image:height" content="732" />
				<meta property="og:image:alt" content="Justin Blayney Fine Art Pixelated Nude" />
	  
	  
			</Head>
		   <Header />
        <ContainerFull>
		 
	  
	  	<Container fluid>
	  	 <Row>
	      <Col className="wrap-carousel">
			    
				<MyCarousel 
	  					finearts={finearts} 
	  					imageQuery={(arts) => arts.fineartfields.fineseries === 'Figurative'} 
	  			/>

		  </Col>
		 </Row>
		</Container>
		

	  
	  <Container className="pad-row-bottom">
 			<Row>
				<Col xs={12} key="1">
				<h1>{page.title}</h1><br />
	  					
		 		</Col>

			</Row>
				<Legend />
			<Row>	
				{finearts.nodes 
							&& finearts.nodes.map((arts) => (
							arts.fineartfields.fineseries === 'Figurative' ?
								<Col xs={12} md={4} key={arts.databaseId} className="col-portfolio">

							
								<Portfolio 
										available={arts.fineartfields.fineavailable} 
										src={arts.fineartfields.cloudlink} 
										alt={arts.featuredImage.node.altText} 
					 					width={arts.featuredImage.node.mediaDetails.width}
										height={arts.featuredImage.node.mediaDetails.height}
										title={arts.title}
										size={arts.fineartfields.finesize}
										medium={arts.fineartfields.finemedium}
										price={arts.fineartfields.fineprice}
										series={arts.fineartfields.fineseries}
									/>
							
								
								

								</Col>
							: null	
						  ), [])}



			</Row>
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
	
  const data = await getFigPage()
 
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




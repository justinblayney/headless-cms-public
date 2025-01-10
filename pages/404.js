import Head from 'next/head'
import Link from 'next/link'
import ContainerContent from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'next/image'



export default function Page(  ) {


  return (
    <>
      <Layout>
        <Head>
          <title>Justin Blayney Fine Art | Page cannot be found</title>
	      <meta name="description" content="Page cannot be found" />
	  
	  
	  <meta property="og:title" content="Justin Blayney Fine Art | Page cannot be found" />
				<meta property="og:description" content="Justin Blayney Fine Art | Page cannot be found" />
				<meta property="og:url" content="https://www.justinblayney.com/" />
				<meta property="og:image" content="https://res.cloudinary.com/djk8wzpz4/image/upload/v1611273029/self-portrait-justin-blayney-lg-e1611273002703_aycep6.jpg" />
				<meta property="og:image:secure_url" content="https://res.cloudinary.com/djk8wzpz4/image/upload/v1611273029/self-portrait-justin-blayney-lg-e1611273002703_aycep6.jpg" />
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="og:image:width" content="550" />
				<meta property="og:image:height" content="550" />
				<meta property="og:image:alt" content="Justin Blayney Fine Art Pixelated Self Portrait" />
        </Head>
	   <Header />
        <ContainerContent>
	  		 <Container>
				  <Row>
					  <Col xs={12}>
	  
					  <h1>Page cannot be found</h1>
					  <p>I am sorry, the content you were looking for cannot be found, here are my cats, admire them!  :)
	  
	  </p>

	  				  
					  </Col>
	
				
					<Col xs={12} md={3}><h3>Booger</h3><Image src="https://res.cloudinary.com/djk8wzpz4/image/upload/v1611342697/cats-booger_e7dq5t.jpg" 
								  alt="Booger the cat"
								  className="carousel-image img-fluid shadow-sm"
	  							  width="320"
      							  height="345"
							/></Col>
	
	
					<Col xs={12} md={3}><h3>Ravi Doo</h3><Image src="https://res.cloudinary.com/djk8wzpz4/image/upload/v1611342697/cats-ravi_wdzpqa.jpg" 
								  alt="Ravi Doo the cat"
								  className="carousel-image img-fluid shadow-sm"
	  							  width="320"
      							  height="345"
							/></Col>
	
	
						<Col xs={12} md={3}><h3>Nugget</h3><Image src="https://res.cloudinary.com/djk8wzpz4/image/upload/v1611342697/cats-nuggets_jvrzmk.jpg" 
								  alt="Nugget the cat"
								  className="carousel-image img-fluid shadow-sm"
	  							  width="320"
      							  height="345"
							/></Col>
	
							<Col xs={12} md={3}><h3>Oreo (RIP)</h3><Image src="https://res.cloudinary.com/djk8wzpz4/image/upload/v1611342697/cats-oreo_tdgoaq.jpg" 
								  alt="Oreo the cat"
								  className="carousel-image img-fluid shadow-sm"
	  							  width="320"
      							  height="345"
							/></Col>
	
	
				 </Row>
          </Container>
        </ContainerContent>
      </Layout>
    </>
  )
}












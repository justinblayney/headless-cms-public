import Head from 'next/head'
import Link from 'next/link'
import ContainerContent from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Date from '../components/date'
import { getPressPage, getPressReleases } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import React, { useState } from "react"



function PressRelease( {press} ) {
    const [showMe, setShowMe] = useState(false);
    function toggle(){
      setShowMe(showMe => !showMe);
    }
    return (
		<>
        <h2 onClick={toggle}    id={press.databaseID} className="h2toggle">
						 {press.title} &nbsp; &nbsp; <span className="fas fa-hand-point-down"></span><br />
					<span className="press-smaller">"{press.pressreleases.calloutLinkText}" </span>
					
		</h2>
                                    <div 
											className="press-toggle-div"
                                            id={press.databaseID}
                                            style={{
                                            display: showMe?"block":"none"
                                          }}>
  
											<Row>
												<Col xs={3}>Source:</Col>
												<Col xs={9}>{press.title}</Col>
											</Row>
		
											<Row>
												<Col xs={3}>Date:</Col>
												<Col xs={9}><Date dateString={press.date} /></Col>
											</Row>
		
											{press.pressreleases.calloutLink  &&
											<Row>
												<Col xs={3}>Link:</Col>
												<Col xs={9}><a href={press.pressreleases.calloutLink}
                                                className="press-link"  
                                                target="_blank"
                                                >Read the Article</a></Col>
											</Row>
                                          }
                                            
		
											
												
										
		
  
                                        </div>
		</>
	)
}


export default function Page( {page, releases} ) {

  return (
    <>
      <Layout>
        <Head>
          <title>{ page.seo.title }</title>
	      <meta name="description" content={page.seo.metaDesc} />
	  
	  
	  <meta property="og:title" content={ page.seo.title } />
				<meta property="og:description" content={page.seo.metaDesc} />
				<meta property="og:url" content="https://www.justinblayney.com/" />
				<meta property="og:image" content="https://res.cloudinary.com/djk8wzpz4/image/upload/v1611335399/john-lennon-justin-blayney-op-artist_hsqquv.jpg" />
				<meta property="og:image:secure_url" content="https://res.cloudinary.com/djk8wzpz4/image/upload/v1611335399/john-lennon-justin-blayney-op-artist_hsqquv.jpg" />
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="og:image:width" content="492" />
				<meta property="og:image:height" content="550" />
				<meta property="og:image:alt" content="Justin Blayney Fine Art Pixelated John Lennon Portrait" />
	  
	  
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
	  			<Row>
	  					{releases.nodes 
							&& releases.nodes.map((press) => (

							<Col xs={12} md={6} key={press.databaseId} id={press.databaseId} className="press-toggle-outside">
	  
							 <PressRelease press={press} />
	  
							</Col>


						  ), [])}
  
			   </Row>
		  </Container>
        </ContainerContent>
      </Layout>
    </>
  )
}


export async function getStaticProps({ params }) {
	
  const releases = await getPressReleases()
 // console.log(releases)
  
	
  const data = await getPressPage()
  //console.log(data)
  
  
  return {
    props: {
      page: data,
	  releases: releases,
  
    },
  }
}









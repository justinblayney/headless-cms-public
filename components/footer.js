import ContainerContent from './container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


export default function Footer() {
  return (
<>
<Container fluid>
	<Row className="social-media-row">

	  <Col xs={12}   >
	  	
	  	<Container>
	  
	  		<Row>
	  				<Col xs={12}  className="social-media-col"><h3 className="social-header">Follow Me</h3></Col>
				
	  			
	  		</Row>
	  
	  
	  		<Row>
	  				<Col xs={3} className="text-center"><a className="footer-FB " href="https://www.facebook.com/justinblayneyart" target="_blank"></a>	</Col>
					<Col xs={3} className="text-center"><a className="footer-pin" href="https://www.pinterest.com/justinblayney/" target="_blank"></a>	</Col>
					<Col xs={3} className="text-center"><a className="footer-twitter " href="https://twitter.com/justinblayney/" target="_blank"></a>	</Col>
					<Col xs={3} className="text-center"><a className="footer-inst" href="https://www.instagram.com/justinblayney/" target="_blank"></a>	</Col>
	  			
	  		</Row>
	  	</Container>
	 </Col>
	  
	</Row>
</Container>  
   <div className="wrap-footer">
	  
	 
	 <footer>
		<ContainerContent>
	  	  <Row>
	  				
	  
	  
	  
	  
	  
	  			<Col xs={12} md={{ span: 3, offset:1 }} className="footer-col">
	  			<strong>Justin Blayney</strong><br />
	  			Call:  <a href="tel:416.450.5439" className="header-phone ">416.450.5439</a><br />
	  			© 2021 Justin Blayney <br />
	  			All Rights Reserved
	  
	  
	  			</Col>
	  
	  
	  
	  
	  			<Col xs={12} md={{ span: 3, offset:1 }}  className="footer-col">
	  					
	  					<a href="/art-shows/">Art Shows</a><br />
	  					<a href="/available-paintings/">Available Paintings</a><br />
						<a href="/figurative-artwork/">Figurative Paintings</a><br />
						<a href="/pattern-artwork/">Pattern Paintings</a><br />
						<a href="/corporate-art-installations/">Corporate Culture Art</a><br />
	  
	  
	  
	  			</Col>
	  
	  
	  			<Col xs={12}  md={{ span: 3, offset:1 }}  className="footer-col">
	  					<a href="/">Home</a><br />
	  					<a href="/about-the-toronto-artist/">Artist CV</a><br />
						<a href="/press-release/">Press Releases</a><br />
	  					<a href="/contemporary-art-blog/">News/Blog</a><br />
	  					<a href="/contact-artist/">Contact Justin</a><br />
	  
	  			</Col>
	  
	  
	  		
	  
	  			 </Row>
						
			 </ContainerContent>
		</footer>
       </div>
   </>
  )
}

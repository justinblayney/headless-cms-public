import Link from 'next/link'
import MyNav from './nav'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


export default function Header() {
  return (
   
	  <>
	  <header>
	  
	  	<Container>
	  		<Row>
	  			<Col xs={6}  md={4}>
					<a className="myButtonFB " href="https://www.facebook.com/justinblayneyart" target="_blank"></a>
					<a className="myButtonPinterest " href="https://www.pinterest.com/justinblayney/" target="_blank"></a>
					<a className="myButtonTwitter " href="https://twitter.com/justinblayney/" target="_blank"></a>
					<a className="myButtonInstagram " href="https://www.instagram.com/justinblayney/" target="_blank"></a>
	  			</Col>
	  
	  			<Col xs={6} md={8} className="text-right header-phone text-nowrap">
	  			   <span className="phone-msg text-nowrap">To Purchase Artwork Call:</span> <a href="tel:416.450.5439" className="text-nowrap">416.450.5439</a>
	  			</Col>
	  
			</Row>
	  	</Container>
	  
	  
	  </header>
	  <MyNav />
	  </>
  )
}

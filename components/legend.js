import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'next/image'
					
					
export default function Legend( ) {

  return (
    <Row className="legend-css">
	    <Col xs={6}  md={3} ><Image src="https://res.cloudinary.com/djk8wzpz4/image/upload/v1612197255/tags-solid_tseqzm.svg" height="37" width="37" alt="for sale tag" /> : For Sale</Col>
		<Col xs={6}  md={3} ><Image src="https://res.cloudinary.com/djk8wzpz4/image/upload/v1612196485/ruler-combined-solid_ixdq3d.svg" height="30" width="30" alt="Rulers for art size" /> : Size (inches)</Col>
		<Col xs={6}  md={3} ><Image src="https://res.cloudinary.com/djk8wzpz4/image/upload/v1612196486/palette-solid_jdu9fs.svg" height="30" width="30" alt="Pallete, art medium" /> : Medium</Col>
		<Col xs={6}  md={3} ><Image src="https://res.cloudinary.com/djk8wzpz4/image/upload/v1612197255/money-bill-wave-solid_mumh3o.svg" height="37" width="37" alt="Cost of Artwork" /> : Price</Col>
								 
							 
	</Row>
     
  )
}


	
	
		
		
		
		
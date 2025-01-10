import Image from 'next/image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import BuyItNow from '../components/buynow'
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'


	  
						


export default function Portfolio({ src, alt, width, height, title, size, medium, price, available, series  }) {
	
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
	
  return (
  
	  <>
	  
	  
	  
	  <a variant="primary" onClick={handleShow}>
					<Image src={src}  
						alt={alt} 
						className=" img-fluid shadow-sm"
						width={width}
						height={height}
						
					 />
		</a>
		<Modal
			
			show={show}
			onHide={() => setShow(false)}
			
		  >
	  <Modal.Header closeButton>
         </Modal.Header>
		<Modal.Body>
				<Image src={src}  
						alt={alt} 
						className=" img-fluid shadow-sm"
						width={width}
						height={height}
						
					 />
			
			</Modal.Body>
		</Modal>
	 

	  <Row className="port-row">
	  <Col xs={12}><h2 className="portfolio-title">{title} {available === "Yes"  ? 
		  <Image src="https://res.cloudinary.com/djk8wzpz4/image/upload/v1612197255/tags-solid_tseqzm.svg" 
				  height="30" 
				  width="30"
				  alt="for sale tag"
	  			  className="pull-right"
	 			 />
		  : null }</h2></Col>
	  
	  <Col xs={2}><Image src="https://res.cloudinary.com/djk8wzpz4/image/upload/v1612196485/ruler-combined-solid_ixdq3d.svg"  height="20" width="20" alt="Rulers for art size" /> </Col>
	  <Col xs={10}>{size}</Col>
	  
	  <Col xs={2}><Image src="https://res.cloudinary.com/djk8wzpz4/image/upload/v1612196486/palette-solid_jdu9fs.svg" height="20" width="20" alt="Pallete, art medium" /></Col>
	  <Col xs={10}>{medium}</Col>
	  
	  <Col xs={2}><Image src="https://res.cloudinary.com/djk8wzpz4/image/upload/v1612197255/money-bill-wave-solid_mumh3o.svg" height="25" width="25" alt="Cost of Artwork" /></Col>
	  <Col xs={10}> <div dangerouslySetInnerHTML={{ __html: price }} /> </Col>
	  
	  {series === "Silk Screen Prints"  ? <BuyItNow
	   										price={price}
											name={title}
	   									/> : null }
								
	  
	  
	  </Row>
	   </>
	  
  )
}

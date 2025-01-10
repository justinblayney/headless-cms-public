import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { install } from "resize-observer";
import { ReactCompareSlider, styleFitContainer } from 'react-compare-slider';
import Image from 'next/image'

export default function CommissionCallout() {
	
if (typeof window !== "undefined") {
    install();
}

	
  return (
	<Container className="pad-row-bottom pad-row-top">
 			<Row>
				<Col  xs={12} md={9}>
					<h2>Commissioned Artwork</h2>
	  					<p>
	  						I can create a stunning pixel painting from your favorite photograph. It could be of yourself, a loved one, a family pet, an inspiring celebrity, a landcape from your past, or just about anything that moves you.<br /><br />
	  						Your Optical Art painting will change depending on your vantage point: up close, it will appear abstract, but as you step away, the image will come into focus.
	  						<br /><br />
	  						<strong>Let's begin the process of creating a beautiful piece of original art to brighten and add interest to your living space. Call me today at  <a href="tel:416.450.5439">416.450.5439</a> to get a quote.</strong>
	  
	  					</p>
		 		</Col>
	  
				<Col  xs={12} md={3}>	  			
	
	
			<ReactCompareSlider
	itemOne={<Image 
		  alt="MCA  Adam Yauch Pixel Painting by Justin Blayney"    
	      src="https://res.cloudinary.com/djk8wzpz4/image/upload/v1611180870/MCA-pixel-portrait_jqm50p.jpg" 
		  width="405" 
		  height="531" 
		  
		  style={styleFitContainer()}
	/>}
	itemTwo={<Image 
			 
			 alt="MCA Adam Yauch" 
			 src="https://res.cloudinary.com/djk8wzpz4/image/upload/v1611180870/MCA-original_wj8pjf.jpg" 
			 width="405" 
		     height="531"  
			
			 style={styleFitContainer()} />}
/>

	  	
	  

	  					
				</Col>	  			
				

			</Row>
		</Container>

	  
	   )
}

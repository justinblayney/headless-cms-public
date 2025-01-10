import Col from 'react-bootstrap/Col'
import { PayPalButton } from "react-paypal-button-v2";
import React, { useState } from 'react'



export default function BuyItNow( { price, name   }) {
	
const [paypalLoaded, setPaypalLoaded] = useState(false);
	
  return (
	
	  <>
	  
	 
	  <Col xs={2}></Col>
	  <Col xs={10}> 

	 
	  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="CBTY8SLEUUJFU" />
<input type="hidden" name="os0"  value={name} />
<input type="image" src="https://res.cloudinary.com/djk8wzpz4/image/upload/v1611682434/paypal-btn_arcv6n.jpg" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" className="paypal-btn" />
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>

	  
	


	  
	  </Col>
	 
	  
	  
	  </>
	  
	   )
}

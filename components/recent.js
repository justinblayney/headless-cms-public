import { getMostRecent } from '../lib/api'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'next/image'

export default function RecentArt( {finearts}) {
	

	
  return (
	<Container className="pad-row-bottom pad-row-top">
 			<Row>
				<Col  xs={12} >
	  			<br />
					<h2>Latest Artwork</h2>
					{finearts.nodes 
							&& finearts.nodes.map((arts) => (

						<Image src={arts.fineartfields.cloudlink} 
									 alt={arts.featuredImage.node.altText} 
									 className="img-responsive img-fluid shadow-sm"
									  width={arts.featuredImage.node.mediaDetails.width}
									  height={arts.featuredImage.node.mediaDetails.height}
	  								  key={arts.databaseId} 
								/>

					), [])}
					<h3>Get it before it is gone, call <a href="tel:416.450.5439">416.450.5439</a></h3>	
				</Col>	  			
				

			</Row>
		</Container>

	  
	   )
}



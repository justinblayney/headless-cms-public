import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from "react"
import Image from 'next/image'


export default function MyCarousel({ finearts, imageQuery }) {
	
	const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

//console.log(imageQuery)
	
  return (
   <Carousel 
	  	activeIndex={index} 
		onSelect={handleSelect} 
	>

		{finearts.nodes 
	  	&& finearts.nodes.map((arts) => (
	  	imageQuery(arts) ?
	  					
	  		<Carousel.Item className="" key={arts.databaseId}>
							
				<Image src={arts.fineartfields.cloudlink} 
					alt={arts.featuredImage.node.altText} 
					className="carousel-image img-fluid shadow-sm"
	  				width={arts.featuredImage.node.mediaDetails.width}
      				height={arts.featuredImage.node.mediaDetails.height}
				/>
	  		</Carousel.Item>
	  
			: null	
			), [])}

	</Carousel> 
  )
}

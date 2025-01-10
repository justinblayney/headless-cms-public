import PostPreview from '../components/post-preview'
import Col from 'react-bootstrap/Col'


export default function HomeStories({ posts }) {
  return (
	
	     
			
			  <>
				{posts.map(({ node }) => (
					<Col xs={12} md={6} id={node.databaseId} key={node.databaseId}>				 
					  <PostPreview
	  								
									key={node.slug}
									title={node.title}
									coverImage={node.featuredImage?.node}
									date={node.date}

									slug={node.slug}
									excerpt={node.excerpt}
								  />
	  				</Col>
				))}
			  </>
			
		
  
  )
}

import PostPreview from '../components/post-preview'
import Col from 'react-bootstrap/Col'

export default function MoreStories({ posts }) {
  return (
   
	  
	  <>
      <Col xs={12} key="1" id="1">
	  
	  </Col>
     
        {posts.map(({ node }) => (
	  		<Col xs={12} md={6} id={node.databaseId} key={node.databaseId}>		  
	  					<PostPreview
	  								
									key={node.databaseId}
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

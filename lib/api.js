const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    //console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}



export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data.post
}




export async function getMostRecent() {
  const data = await fetchAPI(`
		 {
		  finearts(first: 1, where: { orderby: { field: DATE, order: DESC } }) {
			nodes {
			  title
			  databaseId
			  featuredImage {
				node {
				  altText
				  sourceUrl
					mediaDetails {
								height
								width
							  }
							}
					  }
			    fineartfields {
					fineavailable
					fineescription
					finehome
					finemedium
					fineseries
					finesize
					fineprice
					cloudlink
			  }
			}
		  }
		}

  `)
  return data?.finearts
}



export async function getHomeSlides() {
  const data = await fetchAPI(`
		 {
		  finearts(first: 10000, where: { orderby: { field: DATE, order: DESC } }) {
			nodes {
			  title
			  date
			  databaseId
			  featuredImage {
				node {
				  altText
				  sourceUrl
					mediaDetails {
								height
								width
							  }
				    }
			  }
			    fineartfields {
				fineavailable
				fineescription
				finehome
				finemedium
				fineseries
				finesize
				fineprice
				cloudlink
			  }
			}
		  }
		}

  `)
  return data?.finearts
}

      export async function getThankYouPage() {
  const data = await fetchAPI(`
    {
		page(id: "1815", idType: DATABASE_ID) {
		uri
		slug
		title
		content
		seo {
		  title
		  metaDesc
		  metaRobotsNofollow
		  metaRobotsNoindex
		}
	  }
    }
  `)
  return data?.page
}
  
     
     export async function getOpticalPage() {
  const data = await fetchAPI(`
    {
		page(id: "2562", idType: DATABASE_ID) {
		uri
		slug
		title
		content
		seo {
		  title
		  metaDesc
		  metaRobotsNofollow
		  metaRobotsNoindex
		}
	  }
    }
  `)
  return data?.page
}
 
  
  export async function getAvailablePage() {
  const data = await fetchAPI(`
    {
		page(id: "3739", idType: DATABASE_ID) {
		uri
		slug
		title
		content
		seo {
		  title
		  metaDesc
		  metaRobotsNofollow
		  metaRobotsNoindex
		}
	  }
    }
  `)
  return data?.page
}
  
  
  
    export async function getCorpPage() {
  const data = await fetchAPI(`
    {
		page(id: "3440", idType: DATABASE_ID) {
		uri
		slug
		title
		content
		seo {
		  title
		  metaDesc
		  metaRobotsNofollow
		  metaRobotsNoindex
		}
	  }
    }
  `)
  return data?.page
}
  
  
    export async function getSilkPage() {
  const data = await fetchAPI(`
    {
		page(id: "4271", idType: DATABASE_ID) {
		uri
		slug
		title
		content
		seo {
		  title
		  metaDesc
		  metaRobotsNofollow
		  metaRobotsNoindex
		}
	  }
    }
  `)
  return data?.page
}
  
  
  
   export async function getWildPage() {
  const data = await fetchAPI(`
    {
		page(id: "4269", idType: DATABASE_ID) {
		uri
		slug
		title
		content
		seo {
		  title
		  metaDesc
		  metaRobotsNofollow
		  metaRobotsNoindex
		}
	  }
    }
  `)
  return data?.page
}
  
  
  
   export async function getPortPage() {
  const data = await fetchAPI(`
    {
		page(id: "4261", idType: DATABASE_ID) {
		uri
		slug
		title
		content
		seo {
		  title
		  metaDesc
		  metaRobotsNofollow
		  metaRobotsNoindex
		}
	  }
    }
  `)
  return data?.page
}
  
  
  
    export async function getFigPage() {
  const data = await fetchAPI(`
    {
		page(id: "2558", idType: DATABASE_ID) {
		uri
		slug
		title
		content
		seo {
		  title
		  metaDesc
		  metaRobotsNofollow
		  metaRobotsNoindex
		}
	  }
    }
  `)
  return data?.page
}

  export async function getContactPage() {
  const data = await fetchAPI(`
    {
		page(id: "301", idType: DATABASE_ID) {
		uri
		slug
		title
		content
		seo {
		  title
		  metaDesc
		  metaRobotsNofollow
		  metaRobotsNoindex
		}
	  }
    }
  `)
  return data?.page
}
  
  
export async function getPressPage() {
  const data = await fetchAPI(`
    {
		page(id: "2646", idType: DATABASE_ID) {
		uri
		slug
		title
		content
		seo {
		  title
		  metaDesc
		  metaRobotsNofollow
		  metaRobotsNoindex
		}
	  }
    }
  `)
  return data?.page
}
  
  
 export async function getPressReleases() {
  const data = await fetchAPI(`
    {
		 pressreleases(first: 10000) {
			nodes {
			  pressreleases {
				calloutLink
				calloutLinkText
			  }
			  title
			  content
			  date
			  databaseId
		}
	  }
    }
  `)
  return data?.pressreleases
} 
  


export async function getCVPage() {
  const data = await fetchAPI(`
    {
		page(id: "4557", idType: DATABASE_ID) {
		uri
		slug
		title
		content
		seo {
		  title
		  metaDesc
		  metaRobotsNofollow
		  metaRobotsNoindex
		}
	  }
    }
  `)
  return data?.page
}

export async function getNFTPage() {
  const data = await fetchAPI(`
    {
		page(id: "4798", idType: DATABASE_ID) {
		uri
		slug
		title
		content
		seo {
		  title
		  metaDesc
		  metaRobotsNofollow
		  metaRobotsNoindex
		}
	  }
    }
  `)
  return data?.page
}

export async function getHomePage() {
  const data = await fetchAPI(`
    {
		page(id: "135", idType: DATABASE_ID) {
		uri
		slug
		title
		content
		seo {
		  title
		  metaDesc
		  metaRobotsNofollow
		  metaRobotsNoindex
		}
	  }
    }
  `)
  return data?.page
}


export async function getAllPagesWithSlug() {
  const data = await fetchAPI(`
    {
      pages(first: 10000) {
        edges {
          node {
            uri
            slug
            title
            content
          }
        }
      }
    }
  `)
  return data?.pages
}


export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.posts
}

  
  
 export async function getAllPostsForLanding(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 2, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
 			databaseId
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
} 
  
  
  
  
export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 100, where: { orderby: { field: DATE, order: DESC }, categoryNotIn: 10 }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}

  
  
  
  
  
  
  
  
  
  
   
export async function getAllPostsForShows(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 100, where: { orderby: { field: DATE, order: DESC }, categoryIn: 10 }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug))
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const isRevision = isSamePost && postPreview?.status === 'publish'
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
	  seo {
		  title
		  metaDesc
		}
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
		blog_extras {
			  pageFull
			}        
		content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
				seo {
						  title
						  metaDesc
						}
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ''
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'SLUG',
      },
    }
  )

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node

    if (revision) Object.assign(data.post, revision)
    delete data.post.revisions
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop()

  return data
}






export async function getNavMenu() {
try{ 
		const data = await fetchAPI(`
    	query GetNavItems {
			menu(id: "188", idType: DATABASE_ID ) {
			  databaseId
				  menuItems(first: 20) {
					nodes {
					  id
					  label
					  parentId
					  path
					}
			  }
		   }
		}
	`)
  console.log(data)
  return (data?.menu)	
	}
  catch( error ){
  		console.log(error)
	 }
	}






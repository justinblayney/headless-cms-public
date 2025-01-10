import React, { useState, useEffect } from "react"
import Link from 'next/link'
import { getNavMenu } from '../lib/api'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'next/image'

const MyNav = () => {

	
  
 	
	
  return (

<div className="wrap-nav sticky-top">
	
		 <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark" expand="lg">
		  <Navbar.Brand href="/"><Image src="/images/Justin-blayney-logo.png" alt="Justin Blayney Fine Art" width="214" height="34" /></Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav mr-auto">
				<Nav className="ml-auto">
					<Nav.Link href="/">Home</Nav.Link>

					  <NavDropdown title="Art Gallery" id="basic-nav-dropdown">
						
						<NavDropdown.Item href="/figurative-artwork/">Figurative Paintings</NavDropdown.Item>
	  					<NavDropdown.Item href="/portrait-artwork/">Portrait Paintings</NavDropdown.Item>
						<NavDropdown.Item href="/pattern-artwork/">Pattern Paintings</NavDropdown.Item>
	  					<NavDropdown.Item href="/wildlife-artwork/">Nature / Wildlife Paintings</NavDropdown.Item>
	  					<NavDropdown.Item href="/silk-screen-prints/">Silk Screen Prints</NavDropdown.Item>
						<NavDropdown.Item href="/corporate-art-installations/">Corporate Culture Art</NavDropdown.Item>
						<NavDropdown.Item href="/ntf-digital-artwok/">NFT's</NavDropdown.Item>
					  </NavDropdown>

			  <Nav.Link href="/art-shows/">Art Shows</Nav.Link>

					  <NavDropdown title="About Justin" id="basic-nav-dropdown">
						<NavDropdown.Item href="/about-the-toronto-artist/">Biography</NavDropdown.Item>
						<NavDropdown.Item href="/press-release/">Press Releases</NavDropdown.Item>
					  </NavDropdown>

			  <Nav.Link href="/contemporary-art-blog/">News/Blog</Nav.Link>
			  <Nav.Link href="/contact-artist/">Contact Justin</Nav.Link>



				</Nav>
			</Navbar.Collapse>
		</Navbar>
	 
</div>
  )
}






export default MyNav;
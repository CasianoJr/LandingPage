import React from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function AppNav() {
    return (
        <Navbar className="oswald small nav-gray"  fixed="top" expand="lg" variant="dark">
        <Link to="/">
        <Navbar.Brand><i className="fab fa-vuejs"></i> JOB MARKET</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <NavDropdown title="SOLUTION" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SIVER</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">GOLD</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PREMIUM</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">PRICING</Nav.Link>
            <Nav.Link href="#blogs">BLOGS</Nav.Link>
            <Nav.Link className="text-primary" href="#home">JOB ACADEMY</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link id="signin" className="signin" href="#sign-in"><i className="fas fa-user"></i> SIGN-IN</Nav.Link>
            <Nav.Link className="border rounded-pill small-width" href="#post-a-job"><i className="fas fa-plus-circle"></i> POST A JOB</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

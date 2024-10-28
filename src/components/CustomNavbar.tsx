import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto nav-links-container"> {/* Justified center */}
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <span className="divider" />

            <NavDropdown
              title="About Us"
              id="about-dropdown"
              className="nav-link-custom about-us-link"
              style={{color:'white'}}
            >
              <NavDropdown.Item as={Link} to="/overview">
                Company Overview
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/team">
                Team Intellect Resource
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/differentiator">
                Our Differentiator
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/work">
                Work @ Intellect Resource
              </NavDropdown.Item>
            </NavDropdown>
            <span className="divider" />

            <Nav.Link as={Link} to="/services" className="nav-link-custom">
              Services
            </Nav.Link>
            <span className="divider" />

            <Nav.Link as={Link} to="/vision" className="nav-link-custom">
              Vision
            </Nav.Link>
            <span className="divider" />

            <Nav.Link as={Link} to="/openings" className="nav-link-custom">
              Openings
            </Nav.Link>
            <span className="divider" />

            <Nav.Link as={Link} to="/contact" className="nav-link-custom">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;

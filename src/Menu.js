import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Menu.css";

export default function Menu() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="fixed-top"
      >
        <Container>
          <Navbar.Brand href="#" className="navbar-left">
            <i class="fa-sharp fa-solid fa-fire-flame-curved"></i> Respiro Yoga
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="nav-collapse">
            <Nav className="mx-auto Nav nav-links">
              <Nav.Link href="#">Clases</Nav.Link>
              <Nav.Link href="#">Estudio</Nav.Link>
              <Nav.Link href="#">Tu Instructora</Nav.Link>
              <Nav.Link href="#">Contacto</Nav.Link>
            </Nav>

            <NavDropdown
              title={
                <span>
                  <i class="fa-solid fa-globe"></i>
                </span>
              }
              id="basic-nav-dropdown"
              className="nav-dropdown navbar-right"
            >
              <NavDropdown.Item href="#action/3.1">Castellano</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

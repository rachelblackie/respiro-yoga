import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Menu.css";

export default function Menu() {
  return (
    <div>
      <Navbar bg="light" variant="light" className="fixed-top">
        <Container>
          <Navbar.Brand href="#" className="navbar-left">
            <i class="fa-sharp fa-solid fa-fire-flame-curved"></i> Respiro Yoga
          </Navbar.Brand>
          <Nav className="mx-auto Nav nav-links">
            <Nav.Link href="#">Clases</Nav.Link>
            <Nav.Link href="#">Estudio</Nav.Link>
            <Nav.Link href="#">Sobre Fina</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>

          <NavDropdown
            title="Idioma"
            id="basic-nav-dropdown"
            className="nav-dropdown navbar-right"
          >
            <NavDropdown.Item href="#action/3.1">Castellano</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
}
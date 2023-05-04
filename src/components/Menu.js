import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Menu.css";

function Menu(props) {
  const [expanded, setExpanded] = useState(false);
  let content = {
    Castellano: {
      clases: "Clases",
      estudio: "Estudio",
      instructora: "Tu Instructora",
      contacto: "Contacto",
    },
    English: {
      clases: "Classes",
      estudio: "Studio",
      instructora: "Your Instructor",
      contacto: "Contact",
    },
  };
  props.language === "English"
    ? (content = content.English)
    : (content = content.Castellano);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="fixed-top"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand href="#" className="navbar-left">
            <i class="fa-sharp fa-solid fa-fire-flame-curved"></i> Respiro Yoga
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="responsive-navbar-nav" className="nav-collapse">
            <Nav className="mx-auto Nav nav-links">
              <Nav.Link href="#clases" onClick={() => setExpanded(false)}>
                {content.clases}
              </Nav.Link>
              <Nav.Link href="#estudio" onClick={() => setExpanded(false)}>
                {content.estudio}
              </Nav.Link>
              <Nav.Link href="#fina" onClick={() => setExpanded(false)}>
                {content.instructora}
              </Nav.Link>
              <Nav.Link href="#contacto" onClick={() => setExpanded(false)}>
                {content.contacto}
              </Nav.Link>
            </Nav>

            <div className="language-select">
              <span className="m-2">
                <i class="fa-solid fa-globe"></i>
              </span>
              <select
                className="custom-select"
                value={props.language}
                onChange={(e) => {
                  props.handleSetLanguage(e.target.value);
                  setExpanded(false);
                }}
              >
                <option value="Castellano">Castellano</option>
                <option value="English">English</option>
              </select>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Menu;

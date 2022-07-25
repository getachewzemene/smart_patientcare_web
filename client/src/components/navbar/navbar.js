import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.scss";
const CustomNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      bg="secondary"
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Navbar.Brand href="/" className="logo">
        SPCA
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto mb-2 mb-lg-0">
          <Nav.Link href="/" className="anchor">
            Home
          </Nav.Link>
          <Nav.Link href="/login" className="anchor">
            Login
          </Nav.Link>
          <Nav.Link href="#service" className="anchor">
            Services
          </Nav.Link>
          <Nav.Link href="#about" className="anchor">
            About
          </Nav.Link>
          <Nav.Link href="#contact" className="anchor">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default CustomNavbar;

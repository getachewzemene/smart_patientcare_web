import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.scss";
import { useLocation } from "react-router-dom";
const CustomNavbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { user: currentUser } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <Navbar
      collapseOnSelect
      variant="dark"
      expand="lg"
      sticky="top"
      className="home-nav"
    >
      <Navbar.Brand href="/" className="logo">
        <span className="h4 text-green mx-4">
          Smart<span className="h4 text-yellow">Patient</span>
          <span className="h4 text-red">Care</span>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto mb-2 mb-lg-0">
          {location.pathname !== "/" && (
            <Nav.Link href="/" className="anchor">
              Home
            </Nav.Link>
          )}
          {!isLoggedIn ? (
            <Nav.Link href="/login" className="anchor">
              Login
            </Nav.Link>
          ) : currentUser.role === "admin" ? (
            <Nav.Link href="/admin/dashboard" className="anchor">
              Admin
            </Nav.Link>
          ) : (
            <Nav.Link href="/doctor" className="anchor">
              Doctor
            </Nav.Link>
          )}

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

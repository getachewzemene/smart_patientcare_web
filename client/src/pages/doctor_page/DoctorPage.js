import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Offcanvas,
  Button,
  Navbar,
  Form,
  Table,
  Row,
  Badge,
  Col,
  Card,
  Nav,
  Dropdown,
} from "react-bootstrap";
import {
  faBars,
  faHome,
  faDisease,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./DoctorPage.scss";
const DoctorPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="dark" className="mb-3">
        <i className="fa-2x text-white">
          <FontAwesomeIcon icon={faBars} onClick={handleShow} />
        </i>
        <Navbar.Brand href="#">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="px-5"
              aria-label="Search"
            />
            <Button variant="light" className="ms-2">
              Search
            </Button>
          </Form>
        </Navbar.Brand>
        <Navbar.Offcanvas
          placement="start"
          show={show}
          onHide={handleClose}
          scroll
        >
          <Offcanvas.Header closeButton className="bg-light">
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <hr></hr>
          <Offcanvas.Body className="bg-light">
            <Nav.Link href="/" className="h4">
              <i className="fa-1x mx-2">
                <FontAwesomeIcon icon={faHome} />
              </i>
              Home
            </Nav.Link>
            <Nav.Link href="#" className="h4">
              <i className="fa-1x mx-2">
                <FontAwesomeIcon icon={faUserCheck} />
              </i>
              Appointments
            </Nav.Link>
            <Nav.Link href="#" className="h4">
              <i className="fa-1x mx-2">
                <FontAwesomeIcon icon={faDisease} />
              </i>
              Check Disease
            </Nav.Link>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
      <Row className="mx-2 bg-light text-dark">
        <Col lg={3} md={3} sm={12}>
          <Card className="bg-light rounded-4 shadow w-lg-25 w-sm-100">
            <Card.Img
              variant="top"
              className="rounded"
              height={200}
              src="/logo512.png"
            />
            <Card.Body>
              <Card.Title>Profile</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">View Detail</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={9} md={9}>
          <div className="d-flex justify-content-between">
            <h4>
              Appointments <Badge bg="primary">New</Badge>
            </h4>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="my-2"
                aria-label="Search"
              />
              <Button variant="success my-2" className="ms-2">
                Search
              </Button>
            </Form>
          </div>
          <Table striped responsive hover bordered border={1}>
            <thead>
              <tr>
                <th>NO</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Emial</th>
                <th>Phone</th>
                <th colSpan={3}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Abebe</td>
                <td>Tesema</td>
                <td>abtesema@gmail.com</td>
                <td>0934433221</td>
                <Nav variant="pills" className="nav1">
                  <Nav.Item>
                    <Nav.Link href="#">
                      <Badge bg="primary">View</Badge>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" eventKey="key2">
                      <Badge bg="success">Update</Badge>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" eventKey="key3">
                      <Badge bg="danger">Delete</Badge>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Dropdown className="status-dropdown">
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Select
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="text-center">
                    <Dropdown.Item href="#">
                      <Badge bg="primary">View</Badge>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <Badge bg="success">update</Badge>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <Badge bg="danger">delete</Badge>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </tr>
              <tr>
                <td>2</td>
                <td>Abebe</td>
                <td>Tesema</td>
                <td>abtesema@gmail.com</td>
                <td>0934433221</td>
                <Nav variant="pills" className="nav1">
                  <Nav.Item>
                    <Nav.Link href="#">
                      <Badge bg="primary">View</Badge>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" eventKey="key2">
                      <Badge bg="success">Update</Badge>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" eventKey="key3">
                      <Badge bg="danger">Delete</Badge>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Dropdown className="status-dropdown">
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Select
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="text-center">
                    <Dropdown.Item href="#">
                      <Badge bg="primary">View</Badge>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <Badge bg="success">update</Badge>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <Badge bg="danger">delete</Badge>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </tr>
              <tr>
                <td>3</td>
                <td>Abebe</td>
                <td>Tesema</td>
                <td>abtesema@gmail.com</td>
                <td>0934433221</td>
                <Nav variant="pills" className="nav1">
                  <Nav.Item>
                    <Nav.Link href="#">
                      <Badge bg="primary">View</Badge>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" eventKey="key2">
                      <Badge bg="success">Update</Badge>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" eventKey="key3">
                      <Badge bg="danger">Delete</Badge>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Dropdown className="status-dropdown">
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Select
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="text-center">
                    <Dropdown.Item href="#">
                      <Badge bg="primary">View</Badge>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <Badge bg="success">update</Badge>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <Badge bg="danger">delete</Badge>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </tr>
              <tr>
                <td>4</td>
                <td>Abebe</td>
                <td>Tesema</td>
                <td>abtesema@gmail.com</td>
                <td>0934433221</td>
                <Nav variant="pills" className="nav1">
                  <Nav.Item>
                    <Nav.Link href="#">
                      <Badge bg="primary">View</Badge>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" eventKey="key2">
                      <Badge bg="success">Update</Badge>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" eventKey="key3">
                      <Badge bg="danger">Delete</Badge>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Dropdown className="status-dropdown">
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Select
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="text-center">
                    <Dropdown.Item href="#">
                      <Badge bg="primary">View</Badge>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <Badge bg="success">update</Badge>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <Badge bg="danger">delete</Badge>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="mt-3 mx-0">
        <Col>
          <div className="d-flex justify-content-between">
            <h4>
              Disease <Badge bg="danger">Top</Badge>
            </h4>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="my-2"
                aria-label="Search"
              />
              <Button variant="success my-2" className="ms-2">
                Search
              </Button>
            </Form>
          </div>
          <Table striped responsive hover bordered border={1}>
            <thead>
              <tr>
                <th>NO</th>
                <th>Name</th>
                <th>Symptoms</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>AIDS</td>
                <td>Fever,Saliva</td>
              </tr>
              <tr>
                <td>2</td>
                <td>AIDS</td>
                <td>Fever,Saliva</td>
              </tr>
              <tr>
                <td>3</td>
                <td>AIDS</td>
                <td>Fever,Saliva</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default DoctorPage;

import React, { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { DoctorCardImage } from "./DoctorProfile";
import { Link } from "react-router-dom";
import UpdateApointmentModal from "../../components/modals/UpdateApointmentModal";
import { AppointmentByDoctor } from "../../components/appointment/Appointment";
import {
  Offcanvas,
  Button,
  Navbar,
  Form,
  Table,
  Row,
  Badge,
  Col,
  Nav,
  Pagination,
} from "react-bootstrap";
import {
  faBars,
  faHome,
  faDisease,
  faUserCheck,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

import "./DoctorPage.scss";
import EventBus from "../../common/event_bus";
import { logout } from "../../slices/auth_slice";
import { Navigate } from "react-router-dom";
import AddPrescriptionModal from "../../components/modals/AddPrescriptionModal";
const DoctorPage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showApointmentModal, setShowApointmentModal] = useState(false);
  const [appointmentData, setAppointmentData] = useState({});
  const handleShowAppointmentModal = () => {
    setShowApointmentModal(true);
  };
  const handleCloseAppointmentModal = () => {
    setShowApointmentModal(false);
  };
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });
    return () => {
      EventBus.remove("logout");
    };
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShow(false);
    setShowModal(true);
  };
  if (!isLoggedIn) return <Navigate to="/login" />;
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#275091" }}
        className="mb-3 doctor-nav"
      >
        <i className="fa-2x text-white mx-5">
          <FontAwesomeIcon icon={faBars} onClick={handleShow} />
        </i>
        <Navbar.Brand href="/">
          <h1 className="h1 text-green ">
            Smart<span className="h2 text-yellow">Patient</span>
            <span className="h3 text-red">Care</span>
            <FontAwesomeIcon
              title="logout"
              icon={faSignOut}
              onClick={logOut}
              style={{
                color: "#fff",
                position: "absolute",
                right: "60",
                top: "20",
              }}
            />
          </h1>
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
            <Nav.Link href="/" className="h5">
              <i className="fa-1x mx-2">
                <FontAwesomeIcon icon={faHome} />
              </i>
              Home
            </Nav.Link>
            <Nav.Link href="#" className="h5">
              <i className="fa-1x mx-2">
                <FontAwesomeIcon icon={faUserCheck} />
              </i>
              Appointments
            </Nav.Link>
            <Link
              to="/doctor/predict-disease"
              className="h5 mx-3"
              style={{ textDecoration: "none" }}
            >
              <i className="fa-1x mx-2">
                <FontAwesomeIcon icon={faDisease} />
              </i>
              Check Disease
            </Link>
            <Nav.Link href="#" className="h5" onClick={handleShowModal}>
              <i className="fa-1x mx-2">
                <FontAwesomeIcon icon={faDisease} />
              </i>
              Add Prescription
            </Nav.Link>
            <Nav.Link href="/login" className="h5 mx-3 mt-5" onClick={logOut}>
              <i className="fa-1x mx-2">
                <FontAwesomeIcon icon={faSignOut} /> Logout
              </i>
            </Nav.Link>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
      <AddPrescriptionModal show={showModal} handleClose={handleCloseModal} />
      <Row className="mx-2 bg-light text-dark">
        <Col lg={3} md={3} sm={12}>
          <DoctorCardImage />
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
              <Button variant="success" className="mx-2 my-2">
                Search
              </Button>
            </Form>
          </div>
          <AppointmentByDoctor
            setAppointmentData={setAppointmentData}
            handleShowAppointmentModal={handleShowAppointmentModal}
          />
          <Pagination size="md">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Col>
      </Row>
      <Row className="mx-2 bg-light text-dark"></Row>
      <Row className="mt-3 mx-2">
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
              <Button variant="success" className="mx-2 my-2">
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

      <UpdateApointmentModal
        show={showApointmentModal}
        appointmentData={appointmentData}
        handleClose={handleCloseAppointmentModal}
      />
    </>
  );
};

export default DoctorPage;

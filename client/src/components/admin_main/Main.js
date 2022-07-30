import React, { useState } from "react";
import "./Main.scss";
import Chart from "../charts/Chart";
import { Table, Badge, Button, Toast, ToastContainer } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserDoctor,
  faDisease,
  faListNumeric,
  faAdd,
  // faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import AddDoctorModal from "../modals/AddDoctorModal";
const Main = () => {
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleClose = () => {
    setShowToast(true);
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <main>
      <div className="main-container">
        <div className="main-title">
          <img src="../logo512.png" alt="main" />
          <div className="main-greeting">
            <h1>Hello Admin</h1>
            <p>This is Admin Page all system info are displayed</p>
          </div>
        </div>
        <ToastContainer position="middle-end">
          <Toast
            bg="success"
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={5000}
            autohide
          >
            <Toast.Header>
              <strong className="me-auto">Message</strong>
              <small>NOW</small>
            </Toast.Header>
            <Toast.Body className="text-white">Doctor Added Success</Toast.Body>
          </Toast>
        </ToastContainer>
        <div className="main-cards">
          <div className="custom-card">
            <i className="fa-2x text-lightblue">
              <FontAwesomeIcon icon={faUser} />
            </i>
            <div className="card-inner">
              <p className="text-primary mx-2"> Number of Users</p>
              <span className="font-bold text-title">5000</span>
            </div>
          </div>
          <div className="custom-card">
            <i className="fa-2x text-red">
              <FontAwesomeIcon icon={faUserDoctor} />
            </i>
            <div className="card-inner">
              <p className="text-primary">Number of Doctors</p>
              <span className="font-bold text-title">1200</span>
            </div>
          </div>
          <div className="custom-card">
            <i className="fa-2x text-green">
              <FontAwesomeIcon icon={faUser} />
            </i>
            <div className="card-inner">
              <p className="text-primary mx-2"> Total Appointments</p>
              <span className="font-bold text-title">300</span>
            </div>
          </div>
          <div className="custom-card">
            <i className="fa-2x text-yellow">
              <FontAwesomeIcon icon={faDisease} />
            </i>
            <div className="card-inner">
              <p className="text-primary">General Disease</p>
              <span className="font-bold text-title">20000</span>
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="charts-left">
            <div className="charts-left-title">
              <div>
                <h1>Daily Reports</h1>
                <p>Bahir Dar,Amhara,Ethiopia</p>
              </div>
              <i>
                <FontAwesomeIcon icon={faListNumeric} />
              </i>
            </div>
            <Chart />
          </div>
          {/* <div className="charts-right">
            <div className="charts-right-title">
              <div>
                <h1>Status Reports</h1>
                <p>Bahir Dar,Amhara,Ethiopia</p>
              </div>
              <i>
                <FontAwesomeIcon icon={faUserCheck} />
              </i>
            </div>
            <div className="charts-right-cards">
              <div className="card1">
                <div>
                  <h1>Total Users</h1>
                  <p className="text-primary">5000</p>
                </div>
              </div>
              <div className="card2">
                <div>
                  <h1>Total Doctors</h1>

                  <p className="text-primary">2000</p>
                </div>
              </div>
              <div className="card3">
                <div>
                  <h1>Total Disease</h1>
                  <p className="text-primary">20000</p>
                </div>
              </div>
            </div>
          </div> */}
          <Button
            id="add-doctor-btn"
            onClick={handleShow}
            style={{ width: "70px", height: "30px" }}
          >
            <i>
              <FontAwesomeIcon icon={faAdd} />
              Add
            </i>
          </Button>
          <AddDoctorModal show={show} handleClose={handleClose} />
          <h2>
            Top Doctors <Badge bg="primary">New</Badge>
          </h2>
          <Table striped responsive hover bordered border={1}>
            <thead>
              <tr>
                <th>NO</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Emial</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Abebe</td>
                <td>Tesema</td>
                <td>abtesema@gmail.com</td>
                <td>0934433221</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Abebe</td>
                <td>Tesema</td>
                <td>abtesema@gmail.com</td>
                <td>0934433221</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Abebe</td>
                <td>Tesema</td>
                <td>abtesema@gmail.com</td>
                <td>0934433221</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Abebe</td>
                <td>Tesema</td>
                <td>abtesema@gmail.com</td>
                <td>0934433221</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </main>
  );
};

export default Main;

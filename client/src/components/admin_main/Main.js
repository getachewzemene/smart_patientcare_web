import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPatient } from "../../services/user_service";
import "./Main.scss";
import Chart from "../charts/Chart";
import { useSelector } from "react-redux";
import { Badge, Toast, ToastContainer } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserDoctor,
  faDisease,
  faListNumeric,

  // faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import AddDoctorModal from "../modals/AddDoctorModal";
import { AllDoctorPaginationWrapper } from "../../components/pagination/AllDoctorPaginationWrapper";
import { AllPatientPaginationWrapper } from "../pagination/AllPatientPaginationWrapper";
import { AllAppointmentWrapper } from "../appointment/Appointment";
const Main = ({ doctorData }) => {
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);

  const [patientData, setAllPatientData] = useState([]);
  const [totalAppointment, setTotalAppointment] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    getAllPatient().then((response) => {
      setAllPatientData(response);
    });
  }, [dispatch]);

  const handleClose = () => {
    setShowToast(true);
    setShow(false);
  };
  // const handleShow = () => {
  //   setShow(true);
  // };

  return (
    <main>
      <div className="main-container">
        <div className="main-title">
          <img src="../assets/admin-logo.jpg" alt="main" />
          <div className="main-greeting" id="top">
            <h1>Hello {currentUser.email}</h1>
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
              <span className="font-bold text-title">
                {doctorData.length + patientData.length}
              </span>
            </div>
          </div>
          <div className="custom-card">
            <i className="fa-2x text-red">
              <FontAwesomeIcon icon={faUserDoctor} />
            </i>
            <div className="card-inner">
              <p className="text-primary">Number of Doctors</p>
              <span className="font-bold text-title">{doctorData.length}</span>
            </div>
          </div>
          <div className="custom-card">
            <i className="fa-2x text-green">
              <FontAwesomeIcon icon={faUser} />
            </i>
            <div className="card-inner">
              <p className="text-primary"> Total Appointments</p>
              <span
                className="font-bold text-title"
                style={{ paddingLeft: "10px", marginLeft: "10px" }}
              >
                {totalAppointment}
              </span>
              ;
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
          <div className="charts-left my-4">
            <div className="charts-left-title">
              <div>
                <h1>Monthly Reports</h1>
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
          {/* <Button
            id="add-doctor-btn"
            onClick={handleShow}
            style={{ width: "70px", height: "30px" }}
          >
            <i>
              <FontAwesomeIcon icon={faAdd} />
              Add
            </i>
          </Button> */}
          <AddDoctorModal show={show} handleClose={handleClose} />
          <h2 className="pt-5 pb-2">
            Doctors <Badge bg="primary ">Top</Badge>
          </h2>
          <div id="allDoctor">
            {doctorData !== null && (
              <AllDoctorPaginationWrapper data={doctorData} />
            )}
          </div>
          <h2 className="pt-5 pb-2">
            Patients <Badge bg="primary">Top</Badge>
          </h2>
          <AllPatientPaginationWrapper patientData={patientData} />

          <h2 className="pt-5 pb-2">
            Appointments <Badge bg="primary">Top</Badge>
          </h2>
          <AllAppointmentWrapper setTotalAppointment={setTotalAppointment} />
        </div>
      </div>
    </main>
  );
};

export default Main;

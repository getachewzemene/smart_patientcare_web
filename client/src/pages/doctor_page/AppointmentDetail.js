import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Navbar,
  Tabs,
  Tab,
  Nav,
  Badge,
  Table,
  Row,
  Form,
  Button,
  InputGroup,
  Col,
  Spinner,
} from "react-bootstrap";

import "./DoctorPage.scss";
import UpdateApointmentModal from "../../components/modals/UpdateApointmentModal";
import AddPrescriptionFrom from "./AddPrescriptionForm";
import { PatinetHistoryPaginationWrapper } from "../../components/pagination/PatientHistoryPagination";
import { getPatientMedicalHistory } from "../../services/user_service";

const schema = Yup.object().shape({
  from: Yup.date().required("Required"),
  to: Yup.date().required("Required"),
});

const AppointmentDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { appointment } = state;
  const patientId = appointment.appointmentPatient.patientUser.id;
  const [showApointmentModal, setShowApointmentModal] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [appointmentData, setAppointmentData] = useState({});
  const [patientHistory, setPatienHistory] = useState(null);
  const [finalFilteredData, setFilteredData] = useState([]);
  const [show, setShow] = useState(false);

  const handleShowAppointmentModal = () => {
    setShowApointmentModal(true);
  };
  const handleCloseAppointmentModal = () => {
    setShowApointmentModal(false);
  };
  useEffect(() => {
    let mounted = true;
    getPatientMedicalHistory(patientId)
      .then((response) => {
        if (mounted) {
          setIsLoading(false);
          setPatienHistory(response);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setHasError(true);
      });
    return function cleanup() {
      mounted = false;
    };
  }, [patientId]);
  const filterData = (data, fromDate, toDate) => {
    return data.filter((item) => {
      const createdDate = new Date(item.prescriptionHistory.createdAt)
        .toISOString()
        .split("T")[0];
      // var same = createdDate === fromDate;
      // var notSame = createdDate !== fromDate;
      // console.log(same, notSame);
      return createdDate >= fromDate && createdDate <= toDate;
    });

    // const filteredData = data.filter((item) => {

    //   let date = new Date(item.prescriptionHistory.createdAt).getTime();
    //   // console.log(date);
    //   return date >= fromDate && date <= toDate;
    // });
    // console.log("data" + filteredData);
    // return filteredData;
  };
  const getHistory = (formValue) => {
    const { from, to } = formValue;
    const filteredData = patientHistory.userPatient.patientPrescription;
    var data = filterData(filteredData, from, to);
    if (data) {
      setFilteredData(data);
      // data.map((filteredHistory) => {
      //   console.log(filteredHistory.description);
      //   return filteredHistory;
      // });
    }
  };
  if (isLoading) return <Spinner>Waiting....</Spinner>;
  if (hasError) return <Spinner>{JSON.stringify(patientHistory)}</Spinner>;
  else {
    return (
      // <h2>{patientHistory.id}</h2>
      <>
        <Navbar
          style={{ backgroundColor: "#275091" }}
          className="mb-3 doctor-nav"
          onClick={() => {
            navigate(-1);
          }}
        >
          <i className="fa-2x text-white mx-5">
            {/* <FontAwesomeIcon icon={faBars} onClick={handleShow} /> */}
          </i>
          <Navbar.Brand>
            <h1 className="h1 text-light ">
              {"Patient Name:" +
                appointment.appointmentPatient.patientUser.firstName}
            </h1>
          </Navbar.Brand>
        </Navbar>

        <Tabs
          defaultActiveKey="appointment"
          id="fill-tab-example"
          className="mb-4 mx-0"
          // fill
        >
          <Tab eventKey="appointment" title="Appointment">
            <Row className="m-0 p-0">
              <Col sm={12} lg={11} md={8}>
                <Table striped responsive hover bordered border={1}>
                  <thead>
                    <tr>
                      <th className="p">Appointment ID</th>
                      <th className="p">First Name</th>
                      <th className="p">Last Name</th>
                      <th className="p">Emial</th>
                      <th className="p">Phone</th>
                      <th className="p">status</th>
                      <th className="p">Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{appointment.id}</td>
                      <td>
                        {appointment.appointmentPatient.patientUser.firstName}
                      </td>
                      <td>
                        {appointment.appointmentPatient.patientUser.lastName}
                      </td>
                      <td>
                        {appointment.appointmentPatient.patientUser.email}
                      </td>
                      <td>
                        {appointment.appointmentPatient.patientUser.phone}
                      </td>
                      <td>{appointment.status}</td>
                      <td>{appointment.title}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col sm={12} lg={4} md={4}>
                <Nav variant="button" style={{ display: "inlin-block" }}>
                  <Nav.Item>
                    <Nav.Link
                      onClick={() => {
                        setAppointmentData(appointment);
                        handleShowAppointmentModal();
                      }}
                      eventKey="key2"
                    >
                      <Badge bg="success px-4 py-2">Update</Badge>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" eventKey="key3">
                      <Badge bg="danger mx-4 py-2">Delete</Badge>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="history" title="History" className="mb-4">
            {patientHistory.userPatient.patientPrescription.length !== 0 ? (
              <Row className="m-0 p-0">
                <Col lg={10}>
                  {!show ? (
                    <PatinetHistoryPaginationWrapper
                      patientHistory={
                        patientHistory.userPatient.patientPrescription
                      }
                    />
                  ) : finalFilteredData.length !== 0 ? (
                    <PatinetHistoryPaginationWrapper
                      patientHistory={finalFilteredData}
                    />
                  ) : (
                    <h4 className="text-center text-danger">Data not found</h4>
                  )}
                </Col>
                <Col lg={2}>
                  <h5>Search History</h5>
                  <Formik
                    validationSchema={schema}
                    onSubmit={getHistory}
                    initialValues={{
                      from: "",
                      to: "",
                    }}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      resetForm,
                      values,
                      isValid,
                      touched,
                      errors,
                    }) => (
                      <Form onSubmit={handleSubmit} className="text-primary">
                        <Form.Label className="mt-3">From</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="date"
                            name="from"
                            value={values.from}
                            onChange={handleChange}
                            isValid={touched.from && !errors.from}
                            isInvalid={!!errors.from}
                            required
                          />
                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.from}
                          </Form.Control.Feedback>
                        </InputGroup>
                        <Form.Label className="mt-3">To</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="date"
                            name="to"
                            value={values.to}
                            onChange={handleChange}
                            isValid={touched.to && !errors.to}
                            isInvalid={!!errors.to}
                            required
                          />
                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.to}
                          </Form.Control.Feedback>
                        </InputGroup>
                        <Form.Group className="mt-4">
                          <Button
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={isLoading}
                            onClick={() => {
                              setShow(true);
                            }}
                          >
                            {isLoading && (
                              <Spinner>waiting...</Spinner>
                              // <span className="spinner-border spinner-border-lg"></span>
                            )}
                            Submit
                          </Button>
                          <Button
                            className="mx-3"
                            as="input"
                            type="reset"
                            value="Reset"
                            onClick={() => {
                              setShow(false);
                              resetForm();
                            }}
                          />
                        </Form.Group>
                      </Form>
                    )}
                  </Formik>
                </Col>
              </Row>
            ) : (
              <h3 className="text-danger text-center py-4">
                Patient history not found
              </h3>
            )}
          </Tab>
          <Tab
            eventKey="prescription"
            title="Prescription"
            className="d-flex justify-content-center"
          >
            <AddPrescriptionFrom
              patientId={appointment.appointmentPatient.patientUser.id}
            />
          </Tab>
        </Tabs>
        <UpdateApointmentModal
          show={showApointmentModal}
          appointmentData={appointmentData}
          handleClose={handleCloseAppointmentModal}
        />
      </>
    );
  }
};

export default AppointmentDetail;

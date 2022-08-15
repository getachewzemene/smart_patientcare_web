import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentData } from "../../slices/doctor_appointment_slice";
import { Spinner, Table, Dropdown, Badge, Nav } from "react-bootstrap";
const AppointmentByDoctor = ({
  handleShowAppointmentModal,
  setAppointmentData,
}) => {
  const { appointmentByDoctorId, isLoading, hasError } = useSelector(
    (state) => state.appointment
  );
  var incrementer = 1;
  const { user } = useSelector((state) => state.auth);
  var id = user.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAppointmentData({ id }));
  }, [dispatch, id]);
  if (appointmentByDoctorId != null) {
    return (
      <>
        <Table striped responsive hover bordered border={1}>
          <thead>
            <tr>
              <th className="p">NO</th>
              <th className="p">First Name</th>
              <th className="p">Last Name</th>
              <th className="p">Emial</th>
              <th className="p">Phone</th>
              <th className="p">appointment status</th>
              <th colSpan={3}>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointmentByDoctorId.map((appointment) => (
              <tr>
                <td>{incrementer++}</td>
                <td>{appointment.appointmentPatient.patientUser.firstName}</td>
                <td>{appointment.appointmentPatient.patientUser.lastName}</td>
                <td>{appointment.appointmentPatient.patientUser.email}</td>
                <td>{appointment.appointmentPatient.patientUser.phone}</td>
                <td>{appointment.status}</td>
                <Nav variant="pills" className="nav1">
                  <Nav.Item>
                    <Nav.Link href="#">
                      <Badge bg="primary px-1">View</Badge>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      onClick={() => {
                        setAppointmentData(appointment);
                        handleShowAppointmentModal();
                      }}
                      eventKey="key2"
                    >
                      <Badge bg="success px-1 ">Update</Badge>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#" eventKey="key3">
                      <Badge bg="danger px-1">Delete</Badge>
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
                    <Dropdown.Item
                      onClick={() => {
                        setAppointmentData(appointment);
                        handleShowAppointmentModal();
                      }}
                    >
                      <Badge bg="success">update</Badge>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <Badge bg="danger">delete</Badge>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
  if (isLoading) {
    return <Spinner>Waiting...</Spinner>;
  }
  if (!hasError) {
    return <h5 className="text-danger">Error while fetching data</h5>;
  }
};
const AllAppointment = () => {};
export { AppointmentByDoctor, AllAppointment };

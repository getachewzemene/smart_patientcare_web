import { Table } from "react-bootstrap";
const AllAppointmentRecord = ({ data }) => {
  var id = 1;
  return (
    <Table cstriped responsive hover id="allAppointment">
      <thead>
        <tr>
          <th rowSpan={2}>NO</th>
          <th colSpan={4}>Doctors</th>
          <th colSpan={4}>Patients</th>
          <th rowSpan={2}>Status</th>
          <th rowSpan={2}>Consultation Date</th>
        </tr>
      </thead>
      <tbody>
        <td></td>
        <td>Name</td>
        <td>Email</td>
        <td>Phone</td>
        <td>Specialization</td>
        <td>Name</td>
        <td>Email</td>
        <td>Phone</td>
        <td>Address</td>
        {data.map((data) => (
          <tr>
            <td>{id++} </td>
            <td>
              {data.appointmentDoctor.doctorUser.firstName +
                " " +
                data.appointmentDoctor.doctorUser.lastName}
            </td>
            <td>{data.appointmentDoctor.doctorUser.email}</td>
            <td>{data.appointmentDoctor.doctorUser.phone}</td>
            <td>{data.appointmentDoctor.specialization}</td>
            <td>
              {data.appointmentPatient.patientUser.firstName +
                " " +
                data.appointmentPatient.patientUser.lastName}
            </td>
            <td>{data.appointmentPatient.patientUser.email}</td>
            <td>{data.appointmentPatient.patientUser.phone}</td>
            <td>{data.appointmentPatient.patientUser.address}</td>
            <td>{data.status} </td>
            <td>
              {data.consultationDate == null
                ? "not set"
                : data.consultationDate.split("T")[0]}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export { AllAppointmentRecord };

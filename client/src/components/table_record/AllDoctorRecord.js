import { Table } from "react-bootstrap";
const AllDoctorRecord = ({ data }) => {
  var id = 1;
  return (
    <Table cstriped responsive hover bordered border={1}>
      <thead>
        <tr>
          <th>NO</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Specialization</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data) => (
          <tr>
            <td>{id++} </td>
            <td>{data.firstName} </td>
            <td>{data.lastName} </td>
            <td>{data.email} </td>
            <td>{data.phone} </td>
            <td>{data.address} </td>
            <td>{data.userDoctor.specialization} </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export { AllDoctorRecord };

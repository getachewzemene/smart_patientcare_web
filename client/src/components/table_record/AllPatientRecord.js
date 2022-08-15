import { Table } from "react-bootstrap";
const AllPatientRecord = ({ data }) => {
  var id = 1;
  return (
    <Table cstriped responsive hover bordered border={1} id="allPatient">
      <thead>
        <tr>
          <th>NO</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
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
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export { AllPatientRecord };

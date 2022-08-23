import React from "react";
import { Table } from "react-bootstrap";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { downloadExcel } from "react-export-table-to-excel";
import { CSVLink } from "react-csv";

import { Row, Col, Button } from "react-bootstrap";
import {
  faFileExcel,
  faFilePdf,
  faFileCsv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ref = React.createRef();

const PatientHistoryRecord = ({ data, patientHistory }) => {
  const header = [
    "compliant",
    "investigation result",
    "disease name",
    "treatment",

    "medication",
    "description",
    "dosage",
    "date",
  ];
  const body = patientHistory.userPatient.patientPrescription.map((history) => [
    history.diseaseName,
    history.medicineName,
    history.description,
    history.dosage,
    new Date(history.prescriptionHistory.createdAt).toISOString().split("T")[0],
  ]);
  const headers = [
    "disease name",
    "medication",
    "description",
    "dosage",
    "date",
  ];

  const csvData = patientHistory.userPatient.patientPrescription.map(
    (history) => [
      history.diseaseName,
      history.medicineName,
      history.description,
      history.dosage,
      new Date(history.prescriptionHistory.createdAt)
        .toISOString()
        .split("T")[0],
    ]
  );
  function handleDownloadExcel() {
    downloadExcel({
      fileName: "patient-history",
      sheet: "patient-history-sheet",
      tablePayload: {
        header,
        // accept two different data structures
        body: body,
      },
    });
  }

  const getAge = (dob) => {
    const ageDifMs = Date.now() - new Date(dob).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const exportPDF = () => {
    const doc = new jsPDF("p", "pt", "a4");
    autoTable(doc, {
      margin: { top: 10 },
      head: [["disease name", "medication", "description", "dosage", "date"]],
      body: patientHistory.userPatient.patientPrescription.map((history) => [
        history.diseaseName,
        history.medicineName,
        history.description,
        history.dosage,
        new Date(history.prescriptionHistory.createdAt)
          .toISOString()
          .split("T")[0],
      ]),
    });

    doc.save("patient-history.pdf");
  };

  return (
    <>
      {/* {data.map((history) => (
        <div className="card ml-5 my-4" style={{ borderRadius: "30px" }}>
          <div className="row no-gutters">
            <div className="col-md-3 py-5">
              <h5>
                {"Date:" +
                  new Date(history.prescriptionHistory.createdAt)
                    .toISOString()
                    .split("T")[0]}
              </h5>
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">
                  {"Disease name:" + history.diseaseName}
                </h5>
                <p className="card-text">
                  {"Disease description: " + history.description}
                </p>
                <p className="card-text">
                  {"Investigation: " +
                    history.prescriptionHistory.investigationResult}
                </p>
                <p className="card-text">
                  {"Treatment Taken: " + history.prescriptionHistory.treatment}
                </p>
                <p className="card-text">
                  {"Medicine name: " + history.medicineName}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))} */}

      <Row className="w-50">
        <Col lg={4}>
          <Button onClick={handleDownloadExcel}>
            <FontAwesomeIcon icon={faFileExcel} />
            EXCEL
          </Button>
        </Col>
        <Col lg={4}>
          <Button className="text-white" onClick={exportPDF}>
            <FontAwesomeIcon icon={faFilePdf} />
            PDF
          </Button>
        </Col>
        <Col lg={4}>
          <CSVLink
            data={csvData}
            headers={headers}
            filename={"patient-history.csv"}
          >
            <Button className="text-white">
              <FontAwesomeIcon icon={faFileCsv} />
              CSV
            </Button>
          </CSVLink>
        </Col>
      </Row>
      <Table cstriped responsive hover bordered border={1}>
        <caption>patient information</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Age</th>
            <th>email</th>
            <th>Blood Group</th>
            <th>phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{patientHistory.id}</td>
            <td>{patientHistory.firstName + " " + patientHistory.lastName}</td>
            <td>{getAge(patientHistory.DOB)}</td>
            <td>{patientHistory.email}</td>
            <td>{patientHistory.userPatient.bloodGroup}</td>
            <td>{patientHistory.phone}</td>
            <td>{patientHistory.address}</td>
          </tr>
        </tbody>
      </Table>
      <Table
        cstriped
        responsive
        hover
        bordered
        border={1}
        ref={ref}
        id="patient-history-table"
      >
        <caption>patient medical history</caption>
        <tbody>
          {data.map((history) => (
            <>
              <tr>
                <td>Doctor</td>
                <Table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Full Name</th>
                      <th>email</th>
                      <th>phone</th>
                      <th>Address</th>
                      <th>Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {
                          history.prescriptionHistory.historyDoctor.doctorUser
                            .id
                        }
                      </td>
                      <td>
                        {history.prescriptionHistory.historyDoctor.doctorUser
                          .firstName +
                          " " +
                          history.prescriptionHistory.historyDoctor.doctorUser
                            .lastName}
                      </td>
                      <td>
                        {
                          history.prescriptionHistory.historyDoctor.doctorUser
                            .email
                        }
                      </td>
                      <td>
                        {
                          history.prescriptionHistory.historyDoctor.doctorUser
                            .phone
                        }
                      </td>
                      <td>
                        {
                          history.prescriptionHistory.historyDoctor.doctorUser
                            .address
                        }
                      </td>
                      <td>
                        {
                          history.prescriptionHistory.historyDoctor
                            .specialization
                        }
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </tr>
              <tr>
                <td>Compliant</td>
                <td>{history.prescriptionHistory.compliant}</td>
              </tr>
              <tr>
                <td>Investigation result</td>
                <td>{history.prescriptionHistory.investigationResult}</td>
              </tr>
              <tr>
                <td>disease Name</td>
                <td>{history.diseaseName}</td>
              </tr>
              <tr>
                <td>Treatment made</td>
                <td>{history.prescriptionHistory.treatment}</td>
              </tr>
              <tr>
                <td>Medication</td>
                <td>{history.medicineName}</td>
              </tr>
              <tr>
                <td className="w-25">medication description</td>
                <td>{history.description}</td>
              </tr>
              <tr>
                <td>Dosage</td>
                <td>{history.dosage}</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>
                  {
                    new Date(history.prescriptionHistory.createdAt)
                      .toISOString()
                      .split("T")[0]
                  }
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export { PatientHistoryRecord };

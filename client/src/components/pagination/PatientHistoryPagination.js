import React, { useState } from "react";
import Pagination from "./Pagination";
import { PatientHistoryRecord } from "../table_record/PatientHistoryRecord";
const PatinetHistoryPaginationWrapper = ({ patientHistory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(1);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = patientHistory.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  console.log(patientHistory);
  const nPages = Math.ceil(patientHistory.length / recordsPerPage);

  return (
    <div className="mx-2" style={{ maxHeight: "100%" }}>
      <PatientHistoryRecord data={currentRecords} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export { PatinetHistoryPaginationWrapper };

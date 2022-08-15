import React, { useState } from "react";
import Pagination from "./Pagination";
import { AllPatientRecord } from "../table_record/AllPatientRecord";
const AllPatientPaginationWrapper = ({ patientData }) => {
  // To hold the actual dat

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = patientData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(patientData.length / recordsPerPage);

  return (
    <div className="mx-2">
      <AllPatientRecord data={currentRecords} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export { AllPatientPaginationWrapper };

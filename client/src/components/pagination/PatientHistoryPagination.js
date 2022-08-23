import React, { useState } from "react";
import Pagination from "./Pagination";

import { PatientHistoryRecord } from "../table_record/PatientHistoryRecord";

const PatinetHistoryPaginationWrapper = ({ historyArray, patientHistory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(1);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = historyArray.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  console.log(patientHistory);
  const nPages = Math.ceil(historyArray.length / recordsPerPage);

  return (
    <div className="mx-2" style={{ maxHeight: "100%" }}>
      <PatientHistoryRecord
        data={currentRecords}
        patientHistory={patientHistory}
      />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export { PatinetHistoryPaginationWrapper };

import React, { useState } from "react";
import Pagination from "./Pagination";
import { AllDoctorRecord } from "../table_record/AllDoctorRecord";
const AllDoctorPaginationWrapper = ({ data: doctorData }) => {
  // To hold the actual dat
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = doctorData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(doctorData.length / recordsPerPage);

  return (
    <div className="mx-2">
      <AllDoctorRecord data={currentRecords} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export { AllDoctorPaginationWrapper };

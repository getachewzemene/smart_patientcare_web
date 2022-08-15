import React from "react";
import { Nav } from "react-bootstrap";
const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <Nav.Link className="page-link" onClick={prevPage} href="#">
            Previous
          </Nav.Link>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? "active" : ""} `}
          >
            <Nav.Link
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              href="#"
            >
              {pgNumber}
            </Nav.Link>
          </li>
        ))}
        <li className="page-item">
          <Nav.Link className="page-link" onClick={nextPage} href="#">
            Next
          </Nav.Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

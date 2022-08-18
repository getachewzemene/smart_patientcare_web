import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { BASE_URL } from "../../services/api_endpoint";
import { Navbar } from "react-bootstrap";
const DoctorProfile = () => {
  const { state } = useLocation();
  const { doctorById } = state;
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#275091" }}
        className="mb-3 doctor-nav"
        onClick={() => {
          navigate(-1);
        }}
      >
        <i className="fa-2x text-white mx-5">
          {/* <FontAwesomeIcon icon={faBars} onClick={handleShow} /> */}
        </i>
        <Navbar.Brand>
          <h1 className="h1 text-light ">{"Dr. " + doctorById.firstName}</h1>
        </Navbar.Brand>
      </Navbar>
      <div
        className="card mx-5"
        style={{ width: "80%", height: "200%", borderRadius: "30px" }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              src={BASE_URL + "/" + doctorById.imageURL}
              alt="doctor pic"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {"Dr. " + doctorById.firstName + " " + doctorById.lastName}
              </h5>
              <p className="card-text">{"Address: " + doctorById.address}</p>
              <p className="card-text">
                {"Specializatione:" + doctorById.specialization}
              </p>
              <p className="card-text">{"Email:" + doctorById.email}</p>
              <p className="card-text">{"Phone: " + doctorById.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const DoctorCardImage = ({ doctorById }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card className="bg-light shadow doctor-card">
        <Card.Img
          variant="top"
          className="rounded"
          height={250}
          src={BASE_URL + "/" + doctorById.imageURL}
        />
        <Card.Body className="rounded">
          <Card.Title>
            {"Dr." + doctorById.firstName + " " + doctorById.lastName}
          </Card.Title>
          <Card.Text>Email:{doctorById.email}</Card.Text>
          <Card.Text>Phone:{doctorById.phone}</Card.Text>
          <Card.Text>Address:{doctorById.address}</Card.Text>
          <Card.Text>Specialization:{doctorById.specialization}</Card.Text>
          <Button
            variant="primary mx-5 doctor-view-btn"
            // href={"/doctor/profile/" + doctorById.id}
            onClick={() => {
              navigate("/doctor/profile/" + doctorById.id, {
                state: { doctorById },
              });
            }}
          >
            View Detail
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
// else if (doctorById === null && isLoading && !hasError) {
//   return <Spinner>Waiting</Spinner>;
// } else if (doctorById === null && !isLoading && hasError) {
//   return <h5 className="text-danger">Error while fetching data</h5>;
// }
// };

export default DoctorProfile;

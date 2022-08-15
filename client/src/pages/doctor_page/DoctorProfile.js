import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorData } from "../../slices/doctor_slice";
import { Button, Card, Spinner } from "react-bootstrap";

export const DoctorDatabyIdProvider = () => {
  const { doctorById } = useSelector((state) => state.doctor);
  const { user } = useSelector((state) => state.auth);
  var id = user.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctorData({ id }));
  }, [dispatch, id]);

  // console.log(hasError);
  // console.log(isLoading);
  return doctorById;
};
const DoctorProfile = () => {
  const doctorById = DoctorDatabyIdProvider();
  const DoctorInfo = () => {
    if (doctorById !== null) {
      return (
        <>
          <h1>{doctorById.id}</h1>
          <h1>{doctorById.firstName}</h1>
          <h1>{doctorById.lastName}</h1>
          <h1>{doctorById.email}</h1>
          <h1>{doctorById.phone}</h1>
          <h1>{doctorById.address}</h1>
          <h1>{doctorById.specialization}</h1>
          <img
            src={doctorById.imageURL}
            alt="profile"
            width={200}
            height={300}
          />
        </>
      );
    }
  };
  return (
    <>
      <h1>Doctor Profile</h1>
      <DoctorInfo />
    </>
  );
};
export const DoctorCardImage = () => {
  const { doctorById, isLoading, hasError } = useSelector(
    (state) => state.doctor
  );
  const { user } = useSelector((state) => state.auth);
  var id = user.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctorData({ id }));
  }, [dispatch, id]);
  // console.log(doctorById);
  // console.log(hasError);
  // console.log(isLoading);
  if (doctorById !== null) {
    return (
      <>
        <Card className="bg-light shadow doctor-card">
          <Card.Img
            variant="top"
            className="rounded"
            height={250}
            src={doctorById.imageURL ?? ""}
          />
          <Card.Body className="rounded">
            <Card.Title>
              {"Dr." + doctorById.firstName + " " + doctorById.lastName}
            </Card.Title>
            <Card.Text>Email:{doctorById.email}</Card.Text>
            <Card.Text>Phone:{doctorById.phone}</Card.Text>
            <Card.Text>Address:{doctorById.address}</Card.Text>
            <Card.Text>Specialization:{doctorById.specialization}</Card.Text>
            <Button variant="primary mx-5 doctor-view-btn">View Detail</Button>
          </Card.Body>
        </Card>
      </>
    );
  } else if (doctorById === null && isLoading && !hasError) {
    return <Spinner>Waiting</Spinner>;
  } else if (doctorById === null && !isLoading && hasError) {
    return <h5 className="text-danger">Error while fetching data</h5>;
  }
};

export default DoctorProfile;

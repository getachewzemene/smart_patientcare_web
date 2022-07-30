import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorData } from "../../slices/doctor_slice";
import user from "../../services/auth_header";
import { Spinner } from "react-bootstrap";
const id = user.id;
const DoctorProfile = () => {
  const { doctorById, isLoading, hasError } = useSelector(
    (state) => state.doctor
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctorData({ id }));
  }, [dispatch]);

  // console.log(hasError);
  // console.log(isLoading);
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
    if (isLoading) return <Spinner>Loading.....</Spinner>;
    if (hasError) return <h1 className="text-danger">Error</h1>;
  };
  return (
    <>
      <h1>Doctor Profile</h1>
      <DoctorInfo />
    </>
  );
};

export default DoctorProfile;

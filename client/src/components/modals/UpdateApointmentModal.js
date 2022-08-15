import React, { useEffect, useState } from "react";

import {
  Button,
  Modal,
  Form,
  InputGroup,
  Spinner,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { clearMessage } from "../../slices/message_slice";
import { updateAppointmentData } from "../../slices/doctor_appointment_slice";

const schema = Yup.object().shape({
  status: Yup.string()
    .min(2, "Too Short")
    .max(100, "Too Long")
    .required("disease name required"),
  consultationDate: Yup.date()
    // .min(new Date(Date.now() - 345600), "date less than today not accepted")
    // .max(new Date(Date.now() + 100000), "above 10 day is not accepted")
    .required("Required"),
});
const AppointmentModal = ({ show, handleClose, appointmentData }) => {
  const [updateAppointmentToastMessage, setUpdateAppointmentToast] =
    useState("...");
  const [showToast, setShowToast] = useState(false);
  const { message } = useSelector((state) => state.message);
  const { isLoading, hasError } = useSelector((state) => state.appointment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const handleAddDisease = (formValue) => {
    var data = {
      id: appointmentData.id,
      status: formValue.status,
      consultationDate: formValue.consultationDate,
    };
    // console.log(data);
    dispatch(
      updateAppointmentData({
        data,
      })
    )
      .unwrap()
      .then((response) => {
        setUpdateAppointmentToast("appointment data updated success");
        setShowToast(true);
        // handleClose();
        // console.log(response);
      })
      .catch(() => {});
  };

  return (
    <Modal show={show} backdrop="static" keyboard={false} onHide={handleClose}>
      <Modal.Header closeButton>
        <ToastContainer position="top-end">
          <Toast
            bg="success"
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={5000}
            autohide
          >
            <Toast.Header>
              <strong className="me-auto">Message</strong>
              <small>NOW</small>
            </Toast.Header>
            <Toast.Body className="text-white">
              {updateAppointmentToastMessage}
            </Toast.Body>
          </Toast>
        </ToastContainer>
        <Modal.Title>Update Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          validationSchema={schema}
          onSubmit={handleAddDisease}
          initialValues={{
            status: appointmentData.status,
            consultationDate: new Date(Date.now()),
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            resetForm,
            values,
            touched,
            errors,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Label className="mt-3">Appointment Status</Form.Label>
              <InputGroup hasValidation>
                <Form.Select
                  id="status"
                  value={values.status}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.status && !errors.status}
                  isInvalid={!!errors.status}
                  required
                >
                  <option hidden>Select status</option>
                  <option value="accepted">Accept</option>
                  <option value="rejected">Reject</option>
                  <option value="pending">Pending</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.status}
                </Form.Control.Feedback>
              </InputGroup>
              <Form.Label className="mt-3">Consultation Date</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="date"
                  name="consultationDate"
                  value={values.consultationDate}
                  onChange={handleChange}
                  isValid={touched.consultationDate && !errors.consultationDate}
                  isInvalid={!!errors.consultationDate}
                  required
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.consultationDate}
                </Form.Control.Feedback>
              </InputGroup>
              <Form.Group className="px-5 mt-4">
                <Button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <Spinner>waiting...</Spinner>
                    // <span className="spinner-border spinner-border-lg"></span>
                  )}
                  Update
                </Button>
                <Button
                  className="mx-3"
                  as="input"
                  type="reset"
                  value="Reset"
                  onClick={() => {
                    resetForm();
                    dispatch(clearMessage());
                  }}
                />
              </Form.Group>
            </Form>
          )}
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        {hasError && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AppointmentModal;

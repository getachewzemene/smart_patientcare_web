import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  Button,
  ToastContainer,
  Toast,
  Form,
  Spinner,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";
import { Formik } from "formik";
import { clearMessage } from "../../slices/message_slice";
import { addDiseaseData } from "../../slices/doctor_slice";
import { generateId } from "./../../utils/id_generator";
const AddScheduleModal = ({ show, handleClose }) => {
  const [value, onChange] = useState("10:00");
  const [showToast, setShowToast] = useState(false);
  const [checked, setCheked] = useState([]);
  const [scheduleToast, setScheduleToast] = useState("...");
  const { isLoading } = useSelector((state) => state.doctor);
  const { message } = useSelector((state) => state.message);
  const { hasError } = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const handleSubmitSchedule = (formValue) => {
    var schedule = [];
    for (var i = 0; i < checked.length; i++) {
      schedule.push({
        id: generateId(),
        workingDays: checked[i].value,
        description: "",
      });
    }
    console.log(formValue);
    const { diseaseName, diseaseCategory, precuation } = formValue;
    let id = generateId();
    // console.log(id, diseaseName, diseaseCategory, precuation, symptoms);
    // dispatch(
    //   addDiseaseData({
    //     id,
    //     diseaseName,
    //     diseaseCategory,
    //     precuation,
    //     symptoms: schedule,
    //   })
    // )
    //   .unwrap()
    //   .then((response) => {
    //     setScheduleToast("disease data add success");
    //     setShowToast(true);
    //     // handleClose();
    //     // console.log(response);
    //   })
    //   .catch(() => {});
  };

  return (
    <div>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        onHide={handleClose}
      >
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
              <Toast.Body className="text-white">{scheduleToast}</Toast.Body>
            </Toast>
          </ToastContainer>
          <Modal.Title>Add Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            onSubmit={handleSubmitSchedule}
            initialValues={{
              monday: "",
              mondayStartTime: "",
              mondayEndTime: "",
              tuesday: "",
              tuesdayStartTime: "",
              tuesdayEndTime: "",
              wednsday: "",
              thursday: "",
              friday: "",
              saturday: "",
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              resetForm,
              values,
              isValid,
              touched,
              errors,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={12} lg={6} md={6}>
                    <Form.Check
                      name="monday"
                      value={values.monday}
                      onChange={handleChange}
                      label="Monday"
                    />
                    <Form.Control
                      type="time"
                      name="startTime"
                      value={values.mondayStartTime}
                      onChange={handleChange}
                    />
                    <Form.Control
                      type="time"
                      name="endTime"
                      value={values.mondayEndTime}
                      onChange={handleChange}
                    />
                    <Form.Check
                      name="tuesday"
                      value={values.tuesday}
                      onChange={handleChange}
                      label="Tuesday"
                    />
                    <Form.Control
                      type="time"
                      name="startTime"
                      value={values.tuesdayStartTime}
                      onChange={handleChange}
                    />
                    <Form.Control
                      type="time"
                      name="endTime"
                      value={values.tuesdayEndTime}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row></Row>
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
                    Submit
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
    </div>
  );
};

export default AddScheduleModal;

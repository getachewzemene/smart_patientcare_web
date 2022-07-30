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
import { addPrescriptionData } from "../../slices/doctor_slice";
import shortid from "shortid";

const schema = Yup.object().shape({
  diseaseName: Yup.string()
    .min(2, "Too Short")
    .max(100, "Too Long")
    .required("disease name required"),
  medicineName: Yup.string()
    .min(2, "Too Short")
    .max(100, "Too Long")
    .required("medicine name required"),
  description: Yup.string()
    .min(10, "Too Short")
    .max(500, "Too Long")
    .required("description name required"),
  dosage: Yup.number()
    .min(0, "invalid dosage")
    .max(10, "too max dosage")
    .required("Dosage required"),
});
const AddPrescriptionModal = ({ show, handleClose }) => {
  const [addPrescriptionToastMessage, setAddDescriptionToast] = useState("...");
  const [showToast, setShowToast] = useState(false);

  const { message } = useSelector((state) => state.message);
  const { isLoading } = useSelector((state) => state.doctor);
  const { hasError } = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const handleAddPrescription = (formValue) => {
    const id = shortid.generate();
    const { diseaseName, medicineName, description, dosage } = formValue;
    dispatch(
      addPrescriptionData({
        id,
        diseaseName,
        medicineName,
        description,
        dosage,
      })
    )
      .unwrap()
      .then((response) => {
        setAddDescriptionToast("prescription data add success");
        setShowToast(true);
        console.log(response);
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
              {addPrescriptionToastMessage}
            </Toast.Body>
          </Toast>
        </ToastContainer>
        <Modal.Title>Add Prescription</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          validationSchema={schema}
          onSubmit={handleAddPrescription}
          initialValues={{
            diseaseName: "",
            medicineName: "",
            description: "",
            dosage: "",
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
            <Form onSubmit={handleSubmit} className="text-primary">
              <Form.Label className="mt-3">Disease Name</Form.Label>
              <InputGroup hasValidation>
                <Form.Select
                  id="diseaseName"
                  value={values.diseaseName}
                  onChange={handleChange}
                  isValid={touched.diseaseName && !errors.diseaseName}
                  isInvalid={!!errors.diseaseName}
                  required
                >
                  <option hidden>Select Disease</option>
                  <option value="Fungal Infection">Fungal Infection</option>
                  <option value="Allergy">Allergy</option>
                  <option value="GERD">GERD</option>
                  <option value="Chronic cholestasis">
                    Chronic cholestasis
                  </option>
                  <option value="Drug Reaction">Drug Reaction</option>
                  <option value="Peptic ucler disease">
                    Peptic ucler disease
                  </option>
                  <option value="AIDS">ADIS</option>
                  <option value="Diarria">Diarria</option>
                  <option value="Diabetes">Diabetes</option>
                  <option value="Gastroenterities">Gastroenterities</option>
                  <option value="Bronchial Asthma">Bronchial Asthma</option>
                  <option value="Hypertension">Hypertension</option>
                  <option value="Maigraine">Maigraine</option>
                  <option value="Cervical spondylosis">
                    Cervical spondylosis
                  </option>
                  <option value="Paralysis(braine hemorrhage)">
                    Paralysis
                  </option>
                  <option value="Jaundice">Jaundice</option>
                  <option value="Malaria">Malaria</option>
                  <option value="Chicken pox">Chicken pox</option>
                  <option value="Dendue">Dendue</option>
                  <option value="Typhoid">Typhoid</option>
                  <option value="hepatitis A">Hepatitis A</option>
                  <option value="Hepatitis B">Hepatitis B</option>
                  <option value="Cepatitis C">Hepatitis C</option>
                  <option value="Depatitis A">Hepatitis D</option>
                  <option value="Eepatitis A">Hepatitis E</option>
                  <option value="Alcoholic hepatitis">
                    Alcoholic hepatitis
                  </option>
                  <option value="Tuberculosis">Tuberculosis</option>
                  <option value="Common Cold">Common Cold</option>
                  <option value="Pneumonia">Pneumonia</option>
                  <option value="Heart attack">Heart attack</option>
                  <option value="Varicose veins">Varicose veins</option>
                  <option value="Hyperthyroidism">Hyperthyroidism</option>
                  <option value="Hypoglycemia">Hypoglycemia</option>
                  <option value="Acne">Acne</option>
                  <option value="Impetigo">Impetigo</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.diseaseName}
                </Form.Control.Feedback>
              </InputGroup>

              <Form.Label className="mt-3">Medicine name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  name="medicineName"
                  placeholder="medicine name"
                  value={values.medicineName}
                  onChange={handleChange}
                  isValid={touched.medicineName && !errors.medicineName}
                  isInvalid={!!errors.medicineName}
                  required
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.medicineName}
                </Form.Control.Feedback>
              </InputGroup>
              <Form.Label className="mt-3">Description</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="write some description......"
                  value={values.description}
                  rows={4}
                  onChange={handleChange}
                  isValid={touched.description && !errors.description}
                  isInvalid={!!errors.description}
                  required
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.description}
                </Form.Control.Feedback>
              </InputGroup>

              <Form.Label className="mt-3">Dosage</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="number"
                  name="dosage"
                  placeholder="dosage"
                  value={values.dosage}
                  onChange={handleChange}
                  isValid={touched.dosage && !errors.dosage}
                  isInvalid={!!errors.dosage}
                  required
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.dosage}
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
  );
};

export default AddPrescriptionModal;

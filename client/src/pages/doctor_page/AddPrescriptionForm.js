import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Button,
  Form,
  InputGroup,
  Spinner,
  Toast,
  ToastContainer,
  Card,
  Container,
  Navbar,
  Row,
  Col,
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
    .min(1, "invalid dosage")
    .max(20, "too max dosage")
    .required("Dosage required"),
  compliant: Yup.string()
    .min(10, "Too Short")
    .max(500, "Too Long")
    .required("compliant name required"),
  investigationResult: Yup.string()
    .min(10, "Too Short")
    .max(500, "Too Long")
    .required("investigationResult name required"),
  treatment: Yup.string()
    .min(10, "Too Short")
    .max(500, "Too Long")
    .required("treatment name required"),
});

const AddPrescriptionFrom = () => {
  const { state } = useLocation();
  const { patientId } = state;
  const navigate = useNavigate();
  const [addPrescriptionToastMessage, setAddDescriptionToast] = useState("...");
  const [showToast, setShowToast] = useState(false);
  const { message } = useSelector((state) => state.message);
  const { user } = useSelector((state) => state.auth);
  const { hasError, isLoading } = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const handleAddPrescription = (formValue) => {
    const id = shortid.generate();
    const {
      diseaseName,
      medicineName,
      description,
      dosage,
      compliant,
      investigationResult,
      treatment,
    } = formValue;

    dispatch(
      addPrescriptionData({
        id,
        diseaseName,
        medicineName,
        description,
        dosage,
        compliant,
        investigationResult,
        treatment,
        doctorId: user.id,
        patientId,
      })
    )
      .unwrap()
      .then((response) => {
        setAddDescriptionToast("prescription data add success");
        setShowToast(true);
        // console.log(response);
      })
      .catch(() => {});
  };

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "#275091",
          display: "flex row wrap",

          justifyContent: "space-between",
        }}
        className="mb-3"
      >
        <Navbar.Brand
          onClick={() => {
            navigate(-1);
          }}
        >
          <h1 className="h1 text-green mx-3">
            Smart<span className="h2 text-yellow">Patient</span>
            <span className="h3 text-red">Care</span>
          </h1>
        </Navbar.Brand>
      </Navbar>
      <Container className="w-75 mx-auto p-0 my-1 center">
        <Card>
          <Card.Header className="text-center p-3">
            Add Prescription
          </Card.Header>
          <Card.Body>
            <Formik
              validationSchema={schema}
              onSubmit={handleAddPrescription}
              initialValues={{
                diseaseName: "",
                medicineName: "",
                description: "",
                dosage: "",
                compliant: "",
                investigationResult: "",
                treatment: "",
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
                <Form onSubmit={handleSubmit} className="text-black ">
                  <Row>
                    <Col sm={12} lg={6} md={6}>
                      <Form.Label className="mt-3">Disease Name</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Select
                          className="selectpicker"
                          data-show-subtext="true"
                          data-live-search="true"
                          id="diseaseName"
                          value={values.diseaseName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={touched.diseaseName && !errors.diseaseName}
                          isInvalid={!!errors.diseaseName}
                          required
                          spellCheck
                        >
                          <option hidden>Select Disease</option>
                          <option value="Fungal Infection">
                            Fungal Infection
                          </option>
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
                          <option value="Gastroenterities">
                            Gastroenterities
                          </option>
                          <option value="Bronchial Asthma">
                            Bronchial Asthma
                          </option>
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
                          <option value="Hyperthyroidism">
                            Hyperthyroidism
                          </option>
                          <option value="Hypoglycemia">Hypoglycemia</option>
                          <option value="Acne">Acne</option>
                          <option value="Impetigo">Impetigo</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.diseaseName}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Col>
                    <Col sm={12} lg={6} md={6}>
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
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12} lg={6} md={6}>
                      {" "}
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
                    </Col>

                    <Col sm={12} lg={6} md={6}>
                      {" "}
                      <Form.Label className="mt-3">Dosage</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="number"
                          name="dosage"
                          min="1"
                          max="20"
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
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12} lg={6} md={6}>
                      {" "}
                      <Form.Label className="mt-3">compliant</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          as="textarea"
                          name="compliant"
                          placeholder="write compliants here......"
                          value={values.compliant}
                          rows={4}
                          onChange={handleChange}
                          isValid={touched.compliant && !errors.compliant}
                          isInvalid={!!errors.compliant}
                          required
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.compliant}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Col>
                    <Col sm={12} lg={6} md={6}>
                      {" "}
                      <Form.Label className="mt-3">
                        Investigation Result
                      </Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          as="textarea"
                          name="investigationResult"
                          placeholder="write some investigation results if any......"
                          value={values.investigationResult}
                          rows={4}
                          onChange={handleChange}
                          // isValid={touched.description && !errors.description}
                          // isInvalid={!!errors.description}
                        />
                        {/* <Form.Control.Feedback type="invalid" tooltip>
                {errors.description}
              </Form.Control.Feedback> */}
                      </InputGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={12} lg={6} md={6}>
                      {" "}
                      <Form.Label className="mt-3">treatment</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          as="textarea"
                          name="treatment"
                          placeholder="write treatments you made......"
                          value={values.treatment}
                          rows={4}
                          onChange={handleChange}
                          isValid={touched.treatment && !errors.treatment}
                          isInvalid={!!errors.treatment}
                          required
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.treatment}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6} className="text-center">
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
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
            <Container>
              {hasError && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <ToastContainer position="middle-end">
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
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default AddPrescriptionFrom;

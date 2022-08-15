import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./addDiseaseModal.scss";
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
import { addDiseaseData } from "../../slices/doctor_slice";
import { generateId } from "./../../utils/id_generator";
import { symptoms } from "../../common/symptoms";

const schema = Yup.object().shape({
  diseaseName: Yup.string()
    .min(2, "Too Short")
    .max(100, "Too Long")
    .required("disease name required"),
  diseaseCategory: Yup.string()
    .min(2, "Too Short")
    .max(100, "Too Long")
    .required("diseaseCategory required"),
  precuation: Yup.string()
    .min(10, "Too Short")
    .max(500, "Too Long")
    .required("precuation required"),
});
const AddDiseaseModal = ({ show, handleClose }) => {
  const [addDiseaseToastMessage, setAddDiseaseToast] = useState("...");
  const [showToast, setShowToast] = useState(false);
  const [selected, setSelected] = useState([]);
  const { message } = useSelector((state) => state.message);
  const { isLoading } = useSelector((state) => state.doctor);
  const { hasError } = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const handleAddDisease = (formValue) => {
    var symptoms = [];
    for (var i = 0; i < selected.length; i++) {
      symptoms.push({
        id: generateId(),
        symptomName: selected[i].value,
        description: "symptom description",
      });
    }
    // console.log(symptoms);
    const { diseaseName, diseaseCategory, precuation } = formValue;
    let id = generateId();
    // console.log(id, diseaseName, diseaseCategory, precuation, symptoms);
    dispatch(
      addDiseaseData({
        id,
        diseaseName,
        diseaseCategory,
        precuation,
        symptoms,
      })
    )
      .unwrap()
      .then((response) => {
        setAddDiseaseToast("disease data add success");
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
              {addDiseaseToastMessage}
            </Toast.Body>
          </Toast>
        </ToastContainer>
        <Modal.Title>Add Disease</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          validationSchema={schema}
          onSubmit={handleAddDisease}
          initialValues={{
            diseaseName: "",
            diseaseCategory: "",
            precuation: "",
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
                  <option value="AIDS">AIDS</option>
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
              <Form.Label className="mt-3">Disease Category</Form.Label>
              <InputGroup hasValidation>
                <Form.Select
                  id="diseaseCategory"
                  value={values.diseaseCategory}
                  onChange={handleChange}
                  isValid={touched.diseaseCategory && !errors.diseaseCategory}
                  isInvalid={!!errors.diseaseCategory}
                  required
                >
                  <option hidden>Select Disease Category</option>
                  <option value="Blood">Blood</option>
                  <option value="Cancer and neoplasm">
                    Cancer and neoplasm
                  </option>
                  <option value="Cardiovascular">Cardiovascular</option>
                  <option value="Infection">Infection</option>
                  <option value="Congenital disorders">
                    Congenital disorders
                  </option>
                  <option value="Ear">Ear</option>
                  <option value="Eye">Eye</option>
                  <option value="Inflammatory and immune system">
                    Inflammatory and immune system
                  </option>
                  <option value="Injuries and accidents">
                    Injuries and accidents
                  </option>
                  <option value="Mental health">Mental health</option>
                  <option value="Metabolic and Endocrine">
                    Metabolic and Endocrine
                  </option>
                  <option value="Musculoskeletal">Musculoskeletal</option>
                  <option value="Neurological">Neurological</option>
                  <option value="Oral and Gastrointestinal">
                    Oral and Gastrointestinal
                  </option>
                  <option value="Renal and Urogenital">
                    Renal and Urogenital
                  </option>
                  <option value="Reproductive health and childbirth">
                    Reproductive health and childbirth
                  </option>
                  <option value="Respiratory">Respiratory</option>
                  <option value="Skin">Skin</option>
                  <option value="Stroke">Stroke</option>
                  <option value="Generic health relevance">
                    Generic health relevance
                  </option>
                  <option value="Disputed Aetiology and other">
                    Disputed Aetiology and other
                  </option>
                </Form.Select>
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.diseaseCategory}
                </Form.Control.Feedback>
              </InputGroup>
              <Form.Label className="mt-3">Precuation</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  as="textarea"
                  name="precuation"
                  placeholder="write some description......"
                  value={values.precuation}
                  rows={4}
                  onChange={handleChange}
                  isValid={touched.precuation && !errors.precuation}
                  isInvalid={!!errors.precuation}
                  required
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.precuation}
                </Form.Control.Feedback>
              </InputGroup>
              <Form.Label className="mt-3">Select symptoms</Form.Label>
              <MultiSelect
                options={symptoms}
                value={selected}
                onChange={setSelected}
                labelledBy="select"
                className="p py-0 my-0"
              />
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

export default AddDiseaseModal;

import React, { useEffect } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { clearMessage } from "../../slices/message_slice";
import { addDoctorData } from "../../slices/doctor_slice";
import shortid from "shortid";

const SUPPORTEDFORMATs = ["image/jpg", "image/jpeg", "image/png"];
const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  phone: Yup.string().required(),
  gender: Yup.string().required(),
  DOB: Yup.date().default(() => {
    return new Date();
  }),
  address: Yup.string().required(),
  specialization: Yup.string().required(),
  file: Yup.mixed()
    .nullable()
    .required()
    .test(
      "FILE_SIZE",
      "Uploaded File is to big",
      (value) => !value || (value && value.size <= 1024 * 1024 * 1024)
    )
    .test(
      "FILE_FORMAT",
      "Uploaded File has Unsupported Format",
      (value) => !value || (value && SUPPORTEDFORMATs.includes(value?.type))
    ),
});
const AddDoctorModal = ({ show, handleClose }) => {
  const { message } = useSelector((state) => state.message);
  const { isLoading } = useSelector((state) => state.doctor);
  const { hasError } = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const handleAddDoctor = (formValue) => {
    // setSpinner(true);
    const id = shortid.generate();
    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      gender,
      DOB,
      address,
      specialization,
      file,
    } = formValue;
    dispatch(
      addDoctorData({
        id,
        firstName,
        lastName,
        email,
        password,
        phone,
        gender,
        DOB,
        address,
        specialization,
        file,
      })
    )
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch(() => {});
  };

  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            validationSchema={schema}
            onSubmit={handleAddDoctor}
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              phone: "",
              gender: "",
              DOB: "",
              address: "",
              specialization: "",
              file: null,
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
              setFieldValue,
              errors,
            }) => (
              <Form
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                className="text-primary"
              >
                <Form.Label>First name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                    isInvalid={!!errors.firstName}
                    required
                    autoFocus
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.firstName}
                  </Form.Control.Feedback>
                </InputGroup>
                <Form.Label className="mt-3">Last name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                    isInvalid={!!errors.lastName}
                    required
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.lastName}
                  </Form.Control.Feedback>
                </InputGroup>
                <Form.Label className="mt-3">Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>

                <Form.Label className="mt-3">Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="**********"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                    isInvalid={!!errors.password}
                    required
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.password}
                  </Form.Control.Feedback>
                </InputGroup>
                <Form.Label className="mt-3">Phone</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="phone"
                    name="phone"
                    placeholder="+251-xxx-xxx-xxx"
                    value={values.phone}
                    onChange={handleChange}
                    isValid={touched.phone && !errors.phone}
                    isInvalid={!!errors.phone}
                    required
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.phone}
                  </Form.Control.Feedback>
                </InputGroup>
                <Form.Label className="mt-3">Gender</Form.Label>
                <InputGroup hasValidation>
                  <Form.Select
                    id="gender"
                    defaultValue={values.gender}
                    onChange={handleChange}
                  >
                    <option>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.gender}
                  </Form.Control.Feedback>
                </InputGroup>
                <Form.Label className="mt-3">DOB</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="date"
                    name="DOB"
                    value={values.DOB}
                    onChange={handleChange}
                    isValid={touched.DOB && !errors.DOB}
                    isInvalid={!!errors.DOB}
                    required
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.DOB}
                  </Form.Control.Feedback>
                </InputGroup>
                <Form.Label className="mt-3">Address</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="e.g:Bahir Dar"
                    value={values.address}
                    onChange={handleChange}
                    isValid={touched.address && !errors.address}
                    isInvalid={!!errors.address}
                    required
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.address}
                  </Form.Control.Feedback>
                </InputGroup>
                <Form.Label className="mt-3">Specialization</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    name="specialization"
                    placeholdere="e.g:Oncologist"
                    value={values.specialization}
                    onChange={handleChange}
                    isValid={touched.specialization && !errors.specialization}
                    isInvalid={!!errors.specialization}
                    required
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.specialization}
                  </Form.Control.Feedback>
                </InputGroup>
                <Form.Label className="mt-3">Upload Image</Form.Label>
                <InputGroup>
                  <Form.Control
                    size="md"
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue("file", event.target.files[0]);
                    }}
                    isValid={touched.file && !errors.file}
                    isInvalid={!!errors.file}
                    required
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.file}
                  </Form.Control.Feedback>
                </InputGroup>
                <Form.Group className="px-5 mt-4">
                  <Button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={() => {
                      if (!hasError) {
                        handleClose();
                      }
                    }}
                    disabled={isLoading}
                  >
                    {isLoading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    Submit
                  </Button>
                  <Button
                    className="mx-3"
                    as="input"
                    type="reset"
                    value="Reset"
                    onClick={resetForm}
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
    </>
  );
};

export default AddDoctorModal;

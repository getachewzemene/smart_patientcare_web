import React from "react";
import { Button, Form, InputGroup, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  file: yup.mixed().required(),
});
const AddDoctorForm = () => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
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
        errors,
      }) => (
        <div className="d-flex justify-content-center">
          <div className="mx-auto my-3 border shadow p-3 bg-white rounded col-sm-12 col-lg-6 col-md-6">
            <h1 className="text-center">Add Doctors</h1>
            <Form onSubmit={handleSubmit} className="text-primary">
              <Row className="mb-md-3">
                <Form.Label>first name</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text>
                    {" "}
                    <FontAwesomeIcon icon={faUser} />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                    isInvalid={!!errors.firstName}
                    required
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.firstName}
                  </Form.Control.Feedback>
                </InputGroup>
                <Form.Label className="mt-3">last name</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text>
                    {" "}
                    <FontAwesomeIcon icon={faUser} />
                  </InputGroup.Text>
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
                <Form.Label className="mt-3">email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text>
                    {" "}
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
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

                <Form.Label className="mt-3">password</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text>
                    {" "}
                    <FontAwesomeIcon icon={faLock} />
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    name="password"
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
                <Form.Label className="mt-3">Upload Image</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    size="md"
                    type="file"
                    name="file"
                    value={values.file}
                    onChange={handleChange}
                    isValid={touched.file && !errors.file}
                    isInvalid={!!errors.file}
                    required
                  />
                  <InputGroup.Text>
                    {" "}
                    <FontAwesomeIcon icon={faFile} className="text-primary" />
                  </InputGroup.Text>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.file}
                  </Form.Control.Feedback>
                </InputGroup>
                <Row>
                  <Col md={8} lg={4} sm={12}>
                    <Button className="mt-4" type="submit">
                      Submit Form
                    </Button>
                  </Col>
                  <Col md={8} lg={8} sm={12}>
                    <Button className="mt-4" type="reset" onClick={resetForm}>
                      Reset
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default AddDoctorForm;

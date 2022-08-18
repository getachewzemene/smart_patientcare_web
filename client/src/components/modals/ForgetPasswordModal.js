import React, { useEffect, useState } from "react";

import { Button, Modal, Form, InputGroup, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { clearMessage } from "../../slices/message_slice";
import { forgetPassword } from "../../slices/doctor_slice";
const schema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short")
    .max(100, "Too Long")
    .required("email required"),
});
const ForgetPasswordModal = ({ show, handleClose }) => {
  const [forgetPasswordSucces, setForgetPasswordSuccess] = useState("...");
  const [isSuccess, setIsSuccess] = useState(false);
  const { message } = useSelector((state) => state.message);
  const { isLoading, hasError } = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const handleForgetPassword = (formValue) => {
    const { email } = formValue;
    // console.log(data);
    dispatch(
      forgetPassword({
        email,
      })
    )
      .unwrap()
      .then((response) => {
        if (response.status === 200) {
          setForgetPasswordSuccess("forget password success check your email");
          setIsSuccess(true);
        } else {
          setForgetPasswordSuccess("failed to send email");
          setIsSuccess(false);
        }
        // handleClose();
        console.log(response);
      })
      .catch(() => {});
  };

  return (
    <Modal show={show} backdrop="static" keyboard={false} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Forget Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          validationSchema={schema}
          onSubmit={handleForgetPassword}
          initialValues={{
            email: "",
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
              <Form.Label className="mt-3">Enter email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="someone@gmail.com"
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
                    setForgetPasswordSuccess("");
                    setIsSuccess(false);
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
        {isSuccess && (
          <div className="form-group m-0">
            <div className="alert alert-success" role="alert">
              {forgetPasswordSucces}
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

export default ForgetPasswordModal;

import React, { useEffect, useState } from "react";

import {
  Button,
  Modal,
  Form,
  InputGroup,
  Spinner,
  Row,
  Col,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { clearMessage } from "../../slices/message_slice";
import { changePassword } from "../../slices/doctor_slice";
const schema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(2, "Too Short")
    .max(100, "Too Long")
    .required("old password required"),
  newPassword: Yup.string()
    .min(2, "Too Short")
    .max(100, "Too Long")
    .required("new password required"),
});
const ChangePasswordModal = ({ show, handleClose }) => {
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState("...");
  const [isSuccess, setIsSuccess] = useState(false);
  const { message } = useSelector((state) => state.message);
  const { isLoading, hasError } = useSelector((state) => state.doctor);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const handleChangePassword = (formValue) => {
    const { oldPassword, newPassword } = formValue;
    // console.log(data);
    const id = user.id;
    dispatch(
      changePassword({
        oldPassword,
        newPassword,
        id,
      })
    )
      .unwrap()
      .then((response) => {
        if (response.status === 200) {
          setPasswordChangeSuccess("password changed successfully");
          setIsSuccess(true);
        } else {
          setPasswordChangeSuccess("failed to change password");
          setIsSuccess(false);
        }
        // handleClose();
        // console.log(response);
      })
      .catch(() => {});
  };

  return (
    <Modal show={show} backdrop="static" keyboard={false} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Change Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          validationSchema={schema}
          onSubmit={handleChangePassword}
          initialValues={{
            oldPassword: "",
            newPassword: "",
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
              <Row className="m-0 p-0">
                <Col md={6}>
                  <Form.Label className="mt-3">Old Password</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="password"
                      name="oldPassword"
                      placeholder="****************"
                      value={values.oldPassword}
                      onChange={handleChange}
                      isValid={touched.oldPassword && !errors.oldPassword}
                      isInvalid={!!errors.oldPassword}
                      required
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.oldPassword}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>
                <Col>
                  {" "}
                  <Form.Label className="mt-3">New Password</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="password"
                      name="newPassword"
                      placeholder="****************"
                      value={values.newPassword}
                      onChange={handleChange}
                      isValid={touched.newPassword && !errors.newPassword}
                      isInvalid={!!errors.newPassword}
                      required
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.newPassword}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>
              </Row>
              <Form.Group className="mx-5 px-5 mt-4">
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
                    setPasswordChangeSuccess("");
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
              {passwordChangeSuccess}
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

export default ChangePasswordModal;

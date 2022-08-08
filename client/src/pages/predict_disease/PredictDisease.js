import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { useSelector, useDispatch } from "react-redux";
import {
  Row,
  Col,
  Navbar,
  Container,
  Spinner,
  Form,
  Button,
} from "react-bootstrap";
import { clearMessage } from "../../slices/message_slice";
import { symptoms } from "../../common/symptoms";
import { getPridictedDisease } from "../../slices/doctor_slice";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PredictDisease = () => {
  const [selected, setSelected] = useState([]);
  const { message } = useSelector((state) => state.message);
  const { isLoading, hasError, diseaseName } = useSelector(
    (state) => state.doctor
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  let symptomValue = [];
  const handleSymptomSubmit = (e) => {
    e.preventDefault();
    for (var i = 0; i < selected.length; i++) {
      symptomValue.push(selected[i].value);
    }
    dispatch(getPridictedDisease({ symptomValue }))
      .unwrap()
      .then((response) => {})
      .catch(() => {});
  };
  return (
    <>
      <Navbar bg="dark" className="mb-3">
        <Navbar.Brand href="#">
          <h1 className="h1 text-green mx-3">
            Smart<span className="h2 text-yellow">Patient</span>
            <span className="h3 text-red">Care</span>
          </h1>
        </Navbar.Brand>
      </Navbar>
      <Container className="m-2">
        <h1>Disease Prediction</h1>
        <Row className="container m-2">
          <Col lg={6} md={12} sm={12} className="px-5">
            <Form onSubmit={handleSymptomSubmit}>
              <MultiSelect
                options={symptoms}
                value={selected}
                onChange={setSelected}
                labelledBy="Select symptoms"
              />
              <Button type="submit" className="m-5">
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={6} sm={12} md={12} className="pl-5 py-4">
            {!isLoading && !hasError && (
              <h1>Predicted disease displayed here</h1>
            )}
            {isLoading && <Spinner>loading</Spinner>}
            {diseaseName.predictedDisease === undefined && <h4>waiting....</h4>}
            {!isLoading &&
              !hasError &&
              diseaseName.predictedDisease !== undefined && (
                <h3>{"Predicted Disease:" + diseaseName.predictedDisease}</h3>
              )}
            {hasError && <p>{message}</p>}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PredictDisease;

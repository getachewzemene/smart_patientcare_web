import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const [selected, setSelected] = useState([]);
  const [isPrediction, setIsPrediction] = useState(false);
  const { message } = useSelector((state) => state.message);
  const { isLoading, hasError, diseaseData } = useSelector(
    (state) => state.doctor
  );
  let symptomValue = [];
  const handleSymptomSubmit = (e) => {
    e.preventDefault();
    for (var i = 0; i < selected.length; i++) {
      symptomValue.push(selected[i].value);
    }
    dispatch(getPridictedDisease({ symptomValue }))
      .unwrap()
      .then((response) => {
        setIsPrediction(true);
        // console.log("from dispacher" + response.diseaseName);
      })
      .catch(() => {});
  };
  return (
    <>
      <Navbar style={{ backgroundColor: "#275091" }} className="mb-3">
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
      <Container className="m-2">
        <h1>Disease Prediction</h1>
        <Row className="container mx-2 my-4">
          <h4>Select symptoms you feel</h4>
          <Col lg={6} md={12} sm={12} className="px-5">
            <Form onSubmit={handleSymptomSubmit}>
              <MultiSelect
                options={symptoms}
                value={selected}
                onChange={setSelected}
                labelledBy="Select symptoms"
              />
              <div className="text-center">
                <Button type="submit" className="mx-0 my-4 text-center">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
          {isPrediction && (
            <Col lg={6} sm={12} md={12} className="pl-5 py-4">
              {!isLoading && !hasError && <h1>Predicted disease</h1>}
              {isLoading && <Spinner>loading</Spinner>}
              {diseaseData === null && <h4>waiting....</h4>}
              {!isLoading && !hasError && diseaseData !== null && (
                <>
                  <p className="mx-2 h3 my-4">
                    Disease Name: {diseaseData.diseaseName}
                  </p>
                  <p className="mx-2 h3 my-4">
                    Disease Category: {diseaseData.category}
                  </p>
                  <p className="mx-2 h4 my-4">
                    Treatment: {diseaseData.precuation}
                  </p>
                  <p className="mx-2 h4 my-4">Symptoms </p>
                  {diseaseData.symptom.map((symptom) => (
                    <li key={symptom.id} className="mx-2 h4 my-4">
                      {symptom.symptomName}
                    </li>
                  ))}
                </>
              )}
              {hasError && <p>{message}</p>}
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default PredictDisease;

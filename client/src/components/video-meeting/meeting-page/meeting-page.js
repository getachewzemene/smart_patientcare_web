import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import shortid from "shortid";
import "./meeting.scss";
import NavBar from "../../navbar/navbar";
import Footer from "../../footer/footer";
const MeetingPage = () => {
  const navigate = useNavigate();
  const startMeeting = () => {
    const uuid = shortid.generate();
    navigate(`/meeting/${uuid}#init`);
  };
  return (
    <>
      <NavBar />
      <Row className="row">
        <Col className="m-auto" xs={12} md={6} lg={6}>
          <h3>Premium video meeting</h3>
          <p>Genarate new link or enter link url and meet people</p>
          <Form className="meeting-form">
            <Form.Group className="form-group">
              <Button variant="success" onClick={startMeeting}>
                <FontAwesomeIcon icon={faVideo} />
                New Meeting
              </Button>
              <FontAwesomeIcon icon={faKeyboard} />
              <Form.Control
                type="text"
                placeholder="enter code or link"
                name="input-link"
                aria-autocomplete="inline"
                className="input-field"
              />
              <Button variant="light">Join</Button>
            </Form.Group>
          </Form>
        </Col>
        <Col className="m-auto" xs={12} md={6} lg={6}>
          <img
            src="assets/logo192.png"
            alt="meeting demo"
            style={{ width: "20rem", height: "20rem" }}
          />
        </Col>
      </Row>
      <Footer />
    </>
  );
};
export default MeetingPage;

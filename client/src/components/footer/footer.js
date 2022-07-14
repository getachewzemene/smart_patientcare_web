import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import "./footer.scss";
const footer = () => {
  return (
    <Row className="bg-dark text-white footer m-auto">
      <Col xs={12} md={2}>
        <h3>Services</h3>
        <ul>
          <li>
            <a href="#video">Video Consultation</a>
          </li>
          <li>
            <a href="#appointment">Online Appointment</a>
          </li>
          <li>
            <a href="#disease">Disease Prediction</a>
          </li>
        </ul>
      </Col>
      <Col xs={12} md={2}>
        <h3>About</h3>
        <ul>
          <li>
            <a href="#company">Company</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#careers">Support</a>
          </li>
        </ul>
      </Col>
      <Col xs={12} md={4}>
        <h3>Smart Patientcare and Assistance</h3>
        <p>
          Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac
          sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus.
          Aliquam in arcu eget velit pulvinar dictum vel in justo.
        </p>
      </Col>
      <Col xs={12} md={4} className="p-auto">
        <h3 className="">Contact Us</h3>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <p>Phone</p>
            <p>Gmail</p>
            <p>Telegram</p>
            <p>Facebook</p>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <p>Youtube</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Instagram</p>
          </Col>
        </Row>
      </Col>
      <p className="copyright text-center">SPCAS © 2022</p>
    </Row>
  );
};
export default footer;

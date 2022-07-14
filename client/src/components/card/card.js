import { Card, Button, Col } from "react-bootstrap";
import "./card.scss";
const card = (props) => {
  return props.args.map((value, k) => (
    <Col key={k} className="column col-sm-12 col-md-3 col-lg-3">
      <Card className="m-2 customCard shadow-lg">
        <Card.Img
          variant="top"
          // src="../../assets/logo192.png"
          alt="header pic"
          className="vh-10 vw-10"
        />
        <Card.Body>
          <Card.Title>{value.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  ));
};
export default card;

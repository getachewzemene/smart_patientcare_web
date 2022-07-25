import { Card, Button, Col } from "react-bootstrap";
import "./card.scss";
const card = (props) => {
  return props.args.map((value, k) => (
    <Col key={k} xxl={2} lg={3} md={4} sm={12}>
      <Card className="customCard shadow-lg">
        <Card.Img
          variant="top"
          src="../../assets/logo192.png"
          alt="header pic"
          // width={200}
          // height={200}
        />
        <Card.Body>
          <Card.Title>{value.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" className="view-button">
            View Detail
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));
};
export default card;

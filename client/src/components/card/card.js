import { Card, Button, Col } from "react-bootstrap";
import "./card.scss";
const card = (props) => {
  return props.args.map((value, k) => (
    <Col key={k} lg={3} md={4} sm={12}>
      <Card className="customCard shadow-lg">
        <Card.Img
          variant="top"
          src={value.image}
          alt="header pic"
          width={200}
          height={200}
        />
        <Card.Body>
          <Card.Title>{value.name}</Card.Title>
          <Card.Text>{value.description}</Card.Text>
          <Button variant="primary" className="view-button">
            View Detail
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));
};
export default card;

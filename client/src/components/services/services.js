import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Button } from "react-bootstrap";

export default function services() {
  return (
    <Container className="container-fluid row">
      <Container className="col-6 col-md-2 col-sm-1">
        <Card>
          <Button>View Detail</Button>
        </Card>
      </Container>
    </Container>
  );
}

import { Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.scss";
const login = () => {
  return (
    <>
      <Card className="login-card mx-auto mt-2 mb-2">
        <Card.Header className="text-center">Login</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                placeholder="someone@mail.com"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="inputPassword5">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="***************"
                id="inputPassword5"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <p className="px-4">
              have no account yet ?{" "}
              <Button href="/signup" variant="link">
                Register
              </Button>
            </p>
            <Form.Group className="px-5">
              <Button as="input" type="submit" value="Login" />{" "}
              <Button className="mx-3" as="input" type="reset" value="Reset" />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
export default login;

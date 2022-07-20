import { Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signup.scss";
const signup = () => {
  return (
    <>
      <Card className="signup-card mx-auto mt-5 mb-2">
        <Card.Header className="text-center">Signup</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="fname">First Name</Form.Label>
              <Form.Control
                type="text"
                id="fname"
                aria-describedby="firstname"
              />
              <Form.Text id="firstname" muted>
                Your name must valid name, contain letters and must not contain
                spaces, special characters, or emoji.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="lname">Last Name</Form.Label>
              <Form.Control
                type="text"
                id="lname"
                aria-describedby="lastname"
              />
              <Form.Text id="lastname" muted>
                Your name must valid name, contain letters and must not contain
                spaces, special characters, or emoji.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                aria-describedby="emailHelpBlock"
              />
              <Form.Text id="emailHelpBlock" muted>
                Your email must valid email like abebe@gmail.com, contain
                letters and numbers, and must not contain spaces, special
                characters, or emoji.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="inputPassword5">Password</Form.Label>
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <p className="px-4">
              have already an account{" "}
              <Button href="/login" variant="link">
                Login
              </Button>
            </p>
            <Form.Group className="px-5">
              <Button as="input" type="submit" value="Register" />{" "}
              <Button className="mx-3" as="input" type="reset" value="Reset" />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
export default signup;

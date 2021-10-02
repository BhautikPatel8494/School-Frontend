import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router";
import { registerNew } from "../../utils/GlobalApi";

const Register = () => {
  const { push } = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileHandler, setProfileHandler] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("firstname", firstName);
    data.append("lastname", lastName);
    data.append("email", email);
    data.append("password", password);
    data.append("profile", profileHandler);

    try {
      const response = await registerNew(
        { url: 'auth/register'},
        data
      );

      if (response.status === 200) {
        toast(response.data.message);
        setTimeout(function () {
          push("/login");
        }, 5000);
      }
    } 
    catch (error) {
      console.log(`error`, error);
      toast(" Register Not Successfully ");
    }
  };

  return (
    <>
      <ToastContainer />
      <Container className="mt-5 bg-dark text-light p-5 rounded">
        <h1 className="text-center">Register</h1>
        <Row>
          <Col>
            <Form onSubmit={(e) => formSubmitHandler(e)}>
              <Row>
              <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter First Name"
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter Last Name"
                />
              </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>choose file</Form.Label>
                <Form.Control
                  name="profile"
                  onChange={(e) => setProfileHandler(e.target.files[0])}
                  type="file"
                />
              </Form.Group>
              <p>
                {" "}
                Already Have An Account? <Link to="/login"> Login </Link>{" "}
              </p>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;

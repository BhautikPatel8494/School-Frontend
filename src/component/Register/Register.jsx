import axios from "axios";
import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router";

const Register = () => {
  const { push } = useHistory();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileHandler, setProfileHandler] = useState("");
  const [role, setRole] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("username", userName);
    data.append("email", email);
    data.append("password", password);
    data.append("profile", profileHandler);
    data.append("role", role);

    try {
      const response = await axios.post(
        "http://192.168.29.6:8000/auth/register",
        data
      );
      if (response.status === 200) {
        toast(response.data.message);
        setTimeout(function () {
          push("/login");
        }, 5000);
      }
      console.log(`response`, response)
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
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter User"
                />
              </Form.Group>

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

              <Form.Group
                className="mb-3 mt-3"
                onChange={(e) => setRole(e.target.value)}
                controlId="formBasicEmail"
              >
                <Form.Label>Role</Form.Label>
                <Form.Select>
                  <option>select Role</option>
                  <option value="User">Student</option>
                  <option value="Teacher">Teacher</option>
                </Form.Select>
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

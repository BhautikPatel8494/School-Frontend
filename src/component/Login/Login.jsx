import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router";
import { loginStudent, loginTeacher } from "../../utils/GlobalApi";

const Login = () => {
  const { push } = useHistory();
  const [getRoleSelect, setGetRoleSelect] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await loginTeacher(
        { url: "auth/login-teacher" },
        {
          email,
          password,
        }
      );
      if (response.data.statusCode === 200) {
        toast(response.data.message);
        sessionStorage.setItem("token", response.data.token);
        setTimeout(function () {
          push("/");
        }, 5000);
      }
    } catch (error) {
      console.log(`error`, error);
      toast("Invalid login credentials");
    }
  };

  const userLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await loginStudent(
        { url: "auth/login-user" },
        {
          loginName: userName,
          password: userPassword,
        }
      );
      if (response.data.statusCode === 200) {
        toast(response.data.message);
        sessionStorage.setItem("token", response.data.token);
        setTimeout(function () {
          push("/");
        }, 5000);
      }
    } catch (error) {
      console.log(`error`, error);
      toast("Invalid login credentials");
    }
  };

  return (
    <>
      <ToastContainer />

      <Container className="mt-5 bg-dark text-light p-5 rounded">
        <h1 className="text-center">Login</h1>
        <Row>
          <Col>
            <div style={{ float: "right" }}>
              <Form.Group
                className="mb-3 mt-3"
                onChange={(e) => setGetRoleSelect(e.target.value)}
                controlId="formBasicEmail"
              >
                <Form.Select>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                </Form.Select>
              </Form.Group>
            </div>

            {getRoleSelect === "Teacher" ? (
              <>
                <Form onSubmit={(e) => formSubmitHandler(e)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h3 className="my-3"> Teacher's Login</h3>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <p>
                    {" "}
                    Don't Have An Account? <Link to="/register">
                      {" "}
                      Sign-up{" "}
                    </Link>{" "}
                  </p>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </>
            ) : (
              <>
                <Form onSubmit={(e) => userLoginHandler(e)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h3 className="my-3"> Student's Login</h3>
                    <Form.Label> UserName </Form.Label>
                    <Form.Control
                      onChange={(e) => setUserName(e.target.value)}
                      type="text"
                      placeholder="UserName"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      onChange={(e) => setUserPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <p>
                    {" "}
                    Don't Have An Account? <Link to="/register">
                      {" "}
                      Sign-up{" "}
                    </Link>{" "}
                  </p>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;

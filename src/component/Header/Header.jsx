import { Container, Button, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import "./Header.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { tokenLogin } from "../constant";

const Header = () => {
  const { push } = useHistory();
  const [getSeprateData, setGetSeprateData] = useState("");

  const logOutHandler = (e) => {
    sessionStorage.removeItem("token");
    push("/login");
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const seprateUserInfo = await axios.get(
        "http://192.168.29.6:8000/auth/token",
        {
          headers: { Authorization: `${tokenLogin}` },
        }
      );
      setGetSeprateData(seprateUserInfo.data.data);
    };
    getUserInfo();
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link
              className="text-light"
              style={{ textDecoration: "none" }}
              to="/"
            >
              School Daze{" "}
            </Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  to="/about"
                  style={{
                    textDecoration: "none",
                    color: "rgba(255,255,255,.55)",
                  }}
                >
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>Admissions</Nav.Link>
              {getSeprateData.role === "User" ? (
                <Nav.Link>
                  <Link
                    to="/exam"
                    style={{
                      textDecoration: "none",
                      color: "rgba(255,255,255,.55)",
                    }}
                  >
                    Give exam
                  </Link>
                </Nav.Link>
              ) : (
                <Nav.Link>
                  <Link
                    to="/mcq"
                    style={{
                      textDecoration: "none",
                      color: "rgba(255,255,255,.55)",
                    }}
                  >
                    Add Question
                  </Link>{" "}
                </Nav.Link>
              )}
              {getSeprateData.role === "User" ? (
                <Nav.Link>
                  <Link
                    to="/history"
                    style={{
                      textDecoration: "none",
                      color: "rgba(255,255,255,.55)",
                    }}
                  >
                    History
                  </Link>{" "}
                </Nav.Link>
              ) : (
                <Nav.Link>
                  <Link
                    to="/studenthistory"
                    style={{
                      textDecoration: "none",
                      color: "rgba(255,255,255,.55)",
                    }}
                  >
                    Student History
                  </Link>{" "}
                </Nav.Link>
              )}
            </Nav>
            <Nav>
              <div className="userNameDisplay">
                <p> {getSeprateData.username} </p>
              </div>
              <div className="userDetail">
                {" "}
                {getSeprateData &&
                  getSeprateData.username.charAt(0).toUpperCase()}{" "}
              </div>
              <Button onClick={(e) => logOutHandler(e)}> Log Out </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

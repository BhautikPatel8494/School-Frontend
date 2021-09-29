import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const ExamDone = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <div className="bg-dark p-5 m-5 text-light rounded">
              <p className="text-center mt-3">
                {" "}
                Your Exam has been completed.{" "}
              </p>
              <p className="text-center mt-3">
                <Link to="/">back To Home Page.</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExamDone;

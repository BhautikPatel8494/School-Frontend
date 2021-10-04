import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { addSubjectName } from "../../utils/GlobalApi";

const AddExam = () => {
  const [subjectName, setSubjectName] = useState("");

  const submitHandlerForm = async (e) => {
    e.preventDefault();

    await addSubjectName(
      {
        url: "exam/addExam",
      },
      { name: subjectName }
    );
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Form
              onSubmit={(e) => submitHandlerForm(e)}
              className="m-5 bg-dark text-light p-5 rounded"
            >
              <h3 className="mb-3"> Add Subject : </h3>
              <Form.Group className="mb-3">
                <Form.Label> Subject Name </Form.Label>
                <Form.Control
                  onChange={(e) => setSubjectName(e.target.value)}
                  type="text"
                  placeholder="Subject Name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Subject Code</Form.Label>
                <Form.Control type="text" placeholder="Subject Code" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default AddExam;

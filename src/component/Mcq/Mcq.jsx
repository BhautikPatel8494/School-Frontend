import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import {
  deleteMcqQuestion,
  mcqResponse,
  questionAdd,
  getExamSubject,
} from "../../utils/GlobalApi";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Mcq.css";

const Mcq = () => {
  const [getMcq, setGetMcq] = useState([]);
  const [subName, setSubName] = useState([]);

  const [sendExamName, setSendExamName] = useState("");
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const getApiMcqData = async () => {
      const response = await mcqResponse({
        url: "exam/getQuestion",
      });
      setGetMcq(response.data.data);
    };
    getApiMcqData();

    const getExam = async () => {
      const getSubExam = await getExamSubject({
        url: "exam/getExam",
      });
      setSubName(getSubExam.data.data);
    };
    getExam();
  }, []);

  const dataAddMcq = {
    title: question,
    choiceA: optionA,
    choiceB: optionB,
    choiceC: optionC,
    choiceD: optionD,
    correct: answer,
    examId: sendExamName,
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const addData = await questionAdd(
      { url: "exam/addQuestion" },
      dataAddMcq,
      {}
    );

    const dataAdded = addData.data.data;
    setGetMcq([...getMcq, dataAdded]);
    if (addData.status === 200) {
      toast(addData.data.message);
    }

    setQuestion("");
    setAnswer("");
    setOptionA("");
    setOptionB("");
    setOptionC("");
    setOptionD("");
  };

  const deleteMcqHanlder = async (id) => {
    const deleteMcq = await deleteMcqQuestion({
      url: `exam/delete/${id}`,
    });

    const getRefershedData = getMcq.filter(
      (item) => item._id !== deleteMcq.data.data?._id
    );
    setGetMcq(getRefershedData);
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
      <Header />

      <Container fluid className="my-5">
        <Row>
          <Col xl="8">
            <h2 className="text-center my-2"> Total Present Mcq </h2>
            <div className="flexbleDivMcq">
              {getMcq &&
                getMcq.map((item, i) => (
                  <div className="questionDiv" key={i}>
                    <div className="titleDeleteFlex">
                      <p className="flexTitle">
                        {" "}
                        {i + 1}. {item.title}
                      </p>
                      <p
                        className="deleteFlex"
                        onClick={(id) => deleteMcqHanlder(item._id)}
                      >
                        <i className="fas fa-trash deleteLogo"></i>
                      </p>
                    </div>
                    <div>
                      <p
                        style={
                          item.choiceA === item.correct
                            ? { backgroundColor: "green", color: "white" }
                            : null
                        }
                      >
                        {" "}
                        A : {item.choiceA}{" "}
                      </p>
                      <p
                        style={
                          item.choiceB === item.correct
                            ? { backgroundColor: "green", color: "white" }
                            : null
                        }
                      >
                        {" "}
                        B : {item.choiceB}{" "}
                      </p>
                      <p
                        style={
                          item.choiceC === item.correct
                            ? { backgroundColor: "green", color: "white" }
                            : null
                        }
                      >
                        {" "}
                        C : {item.choiceC}{" "}
                      </p>
                      <p
                        style={
                          item.choiceD === item.correct
                            ? { backgroundColor: "green", color: "white" }
                            : null
                        }
                      >
                        {" "}
                        D: {item.choiceD}{" "}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </Col>
          <Col className="addMcqForm" xl="4">
            <Form onSubmit={(e) => formSubmitHandler(e)} autoComplete="off">
              <h2 className="text-center my-2"> Add Mcq </h2>

              <Form.Group
                onChange={(e) => setSendExamName(e.target.value)}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Select Subject</Form.Label>
                <Form.Select>
                  <option> select subject</option>
                  {subName &&
                    subName.map((item, i) => (
                      <option value={item._id}>{item.name}</option>
                    ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Question</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setQuestion(e.target.value)}
                  value={question}
                  type="text"
                  placeholder="Question"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>option A</Form.Label>
                <Form.Control
                  required
                  value={optionA}
                  onChange={(e) => setOptionA(e.target.value)}
                  type="text"
                  placeholder="option A"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>option B</Form.Label>
                <Form.Control
                  required
                  value={optionB}
                  onChange={(e) => setOptionB(e.target.value)}
                  type="text"
                  placeholder="option B"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>option C</Form.Label>
                <Form.Control
                  required
                  value={optionC}
                  onChange={(e) => setOptionC(e.target.value)}
                  type="text"
                  placeholder="option C"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>option D</Form.Label>
                <Form.Control
                  required
                  value={optionD}
                  onChange={(e) => setOptionD(e.target.value)}
                  type="text"
                  placeholder="option D"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correct Answer</Form.Label>
                <Form.Control
                  required
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  type="text"
                  placeholder="Correct Answer"
                />
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

export default Mcq;

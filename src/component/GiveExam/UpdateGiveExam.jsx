import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Col, Container, Form, Row, Button, Table } from "react-bootstrap";
import Header from "../Header/Header";

import "./GiveExam.css";
import {
  getExamQuestion,
  getExamSubject,
  giveExam,
} from "../../utils/GlobalApi";
import moment from "moment";

export default function UpdateGiveExam() {
  const { push } = useHistory();

  const [subName, setSubName] = useState("");

  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setSecondDays] = useState("00");

  const [getRandom, setGetRandom] = useState([]);
  const [getNumberIndex, setGetNumberIndex] = useState(0);
  const [resultData, setResultData] = useState([]);
  const [exam, setExam] = useState(false);

  const [selectAnswer, setSelectAnswer] = useState("");
  const [idForSend, setIdForSend] = useState("");

  useEffect(() => {
    const getExam = async () => {
      const getSubExam = await getExamSubject({
        url: "exam/getExam",
      });
      setSubName(getSubExam.data.data);
    };
    getExam();
  }, []);

  const startExamHandler = async (examId) => {
    setExam(true);
    setIdForSend(examId);
    const response = await getExamQuestion({
      url: `exam/examQuestion/${examId}`,
    });
    setGetRandom(response.data.data);
    startTimer();
  };

  let objectResult = {};
  const clickHanlderNext = async (id, isSubmit) => {
    objectResult = {
      questionId: id,
      submitedAnswer: selectAnswer,
    };
    setResultData([...resultData, objectResult]);

    if (isSubmit) {
      await giveExam(
        {
          url: "exam/submitExam",
        },
        { answers: [...resultData, objectResult], examId: idForSend }
      );
      push("/history");
    }

    if (getNumberIndex <= 8) {
      setGetNumberIndex(getNumberIndex + 1);
    }
  };

  const getMcqByIndex = getRandom.find(
    (item) => item.id === getRandom[getNumberIndex].id
  );

  const startTimer = async () => {
    let minuetoAdd = 20;
    const current = new Date();
    const countdownDate = new Date(current.getTime() + minuetoAdd * 60000);
    setInterval(async () => {
      const now = new Date();
      const distance = countdownDate - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        push("/history");
      } else {
        setTimerMinutes(minutes);
        setSecondDays(seconds);
      }
    }, 1000);
  };
  return (
    <>
      <Header />

      <Container className="mb-3 mt-3">
        {!exam ? (
          <>
            <h3> Subject List </h3>
            <p> Press The Start Button & Start The exam: </p>
            <Row>
              <Col>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Sr. no</th>
                      <th>Subject Name</th>
                      <th> Date </th>
                      <th>Start</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subName &&
                      subName.map((item, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{item.name}</td>
                          <td>
                            {moment(item.createdAt).format(
                              "MMMM Do YYYY, h:mm a"
                            )}
                          </td>
                          <td>
                            {" "}
                            <Button
                              variant="info"
                              onClick={() => startExamHandler(item._id)}
                              className="w-100"
                              size="sm"
                            >
                              Start
                            </Button>{" "}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Col xl="5">
                <div className="text-center">
                  <p className="titleBox">
                    {" "}
                    Question: {getNumberIndex + 1} / 10{" "}
                  </p>
                </div>
                <div className="mainConcept">
                  <p className="p-3">{getMcqByIndex && getMcqByIndex.title}</p>
                </div>
              </Col>
              <Col xl="5">
                <div className="text-center">
                  <p className="titleBox"> Opation </p>
                </div>
                <div className="mainConcept pt-2">
                  <div>
                    <p className="p-3 bg-light mx-2 mt-2">
                      <Form.Check
                        name="option"
                        type="radio"
                        value={getMcqByIndex && getMcqByIndex.choiceA}
                        onChange={(e) => setSelectAnswer(e.target.value)}
                        label={getMcqByIndex && getMcqByIndex.choiceA}
                      />
                    </p>
                    <p className="p-3 bg-light mx-2 mt-2">
                      <Form.Check
                        name="option"
                        type="radio"
                        label={getMcqByIndex && getMcqByIndex.choiceB}
                        value={getMcqByIndex && getMcqByIndex.choiceB}
                        onChange={(e) => setSelectAnswer(e.target.value)}
                      />
                    </p>
                    <p className="p-3 bg-light mx-2 mt-2">
                      <Form.Check
                        name="option"
                        type="radio"
                        label={getMcqByIndex && getMcqByIndex.choiceC}
                        value={getMcqByIndex && getMcqByIndex.choiceC}
                        onChange={(e) => setSelectAnswer(e.target.value)}
                      />
                    </p>
                    <p className="p-3 bg-light mx-2 mt-2">
                      <Form.Check
                        name="option"
                        type="radio"
                        label={getMcqByIndex && getMcqByIndex.choiceD}
                        value={getMcqByIndex && getMcqByIndex.choiceD}
                        onChange={(e) => setSelectAnswer(e.target.value)}
                      />
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl="2" className="timerColumn">
                <div className="timer-wrapper">
                  <div className="timer">
                    <div className="text">Remaining</div>
                    <div className="value">
                      {timerMinutes} : {timerSeconds}
                      <span style={{ fontSize: "20px" }}>s</span>
                    </div>
                    <div className="text">Minutes</div>
                  </div>
                </div>
              </Col>
            </Row>
            {getNumberIndex === 9 ? (
              <Button
                onClick={() => clickHanlderNext(getMcqByIndex.id, true)}
                className="btn btn-info w-100 mt-3"
              >
                {" "}
                Submit{" "}
              </Button>
            ) : (
              <Button
                onClick={() => clickHanlderNext(getMcqByIndex.id, false)}
                className="btn btn-success w-100 mt-3"
              >
                Save & Next{" "}
              </Button>
            )}
          </>
        )}
      </Container>
    </>
  );
}

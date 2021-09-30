import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import Header from "../Header/Header";
import { tokenLogin } from "../constant";

import "./GiveExam.css";
import { getExamQuestion } from "../../utils/GlobalApi";

export default function GiveExam() {
  const { push } = useHistory();

  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setSecondDays] = useState("00");

  const [getRandom, setGetRandom] = useState([]);
  const [getNumberIndex, setGetNumberIndex] = useState(0);
  const [resultData, setResultData] = useState([]);
  const [exam, setExam] = useState(false);

  const [selectAnswer, setSelectAnswer] = useState("");

  const startExamHandler = async () => {
    setExam(true);
    const response = await getExamQuestion(
      {
        url: 'exam/examQuestion'
      }
    );
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
      await axios.post(
        "http://192.168.29.6:8000/exam/submitExam",
        {
          data: { answers: [...resultData, objectResult] },
        },
        {
          headers: { Authorization: `Bearer ${tokenLogin}` },
        }
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

  const startTimer = async() => {
    let minuetoAdd = 15;
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

      <Container className="mb-3">
        {!exam ? (
          <div className="bg-dark p-5 m-5 text-light rounded">
            <Button
              onClick={startExamHandler}
              className="btn btn-info mt-5 w-100"
            >
              {" "}
              Start Exam{" "}
            </Button>
            <p className="text-center mt-3">
              {" "}
              Press The start button and start the exam & exam time will be 15
              minute.{" "}
            </p>
          </div>
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

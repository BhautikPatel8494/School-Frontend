import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { tokenLogin } from "../constant";
import Header from "../Header/Header";

const History = () => {
  const [historyData, setHistoryData] = useState({});

  useEffect(() => {
    const HistoryDataUser = async () => {
      const response = await axios.get(
        "http://192.168.29.6:8000/exam/examHistory",
        {
          headers: { Authorization: `Bearer ${tokenLogin}` },
        }
      );
      setHistoryData(response.data.data);
    };
    HistoryDataUser();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
          <h3 className="text-center my-5"> Exams Result </h3>
            <Table bordered className="mt-5" variant="dark">
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Exam Date</th>
                  <th>Marks</th>
                  <th>Out Of</th>
                  <th>Percentage</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {
                  historyData.pastexam && historyData.pastexam.map((exam, i) => (
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{moment(exam.examDate).format('MMMM Do YYYY, h:mm a')}</td>
                      <td>{exam.totalMarks}</td>
                      <td>10</td>
                      <td>{ exam.totalMarks/10 * 100}%</td>
                      <td style={ exam.totalMarks/10 * 100 <= 35 ? {backgroundColor:"firebrick"} : {backgroundColor:"green"}}>{ exam.totalMarks/10 * 100 <= 35 ? "Fail" : "Pass"}</td>
                    </tr>
                  ))
                  }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default History;

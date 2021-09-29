import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { tokenLogin } from "../constant";
import Header from "../Header/Header";
import ModalSeprateUser from "./ModalSeprateUser";

const StudentHistory = () => {
  const [modalShow, setModalShow] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const [modalId,setModalId] = useState("");

  useEffect(() => {
    const getStudentHistoryData = async () => {
      const historyResponse = await axios.get(
        "http://192.168.29.6:8000/exam/studentExamHistory",
        {
          headers: { Authorization: `Bearer ${tokenLogin}` },
        }
      );
      setStudentData(historyResponse.data.data);
    };
    getStudentHistoryData();
  }, []);

  const rowClickHandler = (id) => {
    setModalId(id)
    setModalShow(true)
  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Table className="mt-3" striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>User Name</th>
                  <th>join Date</th>
                  <th>Past Exam</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  studentData && studentData.map((item, i) => (
                <tr onClick={()=> rowClickHandler(item._id)} key={i}>
                  <td>{i+1}</td>
                  <td>{item.username}</td>
                  <td>{moment(item.createdAt).format('MMMM Do YYYY, h:mm a')}</td>
                  <td>{item.pastexam.length} Exam Found</td>
                  <td>{item.status}</td>
                </tr>                
                  ))
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <ModalSeprateUser show={modalShow}
        onHide={() => setModalShow(false)}
        studentData={studentData}
        modalId={modalId}
        />
    </>
  );
};

export default StudentHistory;

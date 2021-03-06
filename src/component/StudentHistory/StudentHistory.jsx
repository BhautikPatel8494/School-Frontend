import { useEffect, useState } from "react";
import moment from "moment";
import { Col, Container, Row, Table } from "react-bootstrap";
import Header from "../Header/Header";
import ModalSeprateUser from "./ModalSeprateUser";
import { historyResponse } from "../../utils/GlobalApi";

const StudentHistory = () => {
  const [modalShow, setModalShow] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const [modalId, setModalId] = useState("");

  useEffect(() => {
    const getStudentHistoryData = async () => {
      const response = await historyResponse({
        url: "exam/studentExamHistory",
      });
      setStudentData(response.data.data);
    };
    getStudentHistoryData();
  }, []);

  const rowClickHandler = (id) => {
    setModalId(id);
    setModalShow(true);
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <h3 className="text-center mt-3"> Student Hisotry And Result </h3>
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
                {studentData &&
                  studentData.map((item, i) => (
                    <tr onClick={() => rowClickHandler(item._id)} key={i}>
                      <td>{i + 1}</td>
                      <td>
                        {item.firstname} {item.lastname}
                      </td>
                      <td>
                        {moment(item.createAt).format("MMMM Do YYYY, h:mm a")}
                      </td>
                      <td>{item.pastexam.length} Exam Found</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <ModalSeprateUser
        show={modalShow}
        onHide={() => setModalShow(false)}
        studentData={studentData}
        modalId={modalId}
      />
    </>
  );
};

export default StudentHistory;

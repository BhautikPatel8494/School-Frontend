import moment from "moment";
import React from "react";
import { Modal, Button, Container, Row, Col, Table } from "react-bootstrap";

const ModalSeprateUser = (props) => {
  const studentDataGet = props.studentData;
  const singleId = props.modalId;

  const seprateDataOfStudent = studentDataGet.find(
    (item) => item._id === singleId
  );

  return (
    <>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {seprateDataOfStudent && seprateDataOfStudent.firstname} {seprateDataOfStudent && seprateDataOfStudent.lastname}'s History
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {seprateDataOfStudent &&
          seprateDataOfStudent.pastexam &&
          seprateDataOfStudent.pastexam.length ? (
            <Container fluid>
              <Row>
                <Col>
                  <Table bordered variant="dark">
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
                      {seprateDataOfStudent &&
                        seprateDataOfStudent.pastexam &&
                        seprateDataOfStudent.pastexam.map((exam, i) => (
                          <React.Fragment key={i}>
                            <tr>
                              <td>{i + 1}</td>
                              <td>
                                {moment(exam.examDate).format(
                                  "MMMM Do YYYY, h:mm a"
                                )}
                              </td>
                              <td>{exam.totalMarks}</td>
                              <td>10</td>
                              <td>{(exam.totalMarks / 10) * 100}%</td>
                              <td
                                style={
                                  (exam.totalMarks / 10) * 100 <= 35
                                    ? { backgroundColor: "firebrick" }
                                    : { backgroundColor: "green" }
                                }
                              >
                                {(exam.totalMarks / 10) * 100 <= 35
                                  ? "Fail"
                                  : "Pass"}
                              </td>
                            </tr>
                          </React.Fragment>
                        ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          ) : (
            <Table bordered variant="dark">
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
                    <tr>
                        <th className="text-center" colSpan="6">No Exam Found.</th>
                      </tr>
                    </tbody>
                  </Table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default ModalSeprateUser;

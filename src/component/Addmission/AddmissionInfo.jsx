import moment from "moment";
import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { singleUserInfo } from "../../utils/GlobalApi";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const AddmissionInfo = () => {
  const [infoUser, setInfoUser] = useState();

  useEffect(() => {
    const userInfoAdmission = async () => {
      const response = await singleUserInfo({
        url: "auth/token",
      });
      setInfoUser(response.data.data);
    };
    userInfoAdmission();
  }, []);

  return (
    <>
      <Header />
      <Container className="my-5">
        <h3 className="text-center mb-3"> Admission Info </h3>
        <Row>
          <Col>
            <Table variant="dark" className="text-center" striped bordered hover>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Name:</td>
                  <td>
                    {" "}
                    {`${infoUser && infoUser.firstname} ${
                      infoUser && infoUser.middlename
                    } ${infoUser && infoUser.lastname}`}{" "}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Admission Date:</td>
                  <td>
                    {" "}
                    {moment(infoUser && infoUser.createAt).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}{" "}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mobile Number</td>
                  <td> {infoUser && infoUser.mobileno} </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Login Id</td>
                  <td> {infoUser && infoUser.loginName} </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td> BirthDate </td>
                  <td> {infoUser && infoUser.dob} </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>aadhar Number</td>
                  <td> {infoUser && infoUser.aadharno} </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Email</td>
                  <td> {infoUser && infoUser.email} </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>blood</td>
                  <td> {infoUser && infoUser.blood_group} </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Standard</td>
                  <td> {infoUser && infoUser.standard} </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Gender</td>
                  <td> {infoUser && infoUser.gender} </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Cast</td>
                  <td> {infoUser && infoUser.cast} </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Status</td>
                  <td> {infoUser && infoUser.status} </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};
export default AddmissionInfo;

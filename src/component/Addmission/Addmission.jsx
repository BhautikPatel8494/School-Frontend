import { useState } from "react";
import axios from "axios";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { tokenLogin } from "../constant";

const Addmission = () => {
  const [choosePhoto, setChoosePhoto] = useState("");
  const [chooseResultPhoto, setChooseResultPhoto] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [standard, setStandard] = useState("");
  const [cast, setCast] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("profile", choosePhoto);
    data.append("resultPhoto", chooseResultPhoto);
    data.append("firstname", firstName);
    data.append("middlename", middleName);
    data.append("lastname", lastName);
    data.append("address", address);
    data.append("mobileno", mobileNumber);
    data.append("aadharno", aadharNumber);
    data.append("dob", birthDate);
    data.append("standard", standard);
    data.append("cast", cast);
    data.append("blood_group", bloodGroup);
    data.append("gender", gender);
    data.append("email", email);

    await axios.post(
      "http://192.168.29.6:8000/api/admission",
      data,
      {
        headers: { Authorization: `Bearer ${tokenLogin}` },
      }
    );
  };

  return (
    <>
      <Header />
      <h3 className="text-center mt-5"> Admission Form </h3>
      <Container>
        <Row className="my-5 bg-secondary rounded text-light p-5">
          <Form onSubmit={(e) => formSubmitHandler(e)}>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Your Photo</Form.Label>
                <Form.Control
                  name="profile"
                  required
                  onChange={(e) => setChoosePhoto(e.target.files[0])}
                  type="file"
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Previous Year Result</Form.Label>
                <Form.Control
                  required
                  name="resultPhoto"
                  onChange={(e) => setChooseResultPhoto(e.target.files[0])}
                  type="file"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  name="firstname"
                  onChan
                  placeholder="First Name"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setMiddleName(e.target.value)}
                  type="text"
                  name="middlename"
                  placeholder="Middle Name"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  name="address"
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Id"
                  name="email"
                  type="email"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Mobile number</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="mobilenumber"
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Mobile number"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Aadhar number</Form.Label>
                <Form.Control
                  required
                  name="aadharnumber"
                  type="number"
                  onChange={(e) => setAadharNumber(e.target.value)}
                  placeholder="Aadhar number"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label> Date Of Birth</Form.Label>
                <Form.Control
                  required
                  name="dob"
                  type="date"
                  onChange={(e) => setBirthDate(e.target.value)}
                  placeholder="Date Of Birth"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Standard</Form.Label>
                <Form.Select
                  required
                  name="standard"
                  onChange={(e) => setStandard(e.target.value)}
                  defaultValue="Choose standard"
                >
                  <option>Choose standard</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Cast</Form.Label>
                <Form.Select
                  required
                  name="cast"
                  onChange={(e) => setCast(e.target.value)}
                  defaultValue="Choose Cast"
                >
                  <option>Choose Cast</option>
                  <option>Sc / St</option>
                  <option>OBC</option>
                  <option>General</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Blood Group</Form.Label>
                <Form.Control
                  required
                  name="blood_group"
                  onChange={(e) => setBloodGroup(e.target.value)}
                  type="text"
                  placeholder="Blood Group"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Gender: </Form.Label>

                <div className="d-flex">
                  <Form.Check
                    required
                    onChange={(e) => setGender(e.target.value)}
                    value="male"
                    label="Male"
                    name="gender"
                    type="radio"
                  />
                  &nbsp;&nbsp;&nbsp;
                  <Form.Check
                    required
                    value="female"
                    onChange={(e) => setGender(e.target.value)}
                    label="Female"
                    name="gender"
                    type="radio"
                  />
                </div>
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Addmission;

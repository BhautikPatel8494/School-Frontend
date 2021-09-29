import { Col, Container, Image, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Image className="bgImageHome" src="./homebg.jpg" />
      <Container className="mt-5">
        <Row>
          <h1 className="text-center mb-3"> About Us </h1>
          <Col className=" mb-3">
            <img className="w-100 h-100" src="./a1.jpg.jpg" alt="d" />
          </Col>
          <Col className=" mb-3">
            <img className="w-100 h-100" src="./a4.jpg.jpg" alt="d" />
          </Col>
          <Col className=" mb-3">
            <img className="w-100 h-100" src="./a3.jpg.jpg" alt="d" />
          </Col>
        </Row>
        <Row>
          <Col className=" mb-3">
            <img className="w-100 h-100" src="./a2.jpg.jpg" alt="d" />
          </Col>
          <Col className=" mb-3">
            <img className="w-100 h-100" src="./a5.jpg.jpg" alt="d" />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <h1 className="text-center mb-5"> Meeting </h1>
          <Col className=" mb-3">
            <img className="w-100 h-100" src="./a7.jpg" alt="d" />
          </Col>
          <Col className="text-center mb-3">
            <h1> Anual Meeting </h1>
            <p>
              A school is an educational institution designed to provide
              learning spaces and learning environments for the teaching of
              students under the direction of teachers. Most countries have
              systems of formal education, which is sometimes compulsory.[2] In
              these systems, students progress through a series of schools. The
              names for these schools vary by country (discussed in the Regional
              section below) but generally include primary school for young
              children and secondary school for teenagers who have completed
              primary education. An institution where higher education is
              taught, is commonly called a university college or university.{" "}
            </p>
            <p>
              Non-government schools, also known as private schools,[3] may be
              required when the government does not supply adequate, or specific
              educational needs. Other private schools can also be religious,
              such as Christian schools, gurukula (Hindu schools), madrasa
              (Arabic schools), hawzas (Shi'i Muslim schools), yeshivas (Jewish
              schools), and others; or schools that have a higher standard of
              education or seek to foster other personal achievements. Schools
              for adults include institutions of corporate training, military
              education and training and business schools. Critics of school
              often accuse the school system of failing to adequately prepare
              students for their future lifes,[4] of encouraging certain
              temperaments while inhibiting others,[5] of prescribing students
              exactly what to do, how, when, where and with whom, which would
              suppress creativity,[6] and of using extrinsic measures such as
              grades and homework, which would inhibit children's natural
              curiosity and desire to learn.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 mb-3">
        <h1 className="text-center"> Vision And Mission </h1>
        <Row>
          <Col className="mt-3 text-center">
            <div className="bg-dark text-light p-4 rounded">

            <h1> Vision </h1>
            <p>
              How Brex works What you get Company Sign in Open an account 22
              Vision Statement Examples to Help You Write Your Own 2021-09-08
              Hero Image When starting a small business, founders typically have
              an idea of what they want to achieve—a vision of what success will
              look like. During the strategic planning process, it’s important
              to put this vision into concrete terms. Not only does a vision
              statement clarify your thoughts, but it helps employees and
              stakeholders understand what the business has set out to
              accomplish. No matter what the business, a good mission and vision
              statement can inspire and motivate employees to make that vision a
              reality. Whether it’s your first or fifth business, writing a
              compelling vision statement can be challenging. Below, we share
              how to write a vision statement—one that inspires your employees
              and positively impacts your business—and we look at a few vision
              statement examples to help you get started. What is a vision
              statement?
            </p>
            </div>

          </Col>
          <Col className="mt-3 text-center">
            <div className="bg-dark text-light p-4 rounded">

            <h1> Mission </h1>
            <p>
              How Brex works What you get Company Sign in Open an account 22
              Vision Statement Examples to Help You Write Your Own 2021-09-08
              Hero Image When starting a small business, founders typically have
              an idea of what they want to achieve—a vision of what success will
              look like. During the strategic planning process, it’s important
              to put this vision into concrete terms. Not only does a vision
              statement clarify your thoughts, but it helps employees and
              stakeholders understand what the business has set out to
              accomplish. No matter what the business, a good mission and vision
              statement can inspire and motivate employees to make that vision a
              reality. Whether it’s your first or fifth business, writing a
              compelling vision statement can be challenging. Below, we share
              how to write a vision statement—one that inspires your employees
              and positively impacts your business—and we look at a few vision
              statement examples to help you get started. What is a vision
              statement?
            </p>
            </div>

          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;

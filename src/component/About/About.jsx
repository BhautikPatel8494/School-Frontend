import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./About.css";

const About = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Header />
      <Container fluid>
        <h1 className="text-center mt-5"> About Us </h1>
        <Row>
          <Carousel
            showDots={true}
            infinite
            autoPlay={true}
            autoPlaySpeed={2000}
            responsive={responsive}
          >
            <div className="mainDivSliders">
              <img className="sliderImages" src="./t1.jpg" alt="d" />
              <div className="contentCard">
                <h3> Hemsworth </h3>
                <p className="my-2"> Science </p>
                <p>
                  {" "}
                  It has been found that teachers who showed enthusiasm towards
                  the course materials and students can create a positive
                  learning experience.Enthusiastic teachers are rated higher by
                  their students than teachers who didn't show much enthusiasm
                  for the course materials
                </p>
              </div>
            </div>
            <div className="mainDivSliders">
              <img className="sliderImages" src="./t2.jpg" alt="d" />
              <div className="contentCard">
                <h3> Steave </h3>
                <p className="my-2"> Geography </p>
                <p>
                  {" "}
                  It has been found that teachers who showed enthusiasm towards
                  the course materials and students can create a positive
                  learning experience.Enthusiastic teachers are rated higher by
                  their students than teachers who didn't show much enthusiasm
                  for the course materials
                </p>
              </div>
            </div>
            <div className="mainDivSliders">
              <img className="sliderImages" src="./t3.jpg" alt="d" />
              <div className="contentCard">
                <h3> Lana & Khyven </h3>
                <p className="my-2"> It departament </p>
                <p>
                  {" "}
                  It has been found that teachers who showed enthusiasm towards
                  the course materials and students can create a positive
                  learning experience.Enthusiastic teachers are rated higher by
                  their students than teachers who didn't show much enthusiasm
                  for the course materials
                </p>
              </div>
            </div>
            <div className="mainDivSliders">
              <img className="sliderImages" src="./t4.jpg" alt="d" />
              <div className="contentCard">
                <h3> Doug </h3>
                <p className="my-2"> Chemistry </p>
                <p>
                  {" "}
                  It has been found that teachers who showed enthusiasm towards
                  the course materials and students can create a positive
                  learning experience.Enthusiastic teachers are rated higher by
                  their students than teachers who didn't show much enthusiasm
                  for the course materials
                </p>
              </div>
            </div>
            <div className="mainDivSliders">
              <img className="sliderImages" src="./t5.jpg" alt="d" />
              <div className="contentCard">
                <h3> Peter </h3>
                <p className="my-2"> Biography </p>
                <p>
                  {" "}
                  It has been found that teachers who showed enthusiasm towards
                  the course materials and students can create a positive
                  learning experience.Enthusiastic teachers are rated higher by
                  their students than teachers who didn't show much enthusiasm
                  for the course materials
                </p>
              </div>
            </div>
            <div className="mainDivSliders">
              <img className="sliderImages" src="./t6.jpg" alt="d" />
              <div className="contentCard">
                <h3> Chlohe </h3>
                <p className="my-2"> Economic </p>
                <p>
                  It has been found that teachers who showed enthusiasm towards
                  the course materials and students can create a positive
                  learning experience.Enthusiastic teachers are rated higher by
                  their students than teachers who didn't show much enthusiasm
                  for the course materials
                </p>
              </div>
            </div>
          </Carousel>
        </Row>
      </Container>
      <Container>
        <Row className="my-5">
          <h3> People Think About School: </h3>
          <p className="my-3">
            A school is an educational institution designed to provide learning
            spaces and learning environments for the teaching of students under
            the direction of teachers. Most countries have systems of formal
            education, which is sometimes compulsory In these systems, students
            progress through a series of schools. The names for these schools
            vary by country (discussed in the Regional section below) but
            generally include primary school for young children and secondary
            school for teenagers who have completed primary education. An
            institution where higher education is taught, is commonly called a
            university college or university. In addition to these core schools,
            students in a given country may also attend schools before and after
            primary (elementary in the US) and secondary (middle school in the
            US) education. Kindergarten or preschool provide some schooling to
            very young children (typically ages 3–5). University, vocational
            school, college or seminary may be available after secondary school.
            A school may be dedicated to one particular field, such as a school
            of economics or a school of dance. Alternative schools may provide
            nontraditional curriculum and methods. Non-government schools, also
            known as private schools may be required when the government does
            not supply adequate, or specific educational needs. Other private
            schools can also be religious, such as Christian schools, gurukula
            (Hindu schools), madrasa (Arabic schools), hawzas (Shi'i Muslim
            schools), yeshivas (Jewish schools), and others; or schools that
            have a higher standard of education or seek to foster other personal
            achievements. Schools for adults include institutions of corporate
            training, military education and training and business schools.
          </p>
        </Row>

        <Row>
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
      <Footer />
    </>
  );
};

export default About;

import nodejs from "../assets/img/nodejs.png";
import flutter from "../assets/img/flutter.png";
import reactjs from "../assets/img/reactjs.png";
import postgres from "../assets/img/postgres.png";
import mysql from "../assets/img/mysql.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Pas Foto.png";

export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="about" id="about">
      <Container>
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <h2>About Me</h2>
              <Row className="aligh-items-center">
                <Col xs={12} md={4}>
                  <div className="header-img">
                    <img src={headerImg} alt="Header Img" />
                  </div>
                </Col>
                <Col xs={12} md={8}>
                  <p>Hello! My name is Putra. I am highly motivated in programming and any suitable job that suits my ability. Familiar with <strong>Javascript</strong> and <strong>Dart</strong> programming languages. I am also a detailed person, able to work under pressure, and like to seek new challenges. Experienced in the field of mobile and website applications for the development of <strong>learning management systems</strong> and <strong>oil well management systems</strong>. Active in organizations and committees at the department, faculty and campus levels that can improve my abilities and personality in the team work, time management, etc.
                    <br></br>
                    <br></br>
                    My main focus these days is making an <strong>oil well management system</strong> application at <strong>Ametis Institute</strong>.
                  </p>
                </Col>
              </Row>
              <br></br>
              <br></br>
              <strong>Here are a few technologies I’ve been working with recently:</strong>
              <br></br>
              <br></br>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme about-slider" autoPlay={true} autoPlaySpeed={4000} transitionDuration={500}>
                <div className="flutter">
                  <img src={flutter} alt="Image" />
                  <h5>Flutter</h5>
                </div>
                <div className="nodejs">
                  <img src={nodejs} alt="Image" />
                  <h5>NodeJS</h5>
                </div>
                <div className="reactjs">
                  <img src={reactjs} alt="Image" />
                  <h5>ReactJS</h5>
                </div>
                <div className="postgres">
                  <img src={postgres} alt="Image" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="mysql">
                  <img src={mysql} alt="Image" />
                  <h5>MySQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

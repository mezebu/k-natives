import React from "react";
import Header from "./Header";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../assests/avatar.jpg";
import AboutImg from "../assests/AboutImg.webp";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      <div className="container">
        <div className="about-text">
          <h1 className="abt-header-text">About Us</h1>
        </div>
        <Container fluid>
          <Row className="text-center">
            <Col>
              <p>
                Our highly qualified English teachers are by your side and
                provide you with the right tools to help you interact
                confidently in the real world and achieve the professional and
                personal success you are working towards. We help students all
                over the world to accomplish incredible achievements and we can
                help you to: improve your proficiency in English speaking learn
                important digital literacy skills effectively communicate and
                collaborate with friends and colleagues gain the confidence to
                achieve your professional and personal ambitions.
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="text-center">
            <Col lg={12} md={12} sm={12} xs={12}>
              <Image src={AboutImg} fluid />
            </Col>
          </Row>
        </Container>
        <div className="about-text">
          <h1 className="abt-header-text">Team</h1>
        </div>
        <Container fluid>
          <Row className="text-center">
            <Col lg={4} md={4} sm={6} xs={12}>
              <p>
                <Card border="info">
                  <Card.Img variant="top" src={avatar} fluid />
                  <Card.Body>
                    <Card.Title>John Doe</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </p>
            </Col>

            <Col lg={4} md={4} sm={6} xs={12}>
              <p>
                <Card border="info">
                  <Card.Img variant="top" src={avatar} fluid />
                  <Card.Body>
                    <Card.Title>John Doe</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </p>
            </Col>

            <Col lg={4} md={4} sm={6} xs={12}>
              <p>
                <Card border="info">
                  <Card.Img variant="top" src={avatar} fluid />
                  <Card.Body>
                    <Card.Title>John Doe</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </p>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <p>
                <Card border="info">
                  <Card.Img variant="top" src={avatar} fluid />
                  <Card.Body>
                    <Card.Title>John Doe</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </p>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <p>
                <Card border="info">
                  <Card.Img variant="top" src={avatar} fluid />
                  <Card.Body>
                    <Card.Title>John Doe</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </p>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <p>
                <Card border="info">
                  <Card.Img variant="top" src={avatar} fluid />
                  <Card.Body>
                    <Card.Title>John Doe</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;

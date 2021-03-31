import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import corporate from "../assests/corporate.jpg";

const Course = () => {
  return (
    <div className="course">
      <Container>
        <h1 className="text-center course-title">Our Courses</h1>
        <p className="text-center">
          Kharkiv natives language school offers a variety range of couses
          primarly we offer english lessons virtually
        </p>
      </Container>

      <Container fluid>
        <Row className="text-center">
          <Col lg={4} md={4} sm={6} xs={12}>
            <p>
              <Card border="light" text="dark" bg="warning">
                <Card.Img variant="top" src={corporate} fluid />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "700" }}>
                    Corporate business English
                  </Card.Title>
                  <Card.Text>
                    Business English communication skills are essential for
                    getting ahead at work. Improving your professional business
                    vocabulary and knowledge will help you work more effectively
                    and open up new opportunities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </p>
          </Col>
          <Col lg={4} md={4} sm={6} xs={12}>
            <p>
              <Card border="light" text="dark" bg="warning">
                <Card.Img variant="top" src={corporate} fluid />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "700" }}>
                    Conversation English
                  </Card.Title>
                  <Card.Text>
                    With our Native tutors you can expect to have very
                    interactive classes. With cool speaking activities that
                    would eventually raise your confidence while speaking in
                    public and increase your communication skills
                  </Card.Text>
                </Card.Body>
              </Card>
            </p>
          </Col>
          <Col lg={4} md={4} sm={6} xs={12}>
            <p>
              <Card border="light" text="dark" bg="warning">
                <Card.Img variant="top" src={corporate} fluid />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "700" }}>
                    Technical and Grammar English
                  </Card.Title>
                  <Card.Text>
                    Our tutors are highly skilled native English speakers they
                    will polish your grammar and Enlighten you with new
                    vocabulary. That should help you improve you
                    speaking,writing and listening skills
                  </Card.Text>
                </Card.Body>
              </Card>
            </p>
          </Col>
        </Row>
        <div className="text-center course-btn">
          <Button variant="outline-primary" size="lg">
            Read More
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Course;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import avatar from "../assests/avatar.jpg";

const SuccessStories = () => {
  return (
    <div className="success-stories">
      <h3 className="text-center success-header-text">Our Success Stories</h3>

      <Container fluid>
        <Row className="text-center">
          <Col lg={4} md={4} sm={6} xs={12}>
            <p>
              <Card
                border="secondary"
                text="dark"
                bg="warning"
                className="mb-5"
              >
                <Card.Img variant="top" src={avatar} fluid />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </p>
          </Col>
          <Col lg={4} md={4} sm={6} xs={12}>
            <p>
              <Card border="secondary" text="dark" className="mb-5">
                <Card.Img variant="top" src={avatar} fluid />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </p>
          </Col>
          <Col lg={4} md={4} sm={6} xs={12}>
            <p>
              <Card border="success" text="dark" className="mb-5">
                <Card.Img variant="top" src={avatar} fluid />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SuccessStories;

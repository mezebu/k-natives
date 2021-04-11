import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <div>
        <div className="home-page">
          <div className="container">
            <div className="container-md home-contents">
              <Container fluid>
                <Row className="text-center">
                  <Col>
                    <h1 className="home-text-big-one bg-txt-animation">
                      Welcome To Kharkiv Natives Language School
                    </h1>
                    <p className="home-text-small">
                      Kharkiv Natives Language school brings you quality native
                      different language speakers all over the world. Lay in
                      your couch while Learning a new Language
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <Container className="pt-5 pb-5">
        <div className="bg-light p-5 rounded">
          <div className="col-sm-6 mx-auto">
            <Form>
              <main className="form-signin">
                <h1 className=" text-center">Contact Us</h1>
                <div className="form-floating mb-3">
                  <input
                    type="name"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Enter Name"
                  />
                  <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Phone Number"
                  />
                  <label for="floatingPassword">Number</label>
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{
                      height: "100px",
                      marginBottom: "1rem",
                      marginTop: "1rem",
                      resize: "none",
                      overflow: "hidden",
                    }}
                  ></textarea>
                  <label for="floatingTextarea2">Message</label>
                </div>
                <div className="send-btn text-center">
                  <Button variant="outline-success" size="lg">
                    Send
                  </Button>
                </div>
              </main>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;

import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <Container>
        <div class="bg-light p-5 rounded">
          <div class="col-sm-6 mx-auto">
            <Form>
              <main class="form-signin">
                <h1 class="h3 mb-3 fw-normal text-center">Contact Us</h1>
                <div class="form-floating mb-3">
                  <input
                    type="name"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Enter Name"
                  />
                  <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input
                    type="number"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Phone Number"
                  />
                  <label for="floatingPassword">Number</label>
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control"
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

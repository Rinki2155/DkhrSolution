import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

function Contact() {
  return (
    <div className="container mt-5">
      {/* Centering the Row with d-flex and justify-content-center */}
      <div className="row d-flex justify-content-center">
        {/* Contact Form */}
        <div className="col-md-10 mx-auto">
          <h3 style={{ color: "#39508E" }}>CONTACT INTELLECT RESOURCE ASIA</h3>
          <p>
            For any information please fill the form below or write to us at:
            <a href="mailto:id-hr@intellectresourceasia.com">
              {" "}
              id-hr@intellectresourceasia.com
            </a>
          </p>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formPhone">
                <Form.Label>Phone No</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import SliderPage from "./SliderPage";

function HomePage() {
  return (
<>
<SliderPage />

<div className="container-fluid">
      <div className="container mt-5">
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-8">
            <h3 style={{ color: "#39508E" }}>
              CONTACT INTELLECT RESOURCE ASIA
            </h3>
            <p>
              For any information please fill the form below or write to us at:
              <a href="mailto:id-hr@dkhrsolutions.com">
                {" "}
                id-hr@dkhrsolutions.com
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
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                />
              </Form.Group>
              <Button variant="primary" type="submit" style={{backgroundColor:'#39508E'}}>
                Submit
              </Button>
            </Form>
          </div>

          {/* Map Section */}
          <div className="col-md-4">
            <div
              className="map-container mt-4"
              style={{ maxWidth: "100%", height: "300px" }}
            >
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.586108960361!2d77.08381291501798!3d28.504606982469755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d194fb197b2b1%3A0x6bcf34ad02e8c4e9!2sDLF%20City%20Court!5e0!3m2!1sen!2sin!4v1631200195814!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default HomePage;

import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const carouselItems = [
  {
    id: 1,
    text: "HOT SPOT FOR JOB SEEKERS AND EMPLOYERS",
    image: "Image/1.webp",
  },
  {
    id: 2,
    text: "YOUR SUCCESS IS OUR PRIORITY",
    image: "Image/1.webp",
  },
  {
    id: 3,
    text: "CONNECTING TALENT WITH OPPORTUNITIES",
    image: "Image/2.jpg",
  },
  {
    id: 4,
    text: "YOUR PARTNER IN CAREER ADVANCEMENT",
    image: "Image/3.jpeg",
  },
  {
    id: 5,
    text: "ENHANCING EMPLOYABILITY EVERY DAY",
    image: "Image/4.jpeg",
  },
];
const services = [
  { number: "01", title: "PROFESSIONAL SERVICES", description: "" },
  { number: "02", title: "CONSULTING SERVICES", description: "" },
  { number: "03", title: "HUMAN RESOURCE OUTSOURCING", description: "" },
];

function SliderPage() {
  return (
    <Container className="container">
      {/* Carousel Section */}
      <Carousel fade={true} indicators={false} controls={false} interval={4000}>
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <div
              className="carousel-content"
              style={{
                backgroundImage: `url(${item.image})`, // Set background image for mobile
              }}
            >
              {/* Overlay layer */}
              <div className="carousel-overlay"></div>

              {/* Text Section */}
              <div className="carousel-text">
                <h2>{item.text}</h2>
              </div>

              {/* Image Section for Desktop */}
              <div className="carousel-image">
                <img
                  src={item.image}
                  alt={`Slide ${item.id}`}
                  className="d-block w-100"
                />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Service Boxes Section */}
      <Row className="services-container">
        {services.map((service) => (
          <Col key={service.number} md={4} className="p-1">
            <div className="service-box">
              <h2>{service.number}</h2>
              <h5>{service.title}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SliderPage;

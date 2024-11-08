import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const carouselItems = [
  {
    id: 1,
    text: "HOT SPOT FOR JOB SEEKERS AND EMPLOYERS",
    image: "Image/3.png",
  },
  {
    id: 2,
    text: "YOUR SUCCESS IS OUR PRIORITY",
    image: "Image/1.png",
  },
  {
    id: 3,
    text: "CONNECTING TALENT WITH OPPORTUNITIES",
    image: "Image/2.png",
  },
  {
    id: 4,
    text: "YOUR PARTNER IN CAREER ADVANCEMENT",
    image: "Image/3.png",
  },
  {
    id: 5,
    text: "ENHANCING EMPLOYABILITY EVERY DAY",
    image: "Image/4.png",
  },
];
const services = [
    { number: "01", title: "PROFESSIONAL SERVICES", description: "" },
    { number: "02", title: "CONSULTING SERVICES", description: "" },
    { number: "03", title: "HUMAN RESOURCE OUTSOURCING", description: "" },
  ];
function SliderPage() {
  return (
    <>
    <Container>
      {/* Carousel Section */}
      <Carousel indicators={false} controls={false}>
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
              <img
                src={item.image}
                alt={`Slide ${item.id}`}
                className="d-block w-100"
                style={{ objectFit: 'cover', height: '400px' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'orange',
                  fontWeight: 'bold',
                  fontSize: '34px',
                  textAlign: 'center',
                }}
              >
                {item.text}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Service Boxes Section */}
      <Row className="text-center mt-4">
        {services.map((service) => (
          <Col key={service.number} md={4} className="p-1">
            <div style={{ backgroundColor: '#00a2e8', color: 'white', padding: '20px' }}>
              <h2>{service.number}</h2>
              <h5>{service.title}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  )
}

export default SliderPage
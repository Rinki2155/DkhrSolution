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
    <Container>
      {/* Carousel Section */}
      <Carousel fade={true} indicators={false} controls={false} interval={4000}>
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <div style={{ display: 'flex', flexDirection: 'row', height: '400px' }} className="carousel-content">
              {/* Text Section */}
              <div
                className="carousel-text p-4 d-flex align-items-center"
                style={{
                  // backgroundColor: '#2FB2DB',
                  color: '#39508E',
                  flex: '1 1 50%',
                  // textAlign: 'center',
                }}
              >
                <h2 style={{ fontWeight: 'bold', fontSize: '34px', lineHeight: '1.5' }}>
                  {item.text}
                </h2>
              </div>

              {/* Image Section */}
              <div
                style={{
                  flex: '1 1 50%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={item.image}
                  alt={`Slide ${item.id}`}
                  className="d-block w-100"
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Service Boxes Section */}
      <Row className="text-center mt-4">
        {services.map((service) => (
          <Col key={service.number} md={4} className="p-1">
            <div style={{ backgroundColor: '#2FB2DB', color: 'white', padding: '20px' }}>
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

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaSkype } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Hottest Job Opening Section */}
          <Col md={8} sm={12} className="footer-section mb-4">
            <h2 className="footer-heading">Hottest Job Opening</h2>
            <div className="job-opening">
              <h6 className="job-title">Account Managers - Position for 2</h6>
              <ul className="job-details">
                <li>Freshers from any field, ready to learn with strong communication skills.</li>
                <li>Bachelor in Science, literature or commerce etc or MBA in HR/Marketing from reputed college can apply.</li>
                <li>Strong Academics. Throughout 70%. Happy to evaluate exceptional performers in any field.</li>
              </ul>
              <a href="#" className="more-link">more</a>
            </div>
            <div className="job-opening">
              <h6 className="job-title">Account Managers - Position for 2</h6>
              <ul className="job-details">
                <li>Freshers from any field, ready to learn with strong communication skills.</li>
                <li>Bachelor in Science, literature or commerce etc or MBA in HR/Marketing from reputed college can apply.</li>
                <li>Strong Academics. Throughout 70%. Happy to evaluate exceptional performers in any field.</li>
              </ul>
              <a href="#" className="more-link">more</a>
            </div>
            <button className="disabled-button" disabled>
              See all current openings
            </button>
          </Col>

          {/* Contact Intellect Resource Section */}
          <Col md={4} sm={12} className="footer-section">
            <h3 className="footer-heading">Contact Intellect Resource</h3>
            <p><strong>Address:</strong> DLF City Court, M G Road, Gurgaon, 122001</p>
            <p>
              <strong>Email:</strong> <a href="mailto:hr@intellectresourceasia.com">hr@intellectresourceasia.com</a><br />
              <a href="mailto:cv@intellectresourceasia.com">cv@intellectresourceasia.com</a>
            </p>
            <p><strong>Contact No.:</strong> <a href="tel:+911244370758">91 - 124 - 4370758/59</a></p>
            <p><strong>Website:</strong> <a href="http://www.intellectresourceasia.com" target="_blank" rel="noopener noreferrer">www.intellectresourceasia.com</a></p>
            <p><strong>Socials:</strong></p>
            <div className="social-icons">
              <a href="#"><FaFacebook size={24} /></a>
              <a href="#"><FaTwitter size={24} /></a>
              <a href="#"><FaLinkedin size={24} /></a>
              <a href="#"><FaSkype size={24} /></a>
            </div>
          </Col>
        </Row>


      </Container>
              {/* Bottom Footer Section */}
              <Row className="footer-bottom mt-4">
          <Col sm={12} className="text-center">
            <p>COPYRIGHT © 2013-14 intellectresourceasia.com. ALL RIGHTS RESERVED</p>
            <p>DESIGNED AND DEVELOPED BY INDWARE</p>
          </Col>
        </Row>
    </footer>
  );
};

export default Footer;

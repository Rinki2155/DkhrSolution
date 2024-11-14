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
            <h2 className="footer-heading">Hottest Job Openings</h2>
            <div className="job-opening">
              <h6 className="job-title">Account Managers - 2 Positions</h6>
              <ul className="job-details">
                <li>Freshers from any field with strong communication skills.</li>
                <li>Bachelor's in Science, Literature, Commerce, or MBA in HR/Marketing.</li>
                <li>Strong academics with 70% or higher. Exceptional performers are encouraged to apply.</li>
              </ul>
              <a href="#" className="more-link">More</a>
            </div>
            <button className="disabled-button" disabled>
              See all current openings
            </button>
          </Col>

          {/* Contact DK HR Solutions Section */}
          <Col md={4} sm={12} className="footer-section">
            <h3 className="footer-heading">Contact DK HR Solutions</h3>
            <p><strong>Address:</strong> Office no-3, Greater Noida W Rd, Rani Laxmibai Nagar, Yusufpur, Nai Basti Dundahera, Noida, Ghaziabad, Uttar Pradesh 201009</p>
            
            {/* Email Links with Compose Page Setup */}
            <p>
              <strong>Email:</strong>
              <a
                href="mailto:hr@dkhrsolutions.com?subject=Job%20Inquiry&body=Hello%20DK%20HR%20Solutions%2C"
                className="d-block"
              >
                hr@dkhrsolutions.com
              </a>
              <a
                href="mailto:info@dkhrsolutions.com?subject=General%20Inquiry&body=Hello%20DK%20HR%20Solutions%2C"
                className="d-block"
              >
                info@dkhrsolutions.com
              </a>
            </p>
            
            <p><strong>Contact No.:</strong> <a href="https://wa.me/919711248607" target="_blank" rel="noopener noreferrer">+91 9711248607</a></p>
            <p><strong>Website:</strong> <a href="http://www.dkhrsolutions.com" target="_blank" rel="noopener noreferrer">www.dkhrsolutions.com</a></p>
            
            {/* Social Media Links */}
            <p><strong>Socials:</strong></p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
              <a href="https://www.linkedin.com/company/dk-hr-solutions/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
              <a href="https://skype.com" target="_blank" rel="noopener noreferrer"><FaSkype size={24} /></a>
            </div>
          </Col>
        </Row>

      </Container>
      
        {/* Bottom Footer Section */}
        <div className="footer-bottom mt-5 py-4">
          <div className="text-center">
            <p>COPYRIGHT © 2013-14 DK HR Solutions. ALL RIGHTS RESERVED</p>
            <p>DESIGNED AND DEVELOPED BY INDWARE</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;

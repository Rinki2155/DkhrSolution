import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="container-sm">
      <div className="about-container py-5">
        <h2 className="py-1">About Us</h2>
        <p>
          <strong>DK HR Solutions</strong> is a trusted Human Resource consultancy dedicated to supporting privately owned businesses in India with comprehensive HR solutions. Our mission is to help businesses optimize their workforce by offering tailored HR management and consultative expertise that addresses each organization’s unique needs.
        </p>

        <section className="my-4">
          <h4 className="text-secondary">Our Expertise</h4>
          <p>
            At DK HR Solutions, we bring deep industry knowledge and extensive experience in all areas of Human Resource management. From designing effective HR policies to implementing best practices, our team ensures that business owners have the right tools and guidance to build compliant, engaged, and productive workplaces.
          </p>
          <p>
            Our focus is to empower companies to manage their HR functions confidently and effectively. We assist with policy development, employee relations, and creating performance-driven cultures that support growth and align with business goals.
          </p>
        </section>

        <section className="my-4">
          <h4 className="text-secondary">What We Do</h4>
          <p>
            DK HR Solutions provides a wide range of HR services that address every critical aspect of human resource management:
          </p>
          <ul>
            <li>Developing and implementing Human Resource policies and procedures tailored to the specific needs of each business.</li>
            <li>Creating employee handbooks, structured performance appraisal processes, and job descriptions that drive clarity and consistency in employee roles.</li>
            <li>Guiding business owners on complex employee relations issues, including handling cases related to harassment, discrimination, and workplace morale.</li>
            <li>Providing comprehensive training solutions for employees and managers, equipping teams with the skills needed to foster a healthy, productive workplace.</li>
          </ul>
        </section>

        <section className="my-4">
          <h4 className="text-secondary">Our Mission</h4>
          <p>
            Our mission at DK HR Solutions is to help businesses streamline their HR operations by delivering expert HR consultancy and support. We aim to create positive, compliant work environments where businesses and their employees can thrive together.
          </p>
          <p>
            By working closely with our clients, we offer guidance that enhances their HR functions, helping them manage workforce challenges effectively and proactively.
          </p>
        </section>

        <section className="my-4">
          <h4 className="text-secondary">Why Choose DK HR Solutions?</h4>
          <p>
            We are committed to providing high-quality HR services with integrity, reliability, and a genuine dedication to our clients’ success. Our consultative approach allows us to understand each client’s unique needs and provide personalized solutions that deliver real impact. 
          </p>
          <p>
            With DK HR Solutions, you gain a trusted HR partner that is as invested in your success as you are. Let us support your business with the expertise and resources to build a resilient, productive team.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

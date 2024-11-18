import React from "react";

const OpeningPage: React.FC = () => {
  return (
    <div className="container">
      <div className="hero-section py-5">
        <h2 className="py-1">Welcome to DK HR Solutions</h2>
        <p>
          <strong>DK HR Solutions</strong> provides expert Human Resource consultancy to privately owned businesses across India. We offer comprehensive HR solutions that drive growth, enhance productivity, and ensure compliance with local regulations.
        </p>
        <p>
          Our mission is to transform your HR processes through customized strategies that align with your business objectives. Whether you need assistance with employee relations, performance management, policy development, or workforce training, we are here to help your business thrive.
        </p>
      </div>

      <section className="my-4">
        <h4>Our Expertise</h4>
        <p>
          DK HR Solutions is committed to delivering tailored HR services that meet the unique needs of your business. We focus on providing strategic HR solutions that help you build a compliant, engaged, and high-performing workforce.
        </p>
        <div className="row mt-4">
          <div className="col-md-6 py-3">
            <h3>HR Consultation</h3>
            <p>Expert advice on building effective HR practices and policies for your business.</p>
          </div>
          <div className="col-md-6 py-3">
            <h3>Policy Development</h3>
            <p>Create robust HR policies and procedures that support business growth and compliance.</p>
          </div>
          <div className="col-md-6 py-3">
            <h3>Employee Relations</h3>
            <p>Guidance on handling employee relations issues to maintain a positive workplace culture.</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="/services" className="btn btn-primary py-2 px-4" style={{backgroundColor:'#39508E'}}>
            Explore Our Services
          </a>
        </div>
      </section>

      <section className="my-4">
        <h2>Why Choose DK HR Solutions?</h2>
        <p>
          Our personalized approach and years of expertise make us a trusted partner for HR solutions. We work closely with business owners to understand their unique challenges and provide practical, results-driven strategies that create a positive impact.
        </p>
        <div className="row mt-4">
          <div className="col-md-6 py-3">
            <h3>Tailored Solutions</h3>
            <p>We create HR solutions that are customized to fit your business needs, helping you achieve success.</p>
          </div>
          <div className="col-md-6 py-3">
            <h3>Experienced Team</h3>
            <p>Our team of experienced HR professionals provides expert guidance and support at every step.</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="/about" className="btn btn-primary py-2 px-4" style={{backgroundColor:'#39508E'}}>
            Get to Know Us Better
          </a>
        </div>
      </section>
    </div>
  );
};

export default OpeningPage;

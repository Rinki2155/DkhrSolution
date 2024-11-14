import React from "react";

const Service: React.FC = () => {
  return (
    <div className="container-sm">
      <div className="about-container py-5">
        <h2 className="py-1">Our Services</h2>
        <p>
          <strong>DK HR Solutions</strong> is a dedicated Human Resource consultative service provider, collaborating with privately owned businesses to deliver comprehensive HR solutions across India.
        </p>

        <section className="my-4">
          <h4 className="text-secondary">Human Resource Management & Consultation</h4>
          <p>
            DK HR Solutions specializes in providing expert Human Resource management and consultation to business owners, guiding them through effective HR practices that foster a productive and compliant workplace. We are committed to addressing all HR challenges with customized strategies that align with each client’s unique business needs.
          </p>
        </section>

        <section className="my-4">
          <h4 className="text-secondary">HR Policies & Procedure Development</h4>
          <p>
            Our team assists companies in developing and implementing HR policies and procedures that create a structured and fair work environment. From compliance-driven policies to employee relations guidelines, we help clients create a framework that supports growth and minimizes risk.
          </p>
        </section>

        <section className="my-4">
          <h4 className="text-secondary">Employee Handbooks & Performance Management</h4>
          <p>
            We assist in creating clear, concise employee handbooks that define organizational values, expectations, and benefits. Our performance management solutions include appraisal processes, job descriptions, and methods for assessing employee performance, helping businesses build motivated and goal-oriented teams.
          </p>
        </section>

        <section className="my-4">
          <h4 className="text-secondary">Employee Relations & Counseling</h4>
          <p>
            At DK HR Solutions, we offer expert counsel on sensitive employee relations issues. Whether addressing harassment, discrimination, or morale concerns, our team supports business owners and managers in navigating complex situations with tact and professionalism, ensuring positive outcomes.
          </p>
        </section>

        <section className="my-4">
          <h4 className="text-secondary">Employee & Management Training Solutions</h4>
          <p>
            We believe that ongoing training is key to a thriving workplace. Our tailored training solutions for employees and management cover a wide range of topics, including leadership development, compliance, and performance enhancement, ensuring your team is equipped to meet today’s business challenges.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Service;

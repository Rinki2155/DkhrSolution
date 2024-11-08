import React from "react";
import { Container } from "react-bootstrap";

const AboutUs: React.FC = () => {
  return (
    <Container className="py-5">
      <div className="about-container">
        <h2 className="pb-3">About Us</h2>
        <p>
          Dk Hr Solutions is a DIY Travel Information Company based out of
          Bellevue, WA (US). We provide helpful travel videos and precise travel
          information on a wide range of topics for destinations across Asia,
          the US, and Canada.
        </p>

        <section className="mt-4">
          <h3>Our Company</h3>
          <p>
            Dk Hr Solutions was born out of a desire to find helpful travel
            information organized together in one place. Our goal is to "Make
            Travel Easy" for everyone by offering accurate, specific, and useful
            information to fellow travelers.
          </p>
          <p>
            On our site, you will find informative travel videos, up-to-date
            destination information, and local tips for visiting destinations in
            Asia, the US, and Canada. We cover logistical details like arrival,
            local transport, hotel recommendations, top attractions, and local
            travel tips, all in one place.
          </p>
          <p>
            Travelers use our services before, during, and after their trips.
            Dk Hr Solutions helps them maximize their experiences by providing
            relevant, up-to-date information tailored for DIY travel.
          </p>
        </section>

        <section className="mt-4">
          <h3>Our Approach</h3>
          <p>
            Our travel information and video guides are based on real-life
            experiences by Dk Hr Solutions team members. We ensure accuracy by
            visiting destinations, collaborating with local guides, and keeping
            our information current.
          </p>
          <p>
            Our travel guides are easy to use, with a consistent format that
            helps travelers plan and execute trips seamlessly. From travel
            planning, airport and public transport information, to hotels, top
            attractions, and city-specific travel tips, Dk Hr Solutions has
            everything in one place.
          </p>
        </section>

        <section className="mt-4">
          <h3>How It Works</h3>
          <p>
            Get Social with Dk Hr Solutions! Be sure to subscribe to the Dk Hr Solutions
            Travel channel on YouTube and follow us on Twitter, Facebook, and
            Instagram. Join our online travel community and connect with fellow
            travelers!
          </p>
        </section>
      </div>
    </Container>
  );
};

export default AboutUs;

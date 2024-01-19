import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section className="about-us-container">
      <div className="hero-section">
        <h1>Your Brand Name</h1>
        <p>What does your brand represent?</p>
      </div>

      <div className="our-story-section">
        <h2>Our Story</h2>
        <p>
          Concise and engaging narrative about your brand's origins and values.
        </p>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="/images/CEO.jpg" alt="Team Member 1" />
          <h3>Mahipal Singh Sodha</h3>
          <p>Co-founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="/images/CTO.jpg" alt="Team Member 2" />
          <h3>Abhishek Kumar</h3>
          <p>Co-founder & CTO</p>
        </div>
        <div className="team-member">
          <img src="/images/CSO.jpg" alt="Team Member 2" />
          <h3>Abdal Ahmad</h3>
          <p>CSO (Chief Strategy Officer)</p>
        </div>
      </div>

      <div className="social-media-section">
        <h2>Connect With Us</h2>
        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </div>
      </div>

      <div className="call-to-action-section">
        <h2>Ready to Join Us?</h2>
        <p>Explore our products and be part of our journey!</p>
        <button className="cta-button">Explore Now</button>
      </div>
    </section>
  );
};

export default About;

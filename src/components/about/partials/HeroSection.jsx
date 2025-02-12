import React from 'react'
import fourthImage from "../../../images/4.jpeg"

const HeroSection = () => { 
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        <h1>Revolutionizing Talent Management with Psychological Expertise</h1>
        <div className="about-hero-image">
          <img
            src={fourthImage}
            alt="image"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection
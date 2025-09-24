import React from 'react';
import '../Styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Family Tree</h1>
      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Welcome to our Family Tree application, a platform designed to help you document, preserve, 
            and share your family's rich history and connections across generations.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make family history accessible and engaging for everyone, 
            helping families stay connected to their roots and preserve their legacy 
            for future generations.
          </p>
        </section>
        
        <section className="about-features">
          <h2>Features</h2>
          <ul>
            <li>Create and manage your family tree</li>
            <li>Add and edit family members with details</li>
            <li>Upload and share family photos</li>
            <li>Discover family connections</li>
            <li>Preserve family stories and memories</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
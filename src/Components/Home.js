import React from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Innovative Solutions from <span>Advice Kuber Shatu</span>
          </h1>
          <p className="hero-subtitle">
            We deliver cutting-edge services tailored to your business needs
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Explore Services</button>
            <button className="secondary-button">Contact Us</button>
          </div>
        </div>
      </section>

      {/* More sections would go here */}
    </div>
  );
};

export default Home;
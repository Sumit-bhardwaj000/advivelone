
import React from 'react';
import './About.css'; // We'll create this CSS file

const Aboutpage = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About <span>Advise Kuber Shatu</span></h1>
          <p>Your trusted partner in financial growth and stability</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2>Our <span>Mission</span></h2>
            <p>
              At Advise Kuber Shatu, we empower individuals and businesses to achieve financial success through 
              personalized advisory services. Our mission is to demystify finance and provide clear pathways to 
              wealth creation.
            </p>
            <div className="mission-stats">
              <div className="stat-item">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>5,000+</h3>
                <p>Clients Served</p>
              </div>
              <div className="stat-item">
                <h3>₹100Cr+</h3>
                <p>Assets Managed</p>
              </div>
            </div>
          </div>
          <div className="mission-image">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Our team discussing financial strategies" 
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core <span>Values</span></h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">💎</div>
            <h3>Integrity</h3>
            <p>We maintain the highest ethical standards in all our advice and recommendations.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Excellence</h3>
            <p>We deliver superior service through continuous learning and improvement.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Client Focus</h3>
            <p>Your success is our success - we tailor solutions to your unique needs.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌱</div>
            <h3>Sustainable Growth</h3>
            <p>We recommend strategies that ensure long-term financial health.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our <span>Leadership</span></h2>
        <div className="team-grid">
          <div className="team-card">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
              alt="Michael Fletcher" 
            />
            <h3>Michael Fletcher</h3>
            <p>Founder & CEO</p>
            <div className="team-social">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <div className="team-card">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
              alt="Ana Cooper" 
            />
            <h3>Ana Cooper</h3>
            <p>Chief Financial Advisor</p>
            <div className="team-social">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Ready to Start Your Financial Journey?</h2>
        <p>Our advisors are ready to help you achieve your goals</p>
        <button className="cta-button">Schedule Consultation</button>
      </section>
    </div>
  );
};

export default Aboutpage;
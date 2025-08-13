import React from 'react';
import './Servicepage.css';

const ServicePage = () => {
  const services = [
    {
      title: "Loan Advisory",
      description: "Expert guidance on personal, business, and mortgage loan solutions tailored to your financial goals.",
      icon: "📊"
    },
    {
      title: "Investment Planning",
      description: "Strategic investment portfolios designed to maximize returns while managing risk effectively.",
      icon: "💹"
    },
    {
      title: "Wealth Management",
      description: "Comprehensive strategies for wealth preservation and growth across generations.",
      icon: "💰"
    },
    {
      title: "Credit Optimization",
      description: "Improve your credit score and access better financial products with our proven methods.",
      icon: "🏆"
    },
    {
      title: "Business Financing",
      description: "Customized funding solutions to help your business grow and thrive in any market.",
      icon: "🏢"
    },
    {
      title: "Retirement Planning",
      description: "Secure your future with tailored retirement income strategies and savings plans.",
      icon: "🌴"
    }
  ];

  return (
    
    <div className="services-container">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Financial <span>Services</span></h1>
          <p>Tailored solutions designed to help you achieve your financial objectives</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="section-header">
          <h2>How We Can <span>Help You</span></h2>
          <p>Explore our comprehensive range of financial services</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="card-button">
                Learn More <span>&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Financial Future?</h2>
          <p>Contact our advisors today for a personalized consultation</p>
          <div className="cta-buttons">
            <button className="primary-button">Book Consultation</button>
            <button className="secondary-button">Call Now</button>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default ServicePage;
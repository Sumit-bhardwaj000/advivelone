
import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Get in <span>Touch</span></h1>
          <p>We're here to answer your financial questions and help you achieve your goals</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-grid-section">
        <div className="contact-info">
          <h2>Contact <span>Information</span></h2>
          
          <div className="info-card">
            <div className="info-icon">📍</div>
            <div>
              <h3>Our Office</h3>
              <p>Jindal Chowk 1121, Hisar, Haryana</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">📞</div>
            <div>
              <h3>Phone</h3>
              <p>+91 22048919</p>
              <p>+170 324 773 9877 (International)</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">✉️</div>
            <div>
              <h3>Email</h3>
              <p>info@advisekubarshatu.com</p>
              <p>support@advisekubarshatu.com</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">🕒</div>
            <div>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h2>Send Us a <span>Message</span></h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select id="service">
                <option value="">Select a service</option>
                <option value="loan">Loan Advisory</option>
                <option value="investment">Investment Planning</option>
                <option value="wealth">Wealth Management</option>
                <option value="credit">Credit Optimization</option>
                <option value="business">Business Financing</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" placeholder="How can we help you?"></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message <span>&rarr;</span>
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Find Us on <span>Map</span></h2>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.678321714123!2d75.7226233151019!3d29.14985398215896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39123d9b02a5e8b9%3A0x4dd0c0c6b5b6b5b6!2sJindal%20Chowk%2C%20Hisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy"
            title="Our Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css';

// Sub-components for each loan type
const PersonalLoanAdvice = () => (
  <div className="advice-content">
    <div className="advice-card">
      <h3>Personal Loan Solutions</h3>
      <ul>
        <li>Debt consolidation strategies</li>
        <li>Home improvement financing</li>
        <li>Medical expense coverage</li>
        <li>Wedding/event funding</li>
        <li>Education financing options</li>
      </ul>
      <div className="benefits">
        <h4>Key Benefits:</h4>
        <p>Competitive interest rates starting at 7.99% APR</p>
        <p>Flexible repayment terms from 1-7 years</p>
        <p>Loan amounts from ₹50,000 to ₹25,00,000</p>
      </div>
    </div>
    <div className="advice-image">
      <img src="https://www.moneycrashers.com/wp-content/uploads/2019/04/personal-loans-pros-cons.jpg" alt="Personal loan advice" />
    </div>
  </div>
);

const BusinessLoanAdvice = () => (
  <div className="advice-content">
    <div className="advice-card">
      <h3>Business Financing Solutions</h3>
      <ul>
        <li>Startup capital funding</li>
        <li>Equipment and inventory financing</li>
        <li>Working capital loans</li>
        <li>Commercial real estate loans</li>
        <li>Business line of credit</li>
      </ul>
      <div className="benefits">
        <h4>Key Benefits:</h4>
        <p>Customized repayment schedules</p>
        <p>Quick approval process (as fast as 48 hours)</p>
        <p>Loan amounts from ₹5,00,000 to ₹5,00,00,000</p>
      </div>
    </div>
    <div className="advice-image">
      <img src="https://www.indusind.com/iblogs/wp-content/uploads/9-1.jpg" alt="Business loan advice" />
    </div>
  </div>
);

const MortgageAdvice = () => (
  <div className="advice-content">
    <div className="advice-card">
      <h3>Mortgage Guidance</h3>
      <ul>
        <li>First-time homebuyer programs</li>
        <li>Refinancing options</li>
        <li>Investment property financing</li>
        <li>Reverse mortgage solutions</li>
        <li>Government-backed loan programs</li>
      </ul>
      <div className="benefits">
        <h4>Key Benefits:</h4>
        <p>Interest rates as low as 6.5%</p>
        <p>Up to 90% financing available</p>
        <p>Terms from 5 to 30 years</p>
      </div>
    </div>
    <div className="advice-image">
      <img src="https://benchmark.us/wp-content/uploads/2014/03/Top-10-Mortgage-Tips.jpg" alt="Mortgage advice" />
    </div>
  </div>
);

const Home = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="home-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section ">
        <div className='overlay'> </div>
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

      {/* Loan Advice Section */}
      <section className="loan-advice-section">
        <div className="section-header">
          <h2 className="section-title">Expert Loan Advice</h2>
          <p className="section-subtitle">
            Get personalized loan solutions tailored to your financial needs
          </p>
        </div>

        <div className="loan-tabs">
          <button
            className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Loans
          </button>
          <button
            className={`tab-btn ${activeTab === 'business' ? 'active' : ''}`}
            onClick={() => setActiveTab('business')}
          >
            Business Loans
          </button>
          <button
            className={`tab-btn ${activeTab === 'mortgage' ? 'active' : ''}`}
            onClick={() => setActiveTab('mortgage')}
          >
            Mortgage Advice
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'personal' && <PersonalLoanAdvice />}
          {activeTab === 'business' && <BusinessLoanAdvice />}
          {activeTab === 'mortgage' && <MortgageAdvice />}
        </div>

        <div className="loan-calculator-cta">
          <h3>Not sure what you need?</h3>
          <p>Try our loan calculator to find the best option for you</p>
          <Link to="/EMICalculator " style={{ color: "white", textDecoration: "none" }}>
            <button className="cta-button">Open Calculator</button>
          </Link>
        </div>
      </section>

      <section className="why-consultic-section">
        <div className="container">
          <h2 className="section-title">
            Why <span>Consultic advisor</span> is best ?
          </h2>
          <p className="section-subtitle">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim,
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-number">1754</h3>
              <p className="stat-label">Number of families</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">₹1754</h3>
              <p className="stat-label">Assets Managed</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">26</h3>
              <p className="stat-label">Full Time Advisors</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">40</h3>
              <p className="stat-label">Employees</p>
            </div>
          </div>
        </div>
      </section>

      {/* foooter section  */}

      <footer className="modern-footer">
        <div className="footer-top">
          <div className="footer-cta">
            <h2>Let us help you <span>Plan your future</span></h2>
            <p>
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus.
            </p>
            <button className="cta-button">
              Subscribe Now <span>&rarr;</span>
            </button>
          </div>

          <div className="footer-grid">
            <div className="footer-col">
              <h3>Financer</h3>
              <p className="footer-about">
                Advise Kubar Shatu provides comprehensive financial planning services to help you achieve your goals.
              </p>
              <div className="social-links">
                <a href="#"><FiFacebook /></a>
                <a href="#"><FiTwitter /></a>
                <a href="#"><FiInstagram /></a>
                <a href="#"><FiLinkedin /></a>
              </div>
            </div>

            <div className="footer-col">
              <h3>Our Company</h3>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">User Terms</a></li>
                <li><a href="#">Help Centre</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Contact</h3>
              <ul className="contact-info">
                <li><FiPhone /> +91 22048919</li>
                <li><FiMail /> info@advisekubarshatu.com</li>
                <li><FiMail /> support@advisekubarshatu.com</li>
                <li><FiMapPin /> Jindal Chowk 1121, Hisar, Haryana</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Advise Kubar Shatu. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>




    </div>









  );
};

export default Home;

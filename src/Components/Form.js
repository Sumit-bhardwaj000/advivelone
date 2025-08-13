import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    gender: "",
    date: "",
    place: "",
    work: "",
    monthlyIncome: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Submitted form:", form);
      alert("Registration successful!");
      setIsSubmitting(false);
    }, 1500);
  };

  const handleReset = () => {
    setForm({
      fname: "",
      lname: "",
      email: "",
      number: "",
      gender: "",
      date: "",
      place: "",
      work: "",
      monthlyIncome: "",
    });
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <div className="form-header">
          <h2>Create Your Account</h2>
          <p>Fill in your details to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-grid">
            {/* First Name */}
            <div className="form-group">
              <label htmlFor="fname">First Name <span className="required">*</span></label>
              <input
                id="fname"
                name="fname"
                value={form.fname}
                onChange={handleChange}
                placeholder="John"
                required
              />
            </div>

            {/* Last Name */}
            <div className="form-group">
              <label htmlFor="lname">Last Name <span className="required">*</span></label>
              <input
                id="lname"
                name="lname"
                value={form.lname}
                onChange={handleChange}
                placeholder="Doe"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group full-width">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="number">Phone Number</label>
              <input
                id="number"
                type="tel"
                name="number"
                value={form.number}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Gender */}
            <div className="form-group">
              <label>Gender</label>
              <div className="radio-group">
                {["Male", "Female", "Other"].map((option) => (
                  <label key={option} className="radio-option">
                    <input
                      type="radio"
                      name="gender"
                      value={option}
                      checked={form.gender === option}
                      onChange={handleChange}
                    />
                    <span className="radio-custom"></span>
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Date of Birth */}
            <div className="form-group">
              <label htmlFor="date">Date of Birth</label>
              <input
                id="date"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                max={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Place */}
            <div className="form-group">
              <label htmlFor="place">City/State</label>
              <input
                id="place"
                name="place"
                value={form.place}
                onChange={handleChange}
                placeholder="Mumbai, Maharashtra"
              />
            </div>

            {/* Occupation */}
            <div className="form-group full-width">
              <label htmlFor="work">Occupation</label>
              <select 
                id="work"
                name="work" 
                value={form.work} 
                onChange={handleChange}
              >
                <option value="">-- Select Occupation --</option>
                <option value="Student">Student</option>
                <option value="Employed">Employed</option>
                <option value="Self-Employed">Self-Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Monthly Income */}
            <div className="form-group full-width">
              <label htmlFor="monthlyIncome">Monthly Income (₹)</label>
              <div className="input-with-symbol">
                <span className="symbol">₹</span>
                <input
                  id="monthlyIncome"
                  type="number"
                  name="monthlyIncome"
                  value={form.monthlyIncome}
                  onChange={handleChange}
                  placeholder="35,000"
                  min="0"
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span> Processing...
                </>
              ) : (
                "Register Now"
              )}
            </button>
            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        /* Base Styles */
        .registration-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: #f8fafc;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .registration-card {
          width: 100%;
          max-width: 800px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          padding: 2.5rem;
          margin: 1rem;
        }

        .form-header {
          margin-bottom: 2rem;
          text-align: center;
        }

        .form-header h2 {
          color: #1e293b;
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .form-header p {
          color: #64748b;
          font-size: 0.95rem;
        }

        /* Form Grid Layout */
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .full-width {
          grid-column: span 2;
        }

        /* Form Elements */
        label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #334155;
        }

        .required {
          color: #ef4444;
        }

        input, select {
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          background-color: #f8fafc;
        }

        input:focus, select:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
          background-color: #ffffff;
        }

        /* Radio Buttons */
        .radio-group {
          display: flex;
          gap: 1rem;
          padding: 0.5rem 0;
        }

        .radio-option {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.875rem;
          color: #475569;
        }

        .radio-option input {
          display: none;
        }

        .radio-custom {
          width: 16px;
          height: 16px;
          border: 2px solid #cbd5e1;
          border-radius: 50%;
          display: inline-block;
          position: relative;
        }

        .radio-option input:checked + .radio-custom {
          border-color: #6366f1;
        }

        .radio-option input:checked + .radio-custom::after {
          content: '';
          width: 8px;
          height: 8px;
          background: #6366f1;
          border-radius: 50%;
          position: absolute;
          top: 2px;
          left: 2px;
        }

        /* Income Input */
        .input-with-symbol {
          position: relative;
        }

        .input-with-symbol .symbol {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          font-weight: 500;
        }

        .input-with-symbol input {
          padding-left: 2rem;
        }

        /* Buttons */
        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
          grid-column: span 2;
        }

        .submit-btn {
          flex: 1;
          padding: 0.875rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .submit-btn:hover {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          transform: translateY(-1px);
        }

        .submit-btn:disabled {
          opacity: 0.8;
          cursor: not-allowed;
          transform: none;
        }

        .reset-btn {
          flex: 0.5;
          padding: 0.875rem;
          background: transparent;
          color: #64748b;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .reset-btn:hover {
          background: #f1f5f9;
        }

        /* Spinner */
        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Responsive */
        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .full-width {
            grid-column: span 1;
          }
          
          .form-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
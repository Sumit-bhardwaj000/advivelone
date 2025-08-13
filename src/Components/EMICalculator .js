import React, { useState } from "react";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
    const N = parseFloat(tenure);

    if (P && R && N) {
      const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      setEmi(emiValue.toFixed(2));
    } else {
      setEmi(null);
      alert("Please fill all fields correctly");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>EMI Calculator</h2>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Loan Amount (₹)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="E.g. 500000"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Interest Rate (% per year)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="E.g. 8.5"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Tenure (Months)</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            placeholder="E.g. 60"
            style={styles.input}
          />
        </div>

        <button
          onClick={calculateEMI}
          style={styles.button}
        >
          Calculate EMI
        </button>

        {emi && (
          <div style={styles.resultContainer}>
            <h3 style={styles.resultTitle}>Monthly EMI</h3>
            <div style={styles.emiAmount}>₹{emi}</div>
            <div style={styles.disclaimer}>*This is an approximate calculation</div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop : "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f7fa",
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    width: "100%",
    maxWidth: "450px",
  },
  title: {
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "24px",
    fontWeight: "600",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    color: "#34495e",
    fontSize: "14px",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #dfe6e9",
    fontSize: "16px",
    transition: "border 0.3s",
    boxSizing: "border-box",
  },
  inputFocus: {
    border: "1px solid #3498db",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s",
    marginTop: "10px",
  },
  buttonHover: {
    backgroundColor: "#2980b9",
  },
  resultContainer: {
    marginTop: "25px",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    textAlign: "center",
  },
  resultTitle: {
    color: "#2c3e50",
    marginBottom: "10px",
    fontSize: "18px",
  },
  emiAmount: {
    color: "#27ae60",
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  disclaimer: {
    color: "#7f8c8d",
    fontSize: "12px",
    fontStyle: "italic",
  },
};

export default EMICalculator;
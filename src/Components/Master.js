import React from "react";  
import Home from "./Home";
import Navbar from "./Navbar";
import Servicepage from "./Servicepage";
import AboutPage from "./Aboutpage";
import ContactPage from "./ContactPage";
import Form from "./Form";
import EMICalculator from "./EMICalculator";


function Master() {
  return (
    <>
    <Home />    
    <Navbar />
    <Servicepage />
    <AboutPage />
    <ContactPage />
    <Form />
    <EMICalculator />
    </>
  );
}
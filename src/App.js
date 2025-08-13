import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import ServicePage from './Components/Servicepage';
import AboutPage from './Components/Aboutpage';
import ContactPage from './Components/ContactPage';
import Form from './Components/Form';
import EMICalculator  from "./Components/EMICalculator ";



function App() {
  return (
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Servicepage" element={<ServicePage />} />
          <Route path="/Aboutpage" element={<AboutPage />} />
          <Route path="/Contactpage" element={<ContactPage/>} />
          <Route path="/Form" element={<Form />} />
          <Route path="/EMICalculator" element={<EMICalculator />} />
          {/* Add more routes as needed */}
          
        </Routes>
      
    </Router>
  );
}

export default App;

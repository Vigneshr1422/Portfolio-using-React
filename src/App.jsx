import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Project from './Project';
import Certification from './Certification';
import CertificatePreview from './CertificatePreview'; // Certificate preview component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/project" element={<Project />} />
          <Route path="/certifications" element={<Certification />} />
          <Route path="/certification/:id" element={<CertificatePreview />} /> {/* Route for preview */}

        </Routes>
      </div>
    </Router>
  )
}

export default App
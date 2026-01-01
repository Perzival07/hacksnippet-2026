import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FaultyTerminal from './components/FaultyTerminal/FaultyTerminal';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import RegistrationForm from './pages/RegistrationForm/RegistrationForm';
import RulesPage from './pages/RulesPage/RulesPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* FaultyTerminal Background - Restored */}
        <div className="background">
          <FaultyTerminal
            scale={1.5}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={0.5}
            pause={false}
            scanlineIntensity={0.5}
            glitchAmount={1}
            flickerAmount={0.5}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0.2}
            tint="#e94560"
            mouseReact={true}
            mouseStrength={0.5}
            pageLoadAnimation={true}
            brightness={0.8}
            dpr={2}
          />
        </div>
        
        {/* Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/rules" element={<RulesPage />} />
          </Routes>
        </div>

        {/* Footer - shows on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
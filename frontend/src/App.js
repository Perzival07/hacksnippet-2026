import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import FaultyTerminal from './components/FaultyTerminal/FaultyTerminal';
import LandingPage from './pages/LandingPage/LandingPage';
import RegistrationForm from './pages/RegistrationForm/RegistrationForm';
import RulesPage from './pages/RulesPage/RulesPage';
import './App.css';

function AppContent() {
  const [isPaused, setIsPaused] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const glitchSoundRef = useRef(null);
  const location = useLocation();

  // Check if on registration or rules page
  const isFormOrRulesPage = location.pathname === '/register' || location.pathname === '/rules';

  // Preload glitch sound
  useEffect(() => {
    glitchSoundRef.current = new Audio('/sounds/glitch.wav');
    glitchSoundRef.current.volume = 0.3;
  }, []);

  // Glitch every 10 seconds - but NOT on registration or rules page
  useEffect(() => {
    // Don't run glitch on form or rules pages
    if (isFormOrRulesPage) {
      setIsPaused(false);
      setIsGlitching(false);
      return;
    }

    const interval = setInterval(() => {
      // Start glitch
      setIsPaused(true);
      setIsGlitching(true);

      // Play sound
      if (glitchSoundRef.current) {
        glitchSoundRef.current.currentTime = 0;
        glitchSoundRef.current.play().catch(() => { });
      }

      // End glitch after 1.5 seconds
      setTimeout(() => {
        setIsPaused(false);
        setIsGlitching(false);
      }, 1500);

    }, 10000);

    return () => clearInterval(interval);
  }, [isFormOrRulesPage]);

  return (
    <div className="app">
      {/* FaultyTerminal Background */}
      <div className="background">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={isPaused}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#61dca3"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={1}
        />
        <div className="background-overlay"></div>
      </div>

      {/* Dim overlay during glitch */}
      <div className={`glitch-dim-overlay ${isGlitching ? 'active' : ''}`}></div>

      {/* Content */}
      <div className={`content ${isGlitching ? 'glitching' : ''}`}>
        <Routes>
          <Route path="/" element={<LandingPage isGlitching={isGlitching} />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/rules" element={<RulesPage />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
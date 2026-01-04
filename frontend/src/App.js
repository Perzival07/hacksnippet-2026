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
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const glitchSoundRef = useRef(null);
  const location = useLocation();

  const isRegistrationPage = location.pathname === '/register';

  // Preload glitch sound
  useEffect(() => {
    glitchSoundRef.current = new Audio('/sounds/glitch.wav');
    glitchSoundRef.current.volume = 0.3;

    // Preload audio
    glitchSoundRef.current.load();
  }, []);

  // Unlock audio on first user interaction (for mobile)
  useEffect(() => {
    const unlockAudio = () => {
      if (glitchSoundRef.current && !audioUnlocked) {
        // Play and immediately pause to unlock audio
        glitchSoundRef.current.play().then(() => {
          glitchSoundRef.current.pause();
          glitchSoundRef.current.currentTime = 0;
          setAudioUnlocked(true);
        }).catch(() => {
          // Silent fail - will try again on next interaction
        });
      }
    };

    // Listen for any user interaction
    document.addEventListener('touchstart', unlockAudio, { once: true });
    document.addEventListener('click', unlockAudio, { once: true });
    document.addEventListener('scroll', unlockAudio, { once: true });

    return () => {
      document.removeEventListener('touchstart', unlockAudio);
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('scroll', unlockAudio);
    };
  }, [audioUnlocked]);

  // Glitch effect
  useEffect(() => {
    if (isRegistrationPage) {
      setIsPaused(false);
      setIsGlitching(false);
      return;
    }

    const interval = setInterval(() => {
      setIsPaused(true);
      setIsGlitching(true);

      // Play sound (will only work if audio is unlocked)
      if (glitchSoundRef.current) {
        glitchSoundRef.current.currentTime = 0;
        glitchSoundRef.current.play().catch(() => { });
      }

      setTimeout(() => {
        setIsPaused(false);
        setIsGlitching(false);
      }, 1500);

    }, 10000);

    return () => clearInterval(interval);
  }, [isRegistrationPage]);

  return (
    <div className="app">
      {/* Tap to enable sound overlay - only on mobile */}
      {!audioUnlocked && (
        <div className="audio-unlock-hint">
          Tap anywhere to enable sound
        </div>
      )}

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
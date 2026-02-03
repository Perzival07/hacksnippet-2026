import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage({ isGlitching }) {
  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="logo-container">
            <img
              src="/logo.svg"
              alt="HackSnippet Logo"
              className={`logo ${isGlitching ? 'glitching' : ''}`}
            />
          </div>
          <h1>HackSnippet 4.0</h1>
          <p className="tagline">From Zero to Prototype</p>
          <p className="description">
            First year? First hackathon? No problem. You've got 8 hours, a team of friends, and mentors to help. Come build something — even if it breaks. That's how legends start.
          </p>
          <div className="hero-buttons">
            <Link to="/login" className="login-btn">
              Login
            </Link>
            <Link to="/register" className="register-btn">
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
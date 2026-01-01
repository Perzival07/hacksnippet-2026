import React from 'react';
import { Link } from 'react-router-dom';
import CurvedLoop from '../../components/CurvedLoop/CurvedLoop';
import TextType from '../../components/TextType/TextType';
import StarBorder from '../../components/StarBorder/StarBorder';
import './LandingPage.css';

function LandingPage() {
  // Timing calculations
  const titleText = "HackSnippet 2026";
  const taglineText = "Code. Create. Conquer.";
  const descriptionText = "Join the ultimate hackathon where innovation meets execution. Build something amazing and showcase your skills.";

  const titleSpeed = 180;
  const taglineSpeed = 100;
  const descriptionSpeed = 25;

  const initialDelay = 800;
  const buffer = 500; // Pause between animations

  // Calculate delays
  const titleDuration = titleText.length * titleSpeed;
  const taglineDelay = initialDelay + titleDuration + buffer;
  
  const taglineDuration = taglineText.length * taglineSpeed;
  const descriptionDelay = taglineDelay + taglineDuration + buffer;

  return (
    <div className="landing">
      {/* Curved Banner at Top */}
      <div className="banner-container">
        <CurvedLoop
          marqueeText="🔥 REGISTRATIONS OPEN ✦ JOIN NOW ✦ HACKSNIPPET 2026 ✦ "
          speed={2}
          curveAmount={60}
          direction="left"
          interactive={true}
        />
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <TextType
              text={[titleText]}
              typingSpeed={titleSpeed}
              initialDelay={initialDelay}
              showCursor={true}
              cursorCharacter="_"
              loop={false}
              className="title-typing"
            />
          </h1>
          <p className="tagline">
            <TextType
              text={[taglineText]}
              typingSpeed={taglineSpeed}
              initialDelay={taglineDelay}
              showCursor={true}
              cursorCharacter="_"
              loop={false}
              className="tagline-typing"
            />
          </p>
          <p className="description">
            <TextType
              text={[descriptionText]}
              typingSpeed={descriptionSpeed}
              initialDelay={descriptionDelay}
              showCursor={true}
              cursorCharacter="_"
              loop={false}
              className="description-typing"
            />
          </p>
          <div className="hero-buttons">
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <StarBorder
                as="div"
                color="#e94560"
                speed="4s"
                thickness={2}
              >
                Register Now 🚀
              </StarBorder>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer is now a shared component (removed from here) */}
    </div>
  );
}

export default LandingPage;
import React from 'react';
import { Link } from 'react-router-dom';
import './RulesPage.css';

function RulesPage() {
  return (
    <div className="rules-page">
      <div className="container">
        <Link to="/" className="back-link">← Back to Home</Link>

        <header>
          <h1>📜 Rules & Code of Conduct</h1>
          <p>Hack Snippet 4.0 - Official Guidelines</p>
        </header>

        <div className="rules-content">

          {/* General Rules */}
          <section className="rules-section">
            <h2>🎯 General Rules</h2>
            <ul>
              <li>
                <strong>Team Size:</strong> Each team must have a minimum of 1 member and a maximum of 5 members.
              </li>
              <li>
                <strong>Eligibility:</strong> All team members must be currently enrolled students with valid college ID.
              </li>
              <li>
                <strong>Registration:</strong> Teams must register before the deadline. Late registrations will not be accepted.
              </li>
              <li>
                <strong>Duration:</strong> The hackathon will run for 24 hours. All submissions must be made within this timeframe.
              </li>
              <li>
                <strong>Project Start:</strong> All coding and development must begin after the official start time. Pre-built projects are not allowed.
              </li>
              <li>
                <strong>Tools & Resources:</strong> You may use any programming language, framework, or tool of your choice.
              </li>
              <li>
                <strong>External Libraries:</strong> Open-source libraries and APIs are permitted, but must be properly credited.
              </li>
              <li>
                <strong>Submissions:</strong> All projects must be submitted through the official submission portal before the deadline.
              </li>
            </ul>
          </section>

          {/* Code of Conduct */}
          <section className="rules-section">
            <h2>🤝 Code of Conduct</h2>
            <p className="section-intro">
              HackSnippet is dedicated to providing a harassment-free experience for everyone. We expect all participants to adhere to the following guidelines:
            </p>
            <ul>
              <li>
                <strong>Respect:</strong> Treat all participants, mentors, judges, and organizers with respect and kindness.
              </li>
              <li>
                <strong>Inclusivity:</strong> Be inclusive and welcoming to people of all backgrounds, identities, and experience levels.
              </li>
              <li>
                <strong>Collaboration:</strong> Foster a collaborative environment. Help others when you can and ask for help when you need it.
              </li>
              <li>
                <strong>No Harassment:</strong> Harassment of any kind will not be tolerated. This includes offensive comments, intimidation, stalking, or unwelcome physical contact.
              </li>
              <li>
                <strong>Professional Behavior:</strong> Maintain professional conduct throughout the event. Avoid disruptive behavior.
              </li>
              <li>
                <strong>Venue Rules:</strong> Follow all venue rules and instructions from organizers and security personnel.
              </li>
            </ul>
          </section>

          {/* Judging Criteria */}
          <section className="rules-section">
            <h2>⚖️ Judging Criteria</h2>
            <div className="criteria-grid">
              <div className="criteria-card">
                <span className="criteria-icon">💡</span>
                <h4>Innovation</h4>
                <p>Originality and creativity of the idea</p>
                <span className="criteria-weight">25%</span>
              </div>
              <div className="criteria-card">
                <span className="criteria-icon">🔧</span>
                <h4>Technical Implementation</h4>
                <p>Quality of code and technical complexity</p>
                <span className="criteria-weight">25%</span>
              </div>
              <div className="criteria-card">
                <span className="criteria-icon">🎨</span>
                <h4>Design & UX</h4>
                <p>User interface and user experience</p>
                <span className="criteria-weight">20%</span>
              </div>
              <div className="criteria-card">
                <span className="criteria-icon">🌍</span>
                <h4>Impact</h4>
                <p>Potential real-world impact and scalability</p>
                <span className="criteria-weight">20%</span>
              </div>
              <div className="criteria-card">
                <span className="criteria-icon">🎤</span>
                <h4>Presentation</h4>
                <p>Clarity and effectiveness of demo</p>
                <span className="criteria-weight">10%</span>
              </div>
            </div>
          </section>

          {/* Originality & Plagiarism */}
          <section className="rules-section highlight-section">
            <h2>✍️ Originality & Plagiarism Declaration</h2>
            <div className="declaration-box">
              <p>
                By participating in Hack Snippet 4.0, you declare and agree that:
              </p>
              <ul>
                <li>
                  All work submitted is <strong>original</strong> and created by your team during the hackathon.
                </li>
                <li>
                  You have not copied, plagiarized, or used any pre-existing projects or code without proper attribution.
                </li>
                <li>
                  Any third-party libraries, APIs, or assets used are properly credited and comply with their respective licenses.
                </li>
                <li>
                  Violation of this declaration may result in <strong>immediate disqualification</strong> and may affect future participation.
                </li>
              </ul>
              <div className="warning-box">
                ⚠️ <strong>Warning:</strong> Plagiarism detection tools will be used to verify the originality of all submissions.
              </div>
            </div>
          </section>

          {/* Data Privacy */}
          <section className="rules-section highlight-section">
            <h2>🔒 Data Privacy & Collection</h2>
            <div className="declaration-box">
              <p>
                By registering for Hack Snippet 4.0, you consent to the following:
              </p>
              <ul>
                <li>
                  <strong>Data Collection:</strong> We collect personal information (name, email, phone, college details) for registration and communication purposes.
                </li>
                <li>
                  <strong>Data Usage:</strong> Your data will be used to:
                  <ul className="nested-list">
                    <li>Process your registration and team formation</li>
                    <li>Send event updates, schedules, and announcements</li>
                    <li>Contact you regarding the hackathon</li>
                    <li>Issue certificates and prizes</li>
                  </ul>
                </li>
                <li>
                  <strong>Data Sharing:</strong> Your information may be shared with:
                  <ul className="nested-list">
                    <li>Event sponsors (with your consent)</li>
                    <li>Judges for evaluation purposes</li>
                    <li>College administration as required</li>
                  </ul>
                </li>
                <li>
                  <strong>Data Protection:</strong> We implement appropriate security measures to protect your personal information.
                </li>
                <li>
                  <strong>Data Retention:</strong> Your data will be retained for a period of 2 years after the event for record-keeping purposes.
                </li>
              </ul>
            </div>
          </section>

          {/* Photo/Video Consent */}
          <section className="rules-section highlight-section">
            <h2>📸 Photo & Video Recording Consent</h2>
            <div className="declaration-box">
              <p>
                By participating in Hack Snippet 4.0, you consent to the following:
              </p>
              <ul>
                <li>
                  <strong>Recording:</strong> Photos and videos will be taken during the event by official photographers and organizers.
                </li>
                <li>
                  <strong>Usage:</strong> These recordings may be used for:
                  <ul className="nested-list">
                    <li>Social media promotion (Instagram, LinkedIn, Twitter, etc.)</li>
                    <li>College website and promotional materials</li>
                    <li>Future event marketing</li>
                    <li>Documentation and reporting</li>
                    <li>Press and media coverage</li>
                  </ul>
                </li>
                <li>
                  <strong>Live Streaming:</strong> Parts of the event may be live-streamed on various platforms.
                </li>
                <li>
                  <strong>No Compensation:</strong> You agree that no compensation will be provided for the use of your likeness.
                </li>
                <li>
                  <strong>Opt-Out:</strong> If you do not wish to be photographed/recorded, please inform the organizers in advance.
                </li>
              </ul>
            </div>
          </section>

          {/* Disqualification */}
          <section className="rules-section">
            <h2>🚫 Grounds for Disqualification</h2>
            <ul className="disqualification-list">
              <li>Plagiarism or submitting pre-built projects</li>
              <li>Violation of the Code of Conduct</li>
              <li>Harassment or discriminatory behavior</li>
              <li>Cheating or unfair practices</li>
              <li>Submitting after the deadline</li>
              <li>Providing false information during registration</li>
              <li>Damaging venue property or equipment</li>
              <li>Any illegal or unethical activities</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="rules-section">
            <h2>📞 Contact & Support</h2>
            <p>
              If you have any questions about these rules or need assistance, please contact:
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span>📧</span>
                <span>hacksnippet@college.edu</span>
              </div>
              <div className="contact-item">
                <span>📱</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <span>🌐</span>
                <span>hacksnippet.college.edu</span>
              </div>
            </div>
          </section>

          {/* Agreement */}
          <section className="agreement-section">
            <p>
              By registering for Hack Snippet 4.0, you acknowledge that you have read, understood, and agree to abide by all the rules, code of conduct, and declarations mentioned above.
            </p>
            <Link to="/register" className="btn btn-primary">
              Proceed to Registration
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
}

export default RulesPage;
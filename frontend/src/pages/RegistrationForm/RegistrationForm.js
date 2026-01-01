import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarBorder from '../../components/StarBorder/StarBorder';
import './RegistrationForm.css';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz8bdf8eSldGLKOoGzqS94qaOxe8AeQnhFxVb-G22Nv8w7LeP-V9DP0Q5aZUL_Wlhwy/exec';

const ROLES = [
  'Frontend Developer',
  'Backend Developer',
  'ML Engineer',
  'UI/UX Designer',
  'Presenter',
  'Full Stack Developer',
  'Data Analyst'
];

const CATEGORIES = [
  'AI / Machine Learning',
  'Web Development',
  'Mobile App',
  'IoT / Hardware',
  'Blockchain',
  'Social Impact',
  'FinTech',
  'HealthTech',
  'EdTech',
  'Cybersecurity',
  'Other'
];

const DEPARTMENTS = [
  'CSE',
  'CSE (AI & ML)',
  'CSE (Data Science)',
  'CSE (Cybersecurity)',
  'IT',
  'ECE',
  'EE',
  'ME',
  'CE',
  'Other'
];

function RegistrationForm() {
  const [teamSize, setTeamSize] = useState(5);
  const [showMember6, setShowMember6] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    // Team Details
    teamName: '',
    teamSize: 5,

    // Leader (Member 1)
    leader: {
      fullName: '',
      rollNumber: '',
      department: '',
      email: '',
      phone: '',
      role: 'Leader',
      skills: ''
    },

    // Members 2-6
    members: [
      { fullName: '', rollNumber: '', department: '', email: '', phone: '', role: '', skills: '' },
      { fullName: '', rollNumber: '', department: '', email: '', phone: '', role: '', skills: '' },
      { fullName: '', rollNumber: '', department: '', email: '', phone: '', role: '', skills: '' },
      { fullName: '', rollNumber: '', department: '', email: '', phone: '', role: '', skills: '' },
      { fullName: '', rollNumber: '', department: '', email: '', phone: '', role: '', skills: '' }
    ],

    // Project Idea
    ideaTitle: '',
    category: '',
    problemStatement: '',
    ideaDescription: '',
    techStack: '',
    expectedOutcome: '',

    // Declarations
    agreeRules: false,

    // Experience
    previousExperience: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleTeamSizeChange = (e) => {
    const size = parseInt(e.target.value);
    setTeamSize(size);
    setFormData(prev => ({ ...prev, teamSize: size }));
    
    // Hide member 6 if team size is reduced to 5
    if (size === 5) {
      setShowMember6(false);
    }
  };

  const handleLeaderChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      leader: { ...prev.leader, [name]: value }
    }));

    if (errors[`leader_${name}`]) {
      setErrors(prev => ({ ...prev, [`leader_${name}`]: '' }));
    }
  };

  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newMembers = [...prev.members];
      newMembers[index] = { ...newMembers[index], [name]: value };
      return { ...prev, members: newMembers };
    });

    if (errors[`member${index + 2}_${name}`]) {
      setErrors(prev => ({ ...prev, [`member${index + 2}_${name}`]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Team Details
    if (!formData.teamName.trim()) newErrors.teamName = 'Team name is required';

    // Leader validation
    if (!formData.leader.fullName.trim()) newErrors.leader_fullName = 'Leader name is required';
    if (!formData.leader.rollNumber.trim()) newErrors.leader_rollNumber = 'Roll number is required';
    if (!formData.leader.department) newErrors.leader_department = 'Department is required';
    if (!formData.leader.email.trim()) {
      newErrors.leader_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.leader.email)) {
      newErrors.leader_email = 'Invalid email format';
    }
    if (!formData.leader.phone.trim()) {
      newErrors.leader_phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.leader.phone.replace(/\D/g, ''))) {
      newErrors.leader_phone = 'Invalid phone number (10 digits required)';
    }

    // Members validation (Members 2-5 are always required, Member 6 is optional)
    const rollNumbers = [formData.leader.rollNumber];
    
    // Validate Members 2-5 (always required)
    for (let i = 0; i < 4; i++) {
      const member = formData.members[i];
      const memberNum = i + 2;

      if (!member.fullName.trim()) newErrors[`member${memberNum}_fullName`] = `Member ${memberNum} name is required`;
      if (!member.rollNumber.trim()) {
        newErrors[`member${memberNum}_rollNumber`] = `Roll number is required`;
      } else if (rollNumbers.includes(member.rollNumber)) {
        newErrors[`member${memberNum}_rollNumber`] = `Roll number must be unique`;
      } else {
        rollNumbers.push(member.rollNumber);
      }
      if (!member.department) newErrors[`member${memberNum}_department`] = `Department is required`;
      if (!member.email.trim()) {
        newErrors[`member${memberNum}_email`] = `Email is required`;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(member.email)) {
        newErrors[`member${memberNum}_email`] = `Invalid email format`;
      }
      if (!member.phone.trim()) {
        newErrors[`member${memberNum}_phone`] = `Phone number is required`;
      }
      if (!member.role) newErrors[`member${memberNum}_role`] = `Role is required`;
    }

    // Member 6 validation (only if shown and has data)
    if (showMember6 && formData.members[4].fullName.trim()) {
      const member6 = formData.members[4];
      if (rollNumbers.includes(member6.rollNumber) && member6.rollNumber) {
        newErrors.member6_rollNumber = 'Roll number must be unique';
      }
    }

    // Project Idea validation
    if (!formData.ideaTitle.trim()) newErrors.ideaTitle = 'Idea title is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.problemStatement.trim()) newErrors.problemStatement = 'Problem statement is required';
    if (!formData.ideaDescription.trim()) newErrors.ideaDescription = 'Idea description is required';

    // Declarations validation
    if (!formData.agreeRules) newErrors.agreeRules = 'You must agree to the rules';

    // Experience
    if (!formData.previousExperience) newErrors.previousExperience = 'Please select an option';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({ type: 'error', message: 'Please fix the errors above.' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Flatten data for Google Sheets
      const flatData = {
        teamName: formData.teamName,
        teamSize: showMember6 ? 6 : 5,
        
        // Leader
        leaderName: formData.leader.fullName,
        leaderRoll: formData.leader.rollNumber,
        leaderDept: formData.leader.department,
        leaderEmail: formData.leader.email,
        leaderPhone: formData.leader.phone,
        leaderSkills: formData.leader.skills,

        // Members 2-6
        ...formData.members.reduce((acc, member, i) => {
          const num = i + 2;
          acc[`member${num}Name`] = member.fullName;
          acc[`member${num}Roll`] = member.rollNumber;
          acc[`member${num}Dept`] = member.department;
          acc[`member${num}Email`] = member.email;
          acc[`member${num}Phone`] = member.phone;
          acc[`member${num}Role`] = member.role;
          acc[`member${num}Skills`] = member.skills;
          return acc;
        }, {}),

        // Project
        ideaTitle: formData.ideaTitle,
        category: formData.category,
        problemStatement: formData.problemStatement,
        ideaDescription: formData.ideaDescription,
        techStack: formData.techStack,
        expectedOutcome: formData.expectedOutcome,

        // Declarations
        agreeRules: formData.agreeRules,

        // Experience
        previousExperience: formData.previousExperience
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(flatData)
      });

      setSubmitStatus({ type: 'success', message: '🎉 Registration successful! Good luck with the hackathon!' });
      
      // Reset form
      setFormData({
        teamName: '',
        teamSize: 5,
        leader: { fullName: '', rollNumber: '', department: '', email: '', phone: '', role: 'Leader', skills: '' },
        members: Array(5).fill().map(() => ({ fullName: '', rollNumber: '', department: '', email: '', phone: '', role: '', skills: '' })),
        ideaTitle: '',
        category: '',
        problemStatement: '',
        ideaDescription: '',
        techStack: '',
        expectedOutcome: '',
        agreeRules: false,
        previousExperience: ''
      });
      setTeamSize(5);
      setShowMember6(false);
      
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderMemberFields = (index, isRequired = true) => {
    const memberNum = index + 2;
    const member = formData.members[index];

    return (
      <div className="member-card" key={index}>
        <h4>
          👤 Member {memberNum} {!isRequired && '(Optional)'}
          {!isRequired && (
            <button 
              type="button" 
              className="remove-member-btn"
              onClick={() => {
                setShowMember6(false);
                // Clear member 6 data
                setFormData(prev => {
                  const newMembers = [...prev.members];
                  newMembers[4] = { fullName: '', rollNumber: '', department: '', email: '', phone: '', role: '', skills: '' };
                  return { ...prev, members: newMembers };
                });
              }}
            >
              ✕ Remove
            </button>
          )}
        </h4>

        <div className="form-row">
          <div className="form-group">
            <label>Full Name {isRequired && '*'}</label>
            <input
              type="text"
              name="fullName"
              value={member.fullName}
              onChange={(e) => handleMemberChange(index, e)}
              placeholder="Full name"
            />
            {errors[`member${memberNum}_fullName`] && <span className="error">{errors[`member${memberNum}_fullName`]}</span>}
          </div>
          <div className="form-group">
            <label>Roll Number {isRequired && '*'}</label>
            <input
              type="text"
              name="rollNumber"
              value={member.rollNumber}
              onChange={(e) => handleMemberChange(index, e)}
              placeholder="Roll / Registration number"
            />
            {errors[`member${memberNum}_rollNumber`] && <span className="error">{errors[`member${memberNum}_rollNumber`]}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Department {isRequired && '*'}</label>
            <select
              name="department"
              value={member.department}
              onChange={(e) => handleMemberChange(index, e)}
            >
              <option value="">Select department</option>
              {DEPARTMENTS.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            {errors[`member${memberNum}_department`] && <span className="error">{errors[`member${memberNum}_department`]}</span>}
          </div>
          <div className="form-group">
            <label>College Email {isRequired && '*'}</label>
            <input
              type="email"
              name="email"
              value={member.email}
              onChange={(e) => handleMemberChange(index, e)}
              placeholder="college@email.com"
            />
            {errors[`member${memberNum}_email`] && <span className="error">{errors[`member${memberNum}_email`]}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number {isRequired && '*'}</label>
            <input
              type="tel"
              name="phone"
              value={member.phone}
              onChange={(e) => handleMemberChange(index, e)}
              placeholder="10-digit phone number"
            />
            {errors[`member${memberNum}_phone`] && <span className="error">{errors[`member${memberNum}_phone`]}</span>}
          </div>
          <div className="form-group">
            <label>Role in Team {isRequired && '*'}</label>
            <select
              name="role"
              value={member.role}
              onChange={(e) => handleMemberChange(index, e)}
            >
              <option value="">Select role</option>
              {ROLES.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            {errors[`member${memberNum}_role`] && <span className="error">{errors[`member${memberNum}_role`]}</span>}
          </div>
        </div>

        <div className="form-group">
          <label>Skills / Technologies (Optional)</label>
          <input
            type="text"
            name="skills"
            value={member.skills}
            onChange={(e) => handleMemberChange(index, e)}
            placeholder="e.g., React, Python, TensorFlow"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="registration-page">
      <div className="container">
        <Link to="/" className="back-link">← Back to Home</Link>

        <header>
          <h1> Team Registration</h1>
          <p>Register your team for HackSnippet 2026</p>
        </header>

        <form onSubmit={handleSubmit} className="form">

          {/* Team Details */}
          <h2>👥 Team Details</h2>

          <div className="form-row">
            <div className="form-group">
              <label>Team Name *</label>
              <input
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                placeholder="Your awesome team name"
              />
              {errors.teamName && <span className="error">{errors.teamName}</span>}
            </div>
            <div className="form-group">
              <label>Team Size *</label>
              <select
                name="teamSize"
                value={teamSize}
                onChange={handleTeamSizeChange}
              >
                <option value={5}>5 Members</option>
                <option value={6}>6 Members</option>
              </select>
              <span className="field-note">Minimum 5 members required</span>
            </div>
          </div>

          {/* Team Leader */}
          <h2>👤 Team Leader (Member 1)</h2>

          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.leader.fullName}
                onChange={handleLeaderChange}
                placeholder="Full name"
              />
              {errors.leader_fullName && <span className="error">{errors.leader_fullName}</span>}
            </div>
            <div className="form-group">
              <label>Roll Number *</label>
              <input
                type="text"
                name="rollNumber"
                value={formData.leader.rollNumber}
                onChange={handleLeaderChange}
                placeholder="Roll / Registration number"
              />
              {errors.leader_rollNumber && <span className="error">{errors.leader_rollNumber}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Department *</label>
              <select
                name="department"
                value={formData.leader.department}
                onChange={handleLeaderChange}
              >
                <option value="">Select department</option>
                {DEPARTMENTS.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              {errors.leader_department && <span className="error">{errors.leader_department}</span>}
            </div>
            <div className="form-group">
              <label>College Email *</label>
              <input
                type="email"
                name="email"
                value={formData.leader.email}
                onChange={handleLeaderChange}
                placeholder="college@email.com"
              />
              {errors.leader_email && <span className="error">{errors.leader_email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.leader.phone}
                onChange={handleLeaderChange}
                placeholder="10-digit phone number"
              />
              {errors.leader_phone && <span className="error">{errors.leader_phone}</span>}
            </div>
            <div className="form-group">
              <label>Role in Team</label>
              <input
                type="text"
                value="Team Leader"
                disabled
                className="disabled-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Skills / Technologies (Optional)</label>
            <input
              type="text"
              name="skills"
              value={formData.leader.skills}
              onChange={handleLeaderChange}
              placeholder="e.g., React, Python, TensorFlow"
            />
          </div>

          {/* Team Members */}
          <h2>👥 Team Members</h2>
          <p className="section-note">Members 2-5 are required. Member 6 is optional.</p>

          {/* Render Members 2-5 (Required) */}
          {[0, 1, 2, 3].map((index) => renderMemberFields(index, true))}

          {/* Optional Member 6 */}
          {!showMember6 && (
            <button
              type="button"
              className="add-member-btn"
              onClick={() => setShowMember6(true)}
            >
              + Add Optional Member 6
            </button>
          )}

          {showMember6 && renderMemberFields(4, false)}

          {/* Project Idea */}
          <h2>💡 Project Idea</h2>

          <div className="form-row">
            <div className="form-group">
              <label>Idea Title *</label>
              <input
                type="text"
                name="ideaTitle"
                value={formData.ideaTitle}
                onChange={handleChange}
                placeholder="Your project title"
              />
              {errors.ideaTitle && <span className="error">{errors.ideaTitle}</span>}
            </div>
            <div className="form-group">
              <label>Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select category</option>
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && <span className="error">{errors.category}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Problem Statement *</label>
            <textarea
              name="problemStatement"
              value={formData.problemStatement}
              onChange={handleChange}
              rows="3"
              placeholder="What problem are you solving?"
            />
            {errors.problemStatement && <span className="error">{errors.problemStatement}</span>}
          </div>

          <div className="form-group">
            <label>Idea Description *</label>
            <textarea
              name="ideaDescription"
              value={formData.ideaDescription}
              onChange={handleChange}
              rows="5"
              placeholder="Describe your solution in detail..."
            />
            {errors.ideaDescription && <span className="error">{errors.ideaDescription}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Proposed Tech Stack (Optional)</label>
              <input
                type="text"
                name="techStack"
                value={formData.techStack}
                onChange={handleChange}
                placeholder="e.g., React, Node.js, MongoDB"
              />
            </div>
            <div className="form-group">
              <label>Expected Outcome (Optional)</label>
              <input
                type="text"
                name="expectedOutcome"
                value={formData.expectedOutcome}
                onChange={handleChange}
                placeholder="Expected impact of your project"
              />
            </div>
          </div>

          {/* Declarations */}
          <h2>📄 Declarations & Consent</h2>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreeRules"
                checked={formData.agreeRules}
                onChange={handleChange}
              />
              <span>
                I agree to the <Link to="/rules" className="rules-link" target="_blank">Hackathon Rules & Code of Conduct</Link> *
              </span>
            </label>
            {errors.agreeRules && <span className="error">{errors.agreeRules}</span>}
          </div>


          {/* Experience */}
          <h2>🏆 Previous Experience</h2>

          <div className="form-group">
            <label>Have you participated in hackathons before? *</label>
            <div className="radio-group">
              <div className="radio-option">
                <input
                  type="radio"
                  id="experienceYes"
                  name="previousExperience"
                  value="Yes"
                  checked={formData.previousExperience === 'Yes'}
                  onChange={handleChange}
                />
                <label htmlFor="experienceYes">Yes</label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  id="experienceNo"
                  name="previousExperience"
                  value="No"
                  checked={formData.previousExperience === 'No'}
                  onChange={handleChange}
                />
                <label htmlFor="experienceNo">No</label>
              </div>
            </div>
            {errors.previousExperience && <span className="error">{errors.previousExperience}</span>}
          </div>

          {/* Status Message */}
          {submitStatus && (
            <div className={`message ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          {/* Submit Button */}
          <div className="submit-btn-container">
            <StarBorder
              as="button"
              type="submit"
              disabled={isSubmitting}
              color="#e94560"
              speed="4s"
              thickness={2}
            >
              {isSubmitting ? 'Submitting...' : '🚀 Register Team'}
            </StarBorder>
          </div>

        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
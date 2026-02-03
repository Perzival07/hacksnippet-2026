import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationForm.css';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzU2ebbPjJXA6EcEmsZaF4FirKpWo9JSIghcOXbUTOg07qeEctZXF9iQgAMa51Pb1hm/exec';

function RegistrationForm() {
  const [formState, setFormState] = useState({
    teamName: '',
    teamSize: 1,

    // Leader
    leaderName: '',
    leaderRoll: '',
    leaderDept: '',
    leaderEmail: '',
    leaderPhone: '',
    leaderSkills: '',

    // Members array (for members 2-5)
    members: [
      { name: '', roll: '', dept: '', email: '', phone: '', role: '', skills: '' },
      { name: '', roll: '', dept: '', email: '', phone: '', role: '', skills: '' },
      { name: '', roll: '', dept: '', email: '', phone: '', role: '', skills: '' },
      { name: '', roll: '', dept: '', email: '', phone: '', role: '', skills: '' },
    ],

    // Project
    ideaTitle: '',
    category: '',
    problemStatement: '',
    ideaDescription: '',
    techStack: '',
    expectedOutcome: '',

    // Agreements
    agreeRules: false,
    previousExperience: 'No',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);

  const departments = [
    'CSE',
    'CSE (AI & ML)',
    'CSE (DS)',
    'CSE (CS)',
    'ECE',
    'EE',
    'ME',
    'CE',
    'Other'
  ];

  const categories = [
    'AI / Machine Learning',
    'Web Development',
    'Mobile App',
    'IoT / Hardware',
    'Blockchain',
    'Game Development',
    'Cybersecurity',
    'Other'
  ];

  const roles = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'UI/UX Designer',
    'ML Engineer',
    'Data Scientist',
    'DevOps',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleMemberChange = (index, field, value) => {
    setFormState(prev => {
      const newMembers = [...prev.members];
      newMembers[index] = { ...newMembers[index], [field]: value };
      return { ...prev, members: newMembers };
    });
  };

  const handleTeamSizeChange = (e) => {
    const size = parseInt(e.target.value);
    setFormState(prev => ({ ...prev, teamSize: size }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Team Name
    if (!formState.teamName.trim()) {
      newErrors.teamName = 'Team name is required';
    }

    // Leader validation
    if (!formState.leaderName.trim()) newErrors.leaderName = 'Leader name is required';
    if (!formState.leaderRoll.trim()) newErrors.leaderRoll = 'Roll number is required';
    if (!formState.leaderDept) newErrors.leaderDept = 'Department is required';
    if (!formState.leaderEmail.trim()) {
      newErrors.leaderEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.leaderEmail)) {
      newErrors.leaderEmail = 'Invalid email format';
    }
    if (!formState.leaderPhone.trim()) {
      newErrors.leaderPhone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formState.leaderPhone)) {
      newErrors.leaderPhone = 'Phone must be 10 digits';
    }

    // Validate members based on team size
    for (let i = 0; i < formState.teamSize - 1; i++) {
      const member = formState.members[i];
      const memberNum = i + 2;

      if (!member.name.trim()) newErrors[`member${memberNum}Name`] = 'Name is required';
      if (!member.roll.trim()) newErrors[`member${memberNum}Roll`] = 'Roll is required';
      if (!member.dept) newErrors[`member${memberNum}Dept`] = 'Department is required';
      if (!member.email.trim()) {
        newErrors[`member${memberNum}Email`] = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(member.email)) {
        newErrors[`member${memberNum}Email`] = 'Invalid email';
      }
      if (!member.phone.trim()) {
        newErrors[`member${memberNum}Phone`] = 'Phone is required';
      } else if (!/^\d{10}$/.test(member.phone)) {
        newErrors[`member${memberNum}Phone`] = 'Phone must be 10 digits';
      }
    }

    // Project validation
    if (!formState.ideaTitle.trim()) newErrors.ideaTitle = 'Project title is required';
    if (!formState.category) newErrors.category = 'Category is required';
    if (!formState.problemStatement.trim()) newErrors.problemStatement = 'Problem statement is required';
    if (!formState.ideaDescription.trim()) newErrors.ideaDescription = 'Description is required';

    // Agreement
    if (!formState.agreeRules) newErrors.agreeRules = 'You must agree to the rules';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setMessage({ type: 'error', text: 'Please fix the errors above' });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    // Build form data
    const formData = {
      teamName: formState.teamName,
      teamSize: formState.teamSize,

      // Leader
      leaderName: formState.leaderName,
      leaderRoll: formState.leaderRoll,
      leaderDept: formState.leaderDept,
      leaderEmail: formState.leaderEmail,
      leaderPhone: formState.leaderPhone,
      leaderSkills: formState.leaderSkills,

      // Member 2
      member2Name: formState.teamSize >= 2 ? formState.members[0].name : '',
      member2Roll: formState.teamSize >= 2 ? formState.members[0].roll : '',
      member2Dept: formState.teamSize >= 2 ? formState.members[0].dept : '',
      member2Email: formState.teamSize >= 2 ? formState.members[0].email : '',
      member2Phone: formState.teamSize >= 2 ? formState.members[0].phone : '',
      member2Role: formState.teamSize >= 2 ? formState.members[0].role : '',
      member2Skills: formState.teamSize >= 2 ? formState.members[0].skills : '',

      // Member 3
      member3Name: formState.teamSize >= 3 ? formState.members[1].name : '',
      member3Roll: formState.teamSize >= 3 ? formState.members[1].roll : '',
      member3Dept: formState.teamSize >= 3 ? formState.members[1].dept : '',
      member3Email: formState.teamSize >= 3 ? formState.members[1].email : '',
      member3Phone: formState.teamSize >= 3 ? formState.members[1].phone : '',
      member3Role: formState.teamSize >= 3 ? formState.members[1].role : '',
      member3Skills: formState.teamSize >= 3 ? formState.members[1].skills : '',

      // Member 4
      member4Name: formState.teamSize >= 4 ? formState.members[2].name : '',
      member4Roll: formState.teamSize >= 4 ? formState.members[2].roll : '',
      member4Dept: formState.teamSize >= 4 ? formState.members[2].dept : '',
      member4Email: formState.teamSize >= 4 ? formState.members[2].email : '',
      member4Phone: formState.teamSize >= 4 ? formState.members[2].phone : '',
      member4Role: formState.teamSize >= 4 ? formState.members[2].role : '',
      member4Skills: formState.teamSize >= 4 ? formState.members[2].skills : '',

      // Member 5
      member5Name: formState.teamSize >= 5 ? formState.members[3].name : '',
      member5Roll: formState.teamSize >= 5 ? formState.members[3].roll : '',
      member5Dept: formState.teamSize >= 5 ? formState.members[3].dept : '',
      member5Email: formState.teamSize >= 5 ? formState.members[3].email : '',
      member5Phone: formState.teamSize >= 5 ? formState.members[3].phone : '',
      member5Role: formState.teamSize >= 5 ? formState.members[3].role : '',
      member5Skills: formState.teamSize >= 5 ? formState.members[3].skills : '',

      // Project
      ideaTitle: formState.ideaTitle,
      category: formState.category,
      problemStatement: formState.problemStatement,
      ideaDescription: formState.ideaDescription,
      techStack: formState.techStack,
      expectedOutcome: formState.expectedOutcome,

      // Agreements
      agreeRules: formState.agreeRules,
      previousExperience: formState.previousExperience
    };

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === 'success') {
        setIsRegistrationComplete(true);
      } else {
        setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    }

    setIsSubmitting(false);
  };

  // Show success screen after registration
  if (isRegistrationComplete) {
    return (
      <div className="registration-page">
        <div className="container">
          <div className="success-screen">
            <div className="success-icon">✓</div>
            <h1>Registration Complete!</h1>
            <p className="success-message">
              Thank you for registering for HackSnippet 4.0
            </p>
            <p className="wait-message">
              Please wait for further information. We'll contact you via email.
            </p>
            <Link to="/" className="home-btn">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="registration-page">
      <div className="container">
        <Link to="/" className="back-link">← Back to Home</Link>

        <header>
          <h1>Team Registration</h1>
          <p>Register your team for HackSnippet 4.0</p>
        </header>

        <form className="form" onSubmit={handleSubmit}>

          {/* Team Info */}
          <h2>Team Information</h2>

          <div className="form-row">
            <div className="form-group">
              <label>Team Name *</label>
              <input
                type="text"
                name="teamName"
                value={formState.teamName}
                onChange={handleChange}
                placeholder="Enter your team name"
              />
              {errors.teamName && <span className="error">{errors.teamName}</span>}
            </div>

            <div className="form-group">
              <label>Team Size *</label>
              <select name="teamSize" value={formState.teamSize} onChange={handleTeamSizeChange}>
                <option value={1}>1 (Solo)</option>
                <option value={2}>2 Members</option>
                <option value={3}>3 Members</option>
                <option value={4}>4 Members</option>
                <option value={5}>5 Members</option>
              </select>
            </div>
          </div>

          {/* Team Leader */}
          <h2>Team Leader</h2>

          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="leaderName"
                value={formState.leaderName}
                onChange={handleChange}
                placeholder="Enter full name"
              />
              {errors.leaderName && <span className="error">{errors.leaderName}</span>}
            </div>

            <div className="form-group">
              <label>Roll Number *</label>
              <input
                type="text"
                name="leaderRoll"
                value={formState.leaderRoll}
                onChange={handleChange}
                placeholder="Enter roll number"
              />
              {errors.leaderRoll && <span className="error">{errors.leaderRoll}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Department *</label>
              <select name="leaderDept" value={formState.leaderDept} onChange={handleChange}>
                <option value="">Select Department</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              {errors.leaderDept && <span className="error">{errors.leaderDept}</span>}
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="leaderEmail"
                value={formState.leaderEmail}
                onChange={handleChange}
                placeholder="Enter email"
              />
              {errors.leaderEmail && <span className="error">{errors.leaderEmail}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="leaderPhone"
                value={formState.leaderPhone}
                onChange={handleChange}
                placeholder="10-digit phone number"
              />
              {errors.leaderPhone && <span className="error">{errors.leaderPhone}</span>}
            </div>

            <div className="form-group">
              <label>Skills</label>
              <input
                type="text"
                name="leaderSkills"
                value={formState.leaderSkills}
                onChange={handleChange}
                placeholder="e.g., React, Python, ML"
              />
            </div>
          </div>

          {/* Team Members */}
          {formState.teamSize > 1 && (
            <>
              <h2>Team Members</h2>

              {Array.from({ length: formState.teamSize - 1 }, (_, index) => (
                <div className="member-card" key={index}>
                  <h4>Member {index + 2}</h4>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        value={formState.members[index].name}
                        onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                        placeholder="Enter full name"
                      />
                      {errors[`member${index + 2}Name`] && <span className="error">{errors[`member${index + 2}Name`]}</span>}
                    </div>

                    <div className="form-group">
                      <label>Roll Number *</label>
                      <input
                        type="text"
                        value={formState.members[index].roll}
                        onChange={(e) => handleMemberChange(index, 'roll', e.target.value)}
                        placeholder="Enter roll number"
                      />
                      {errors[`member${index + 2}Roll`] && <span className="error">{errors[`member${index + 2}Roll`]}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Department *</label>
                      <select
                        value={formState.members[index].dept}
                        onChange={(e) => handleMemberChange(index, 'dept', e.target.value)}
                      >
                        <option value="">Select Department</option>
                        {departments.map(dept => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                      {errors[`member${index + 2}Dept`] && <span className="error">{errors[`member${index + 2}Dept`]}</span>}
                    </div>

                    <div className="form-group">
                      <label>Email *</label>
                      <input
                        type="email"
                        value={formState.members[index].email}
                        onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                        placeholder="Enter email"
                      />
                      {errors[`member${index + 2}Email`] && <span className="error">{errors[`member${index + 2}Email`]}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        value={formState.members[index].phone}
                        onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
                        placeholder="10-digit phone number"
                      />
                      {errors[`member${index + 2}Phone`] && <span className="error">{errors[`member${index + 2}Phone`]}</span>}
                    </div>

                    <div className="form-group">
                      <label>Role</label>
                      <select
                        value={formState.members[index].role}
                        onChange={(e) => handleMemberChange(index, 'role', e.target.value)}
                      >
                        <option value="">Select Role</option>
                        {roles.map(role => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Skills</label>
                    <input
                      type="text"
                      value={formState.members[index].skills}
                      onChange={(e) => handleMemberChange(index, 'skills', e.target.value)}
                      placeholder="e.g., React, Python, ML"
                    />
                  </div>
                </div>
              ))}
            </>
          )}

          {/* Project Idea */}
          <h2>Project Idea</h2>

          <div className="form-row">
            <div className="form-group">
              <label>Project Title *</label>
              <input
                type="text"
                name="ideaTitle"
                value={formState.ideaTitle}
                onChange={handleChange}
                placeholder="Enter project title"
              />
              {errors.ideaTitle && <span className="error">{errors.ideaTitle}</span>}
            </div>

            <div className="form-group">
              <label>Category *</label>
              <select name="category" value={formState.category} onChange={handleChange}>
                <option value="">Select Category</option>
                {categories.map(cat => (
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
              value={formState.problemStatement}
              onChange={handleChange}
              placeholder="What problem are you solving?"
              rows={3}
            />
            {errors.problemStatement && <span className="error">{errors.problemStatement}</span>}
          </div>

          <div className="form-group">
            <label>Project Description *</label>
            <textarea
              name="ideaDescription"
              value={formState.ideaDescription}
              onChange={handleChange}
              placeholder="Describe your solution"
              rows={4}
            />
            {errors.ideaDescription && <span className="error">{errors.ideaDescription}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Tech Stack</label>
              <input
                type="text"
                name="techStack"
                value={formState.techStack}
                onChange={handleChange}
                placeholder="e.g., React, Node.js, MongoDB"
              />
            </div>

            <div className="form-group">
              <label>Expected Outcome</label>
              <input
                type="text"
                name="expectedOutcome"
                value={formState.expectedOutcome}
                onChange={handleChange}
                placeholder="What will you deliver?"
              />
            </div>
          </div>

          {/* Agreements */}
          <h2>Agreements</h2>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreeRules"
                checked={formState.agreeRules}
                onChange={handleChange}
              />
              <span>I agree to the <Link to="/rules" className="rules-link">hackathon rules</Link> and guidelines *</span>
            </label>
            {errors.agreeRules && <span className="error">{errors.agreeRules}</span>}
          </div>

          <div className="form-group">
            <label>Previous Hackathon Experience</label>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="previousExperience"
                  value="Yes"
                  checked={formState.previousExperience === 'Yes'}
                  onChange={handleChange}
                />
                <span>Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="previousExperience"
                  value="No"
                  checked={formState.previousExperience === 'No'}
                  onChange={handleChange}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="submit-btn-container">
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Register Team'}
            </button>
          </div>

          {message.text && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
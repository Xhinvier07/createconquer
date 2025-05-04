import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';
import './Registration.css';

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formProgress, setFormProgress] = useState(0);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('early');
  const totalSteps = 4;

  useEffect(() => {
    if (currentStep === 1) {
      window.scrollTo(0, 0);
    }
    
    setFormProgress((currentStep / totalSteps) * 100);

    const today = new Date();
    const registrationStartDate = new Date('2025-06-09');
    const registrationEndDate = new Date('2025-06-23T23:59:59');
    
    if (today < registrationStartDate || today > registrationEndDate) {
      setIsRegistrationOpen(false);
    }
  }, [currentStep]);

  const handleNextStep = (e) => {
    if (e) e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = (e) => {
    if (e) e.preventDefault();
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepIndicator = () => {
    return (
      <div className="registration-steps">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div 
            key={i} 
            className={`step-indicator ${currentStep > i ? 'completed' : ''} ${currentStep === i + 1 ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setCurrentStep(i + 1);
            }}
          >
            <div className="step-number">{i + 1}</div>
            <div className="step-label">
              {i === 0 && 'Team Info'}
              {i === 1 && 'Members'}
              {i === 2 && 'Contact'}
              {i === 3 && 'Review'}
            </div>
          </div>
        ))}
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${formProgress}%` }}></div>
        </div>
      </div>
    );
  };

  return (
    <div className="registration-page">
      <div className="sticky-nav">
        <div className="container">
          <div className="nav-indicator">
            <span className="nav-item">Registration</span>
            <div className="registration-status">
              {isRegistrationOpen ? (
                <span className="status-open">
                  <i className="fas fa-check-circle"></i> Registration Open
                </span>
              ) : (
                <span className="status-closed">
                  <i className="fas fa-times-circle"></i> Registration Closed
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="page-banner">
        <ParticleBackground color="#00E676" opacity={0.2} />
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Registration
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join Create & Conquer 2025 Hackathon
          </motion.p>
        </div>
      </div>

      <div className="main-content">
        <AnimatedSection className="section registration-overview-section">
          <div className="container text-center">
            <motion.h2 
              className="section-title text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Join CREATE & CONQUER 2025
            </motion.h2>
            
            <div className="registration-overview">
              <div className="overview-card">
                <div className="overview-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Team Size</h3>
                <p>Form a team of 4-6 members</p>
                <div className="info-tooltip" data-tooltip="All teams must have between 4-6 members to participate">
                  <i className="fas fa-info-circle"></i>
                </div>
              </div>
              
              <div className="overview-card">
                <div className="overview-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Eligibility</h3>
                <p>JHS, SHS, and undergraduate students</p>
                <div className="info-tooltip" data-tooltip="Open to all students in the Philippines">
                  <i className="fas fa-info-circle"></i>
                </div>
              </div>
              
              <div className="overview-card">
                <div className="overview-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3>Key Dates</h3>
                <p>Registration: June 9 - 23, 2025</p>
                <p>Event: June 27 - July 5, 2025</p>
              </div>
              
              <div className="overview-card">
                <div className="overview-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h3>No Experience Needed</h3>
                <p>Open to all skill levels</p>
                <div className="animated-icon">
                  <i className="fas fa-lightbulb pulse"></i>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="section registration-fees-section">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Registration Fees
            </motion.h2>
            
            <div className="fee-tabs">
              <div className="tab-selector">
                <button 
                  className={`tab-button ${activeTab === 'early' ? 'active' : ''}`} 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab('early');
                  }}
                >
                  Early Bird <span>(June 9-14)</span>
                </button>
                <button 
                  className={`tab-button ${activeTab === 'regular' ? 'active' : ''}`} 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab('regular');
                  }}
                >
                  Regular <span>(June 15-23)</span>
                </button>
              </div>
              
              <div className="fee-cards-container">
                <div className="fee-cards">
                  <div className="fee-card cpeo">
                    <div className="fee-icon">
                      <i className="fas fa-user-tie"></i>
                    </div>
                    <h3>CPEO Members</h3>
                    <div className="fee-amount">
                      {activeTab === 'early' ? '₱150' : '₱200'}
                    </div>
                    <p>per member</p>
                    <div className="fee-features">
                      <div className="fee-feature">
                        <i className="fas fa-check"></i>
                        <span>Full event access</span>
                      </div>
                      <div className="fee-feature">
                        <i className="fas fa-check"></i>
                        <span>Certificate</span>
                      </div>
                      <div className="fee-feature">
                        <i className="fas fa-check"></i>
                        <span>Mentorship</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="fee-card jhs-shs">
                    <div className="fee-icon">
                      <i className="fas fa-school"></i>
                    </div>
                    <h3>JHS & SHS Students</h3>
                    <div className="fee-amount">
                      {activeTab === 'early' ? '₱150' : '₱200'}
                    </div>
                    <p>per member</p>
                    <div className="fee-features">
                      <div className="fee-feature">
                        <i className="fas fa-check"></i>
                        <span>Full event access</span>
                      </div>
                      <div className="fee-feature">
                        <i className="fas fa-check"></i>
                        <span>Certificate</span>
                      </div>
                      <div className="fee-feature">
                        <i className="fas fa-check"></i>
                        <span>Mentorship</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="fee-card undergrad">
                    <div className="fee-icon">
                      <i className="fas fa-university"></i>
                    </div>
                    <h3>Undergraduate Students</h3>
                    <div className="fee-amount">
                      {activeTab === 'early' ? '₱200' : '₱250'}
                    </div>
                    <p>per member</p>
                    <div className="fee-features">
                      <div className="fee-feature">
                        <i className="fas fa-check"></i>
                        <span>Full event access</span>
                      </div>
                      <div className="fee-feature">
                        <i className="fas fa-check"></i>
                        <span>Certificate</span>
                      </div>
                      <div className="fee-feature">
                        <i className="fas fa-check"></i>
                        <span>Mentorship</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="fee-notice">
              <i className="fas fa-info-circle"></i>
              <p>Registration fees must be paid in full for all team members to confirm participation.</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="section registration-form-section">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Registration Form
            </motion.h2>
            
            <div className="alternate-registration">
              <a href="https://forms.google.com/createandconquerform" target="_blank" rel="noopener noreferrer" className="google-form-link">
                <i className="fab fa-google"></i> Use Google Forms Instead
              </a>
            </div>
            
            {renderStepIndicator()}
            
            <div className="multi-step-form-container">
              <div className="form-container">
                {currentStep === 1 && (
                  <motion.div 
                    className="form-step"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3>Step 1: Team Information</h3>
                    
                    <div className="form-group">
                      <label htmlFor="teamName">
                        <i className="fas fa-users"></i> Team Name <span className="required">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="teamName" 
                        name="teamName" 
                        className="form-input" 
                        placeholder="Enter your team name"
                        required 
                      />
                      <div className="input-animation-line"></div>
                      <div className="form-feedback">Choose a creative and unique team name</div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="teamSize">
                        <i className="fas fa-user-friends"></i> Number of Team Members <span className="required">*</span>
                      </label>
                      <select id="teamSize" name="teamSize" className="form-select" required>
                        <option value="">Select team size</option>
                        <option value="4">4 members</option>
                        <option value="5">5 members</option>
                        <option value="6">6 members</option>
                      </select>
                      <div className="select-arrow"><i className="fas fa-chevron-down"></i></div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="participationType">
                        <i className="fas fa-map-marker-alt"></i> Participation Type <span className="required">*</span>
                      </label>
                      <div className="radio-group">
                        <div className="radio-option">
                          <input type="radio" id="inperson" name="participationType" value="inperson" />
                          <label htmlFor="inperson">
                            <span className="radio-custom"></span>
                            <span className="radio-label">In-Person (Metro Manila)</span>
                          </label>
                        </div>
                        <div className="radio-option">
                          <input type="radio" id="online" name="participationType" value="online" />
                          <label htmlFor="online">
                            <span className="radio-custom"></span>
                            <span className="radio-label">Online (Remote)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>
                        <i className="fas fa-user-tie"></i> Team Leader Information
                      </label>
                      <div className="form-row">
                        <div className="form-group half">
                          <input 
                            type="text" 
                            id="leaderFirstName" 
                            name="leaderFirstName" 
                            className="form-input" 
                            placeholder="First Name *"
                            required 
                          />
                          <div className="input-animation-line"></div>
                        </div>
                        <div className="form-group half">
                          <input 
                            type="text" 
                            id="leaderLastName" 
                            name="leaderLastName" 
                            className="form-input" 
                            placeholder="Last Name *"
                            required 
                          />
                          <div className="input-animation-line"></div>
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <input 
                          type="email" 
                          id="leaderEmail" 
                          name="leaderEmail" 
                          className="form-input" 
                          placeholder="Email Address *"
                          required 
                        />
                        <div className="input-animation-line"></div>
                      </div>
                      
                      <div className="form-group">
                        <input 
                          type="tel" 
                          id="leaderPhone" 
                          name="leaderPhone" 
                          className="form-input" 
                          placeholder="Phone Number *"
                          required 
                        />
                        <div className="input-animation-line"></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {currentStep === 2 && (
                  <motion.div 
                    className="form-step"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3>Step 2: Team Members</h3>
                    
                    <div className="team-members-container">
                      <div className="team-member-form">
                        <h4>Team Member 1</h4>
                        <div className="form-row">
                          <div className="form-group half">
                            <input 
                              type="text" 
                              className="form-input" 
                              placeholder="First Name *"
                              required 
                            />
                            <div className="input-animation-line"></div>
                          </div>
                          <div className="form-group half">
                            <input 
                              type="text" 
                              className="form-input" 
                              placeholder="Last Name *"
                              required 
                            />
                            <div className="input-animation-line"></div>
                          </div>
                        </div>
                        
                        <div className="form-group">
                          <input 
                            type="email" 
                            className="form-input" 
                            placeholder="Email Address *"
                            required 
                          />
                          <div className="input-animation-line"></div>
                        </div>
                        
                        <div className="form-row">
                          <div className="form-group half">
                            <select className="form-select" required>
                              <option value="">Education Level *</option>
                              <option value="jhs">Junior High School</option>
                              <option value="shs">Senior High School</option>
                              <option value="undergrad">Undergraduate</option>
                            </select>
                            <div className="select-arrow"><i className="fas fa-chevron-down"></i></div>
                          </div>
                          <div className="form-group half">
                            <input 
                              type="text" 
                              className="form-input" 
                              placeholder="School/University *"
                              required 
                            />
                            <div className="input-animation-line"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="team-member-form">
                        <h4>Team Member 2</h4>
                        <div className="placeholder-text">
                          <i className="fas fa-info-circle"></i> 
                          Additional member forms will be dynamically added based on your team size
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {currentStep === 3 && (
                  <motion.div 
                    className="form-step"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3>Step 3: Contact & Additional Information</h3>
                    
                    <div className="form-group">
                      <label htmlFor="alternateContact">
                        <i className="fas fa-address-card"></i> Alternate Contact Person
                      </label>
                      <div className="form-row">
                        <div className="form-group half">
                          <input 
                            type="text" 
                            id="altFirstName" 
                            className="form-input" 
                            placeholder="First Name"
                          />
                          <div className="input-animation-line"></div>
                        </div>
                        <div className="form-group half">
                          <input 
                            type="text" 
                            id="altLastName" 
                            className="form-input" 
                            placeholder="Last Name"
                          />
                          <div className="input-animation-line"></div>
                        </div>
                      </div>
                      
                      <div className="form-row">
                        <div className="form-group half">
                          <input 
                            type="email" 
                            id="altEmail" 
                            className="form-input" 
                            placeholder="Email Address"
                          />
                          <div className="input-animation-line"></div>
                        </div>
                        <div className="form-group half">
                          <input 
                            type="tel" 
                            id="altPhone" 
                            className="form-input" 
                            placeholder="Phone Number"
                          />
                          <div className="input-animation-line"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="heardFrom">
                        <i className="fas fa-bullhorn"></i> How did you hear about us? <span className="required">*</span>
                      </label>
                      <select id="heardFrom" className="form-select" required>
                        <option value="">Select an option</option>
                        <option value="social-media">Social Media</option>
                        <option value="friend">Friend or Classmate</option>
                        <option value="school">School Announcement</option>
                        <option value="event">Another Event</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="select-arrow"><i className="fas fa-chevron-down"></i></div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="specialRequirements">
                        <i className="fas fa-clipboard-list"></i> Special Requirements or Accommodations
                      </label>
                      <textarea 
                        id="specialRequirements" 
                        className="form-textarea" 
                        placeholder="Let us know if your team has any special requirements"
                        rows="4"
                      ></textarea>
                      <div className="input-animation-line"></div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="discordUsername">
                        <i className="fab fa-discord"></i> Discord Username (Optional)
                      </label>
                      <input 
                        type="text" 
                        id="discordUsername" 
                        className="form-input" 
                        placeholder="e.g., username#1234"
                      />
                      <div className="input-animation-line"></div>
                      <div className="form-feedback">We'll add you to our event Discord server</div>
                    </div>
                  </motion.div>
                )}
                
                {currentStep === 4 && (
                  <motion.div 
                    className="form-step"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3>Step 4: Review & Submit</h3>
                    
                    <div className="review-summary">
                      <div className="review-section">
                        <h4>Team Information</h4>
                        <div className="review-item">
                          <span className="review-label">Team Name:</span>
                          <span className="review-value">Team Demo</span>
                        </div>
                        <div className="review-item">
                          <span className="review-label">Team Size:</span>
                          <span className="review-value">4 members</span>
                        </div>
                        <div className="review-item">
                          <span className="review-label">Participation Type:</span>
                          <span className="review-value">In-Person (Metro Manila)</span>
                        </div>
                      </div>
                      
                      <div className="review-section">
                        <h4>Team Leader</h4>
                        <div className="review-item">
                          <span className="review-label">Name:</span>
                          <span className="review-value">John Doe</span>
                        </div>
                        <div className="review-item">
                          <span className="review-label">Email:</span>
                          <span className="review-value">john.doe@example.com</span>
                        </div>
                        <div className="review-item">
                          <span className="review-label">Phone:</span>
                          <span className="review-value">+63 912 345 6789</span>
                        </div>
                      </div>
                      
                      <div className="review-section">
                        <h4>Team Members</h4>
                        <div className="review-item">
                          <span className="review-label">Member 1:</span>
                          <span className="review-value">Jane Smith (SHS)</span>
                        </div>
                        <div className="review-item">
                          <span className="review-label">Total Members:</span>
                          <span className="review-value">4</span>
                        </div>
                      </div>
                      
                      <div className="review-section fee-summary">
                        <h4>Fee Summary</h4>
                        <div className="review-item">
                          <span className="review-label">CPEO Members:</span>
                          <span className="review-value">1 x ₱150 = ₱150</span>
                        </div>
                        <div className="review-item">
                          <span className="review-label">JHS/SHS Students:</span>
                          <span className="review-value">2 x ₱150 = ₱300</span>
                        </div>
                        <div className="review-item">
                          <span className="review-label">Undergraduate Students:</span>
                          <span className="review-value">1 x ₱200 = ₱200</span>
                        </div>
                        <div className="review-item total">
                          <span className="review-label">Total Fee:</span>
                          <span className="review-value">₱650</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="payment-options">
                      <h4>Payment Methods</h4>
                      <div className="payment-methods">
                        <div className="payment-method">
                          <input type="radio" id="gcash" name="paymentMethod" value="gcash" checked />
                          <label htmlFor="gcash">
                            <span className="radio-custom"></span>
                            <i className="fas fa-mobile-alt"></i>
                            <span>GCash</span>
                          </label>
                        </div>
                        <div className="payment-method">
                          <input type="radio" id="bankTransfer" name="paymentMethod" value="bankTransfer" />
                          <label htmlFor="bankTransfer">
                            <span className="radio-custom"></span>
                            <i className="fas fa-university"></i>
                            <span>Bank Transfer</span>
                          </label>
                        </div>
                        <div className="payment-method">
                          <input type="radio" id="inPerson" name="paymentMethod" value="inPerson" />
                          <label htmlFor="inPerson">
                            <span className="radio-custom"></span>
                            <i className="fas fa-handshake"></i>
                            <span>In-Person (CPEO Office)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="form-group checkbox-group terms-container">
                      <input type="checkbox" id="termsAgreement" className="custom-checkbox" required />
                      <label htmlFor="termsAgreement">
                        <span className="checkbox-custom"></span>
                        I agree to the <Link to="/rules">terms and conditions</Link> of the Create & Conquer 2025 Hackathon
                      </label>
                    </div>
                    
                    <div className="form-group checkbox-group">
                      <input type="checkbox" id="consentForm" className="custom-checkbox" required />
                      <label htmlFor="consentForm">
                        <span className="checkbox-custom"></span>
                        I understand that participants under 18 years old must submit a signed consent form
                      </label>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            
            <div className="form-navigation">
              {currentStep > 1 && (
                <button className="btn btn-secondary" onClick={handlePrevStep}>
                  <i className="fas fa-arrow-left"></i> Previous
                </button>
              )}
              
              {currentStep < totalSteps ? (
                <button className="btn btn-primary" onClick={handleNextStep}>
                  Next <i className="fas fa-arrow-right"></i>
                </button>
              ) : (
                <button className="btn btn-success" type="submit">
                  <i className="fas fa-check-circle"></i> Submit Registration
                </button>
              )}
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="section consent-form-section">
          <div className="container">
            <div className="consent-form-container">
              <div className="consent-notice">
                <div className="notice-icon">
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <div className="notice-content">
                  <h3>Important Notice for Minors</h3>
                  <p>Participants under 18 years old must submit a signed consent form from a parent or guardian.</p>
                </div>
              </div>
              
              <div className="consent-actions">
                <div className="consent-preview">
                  <div className="preview-thumbnail">
                    <i className="far fa-file-pdf"></i>
                    <span>Consent Form.pdf</span>
                  </div>
                </div>
                
                <div className="consent-buttons">
                  <a href="/consent-form.pdf" className="btn btn-primary download-btn" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-download"></i> Download Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="section registration-process-section">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Registration Process
            </motion.h2>
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Form a Team</h3>
                  <p>Gather 4-6 members for your team and designate a team leader.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Complete Registration</h3>
                  <p>Fill out the registration form with all required team information.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Pay Registration Fee</h3>
                  <p>Submit payment for all team members through the provided payment channels.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Receive Confirmation</h3>
                  <p>Wait for the confirmation email with your team's registration details.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Prepare for the Hackathon</h3>
                  <p>Get ready for the kickoff event on June 27, 2025!</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="section registration-faq-section">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Registration FAQs
            </motion.h2>
            
            <div className="faq-list">
              <div className="faq-item" onClick={(e) => {
                e.currentTarget.classList.toggle('active');
              }}>
                <div className="faq-question">
                  <h3>Can I register as an individual?</h3>
                  <div className="faq-toggle"><i className="fas fa-plus"></i></div>
                </div>
                <div className="faq-answer">
                  <p>No, you must be part of a team of 4-6 members to participate in the hackathon.</p>
                </div>
              </div>

              <div className="faq-item" onClick={(e) => {
                e.currentTarget.classList.toggle('active');
              }}>
                <div className="faq-question">
                  <h3>I don't have a team. How can I find team members?</h3>
                  <div className="faq-toggle"><i className="fas fa-plus"></i></div>
                </div>
                <div className="faq-answer">
                  <p>
                    You can join our Discord server to connect with other participants looking for team members. 
                    We also recommend reaching out to classmates or friends who might be interested in participating.
                  </p>
                </div>
              </div>

              <div className="faq-item" onClick={(e) => {
                e.currentTarget.classList.toggle('active');
              }}>
                <div className="faq-question">
                  <h3>Do all team members need to be from the same school?</h3>
                  <div className="faq-toggle"><i className="fas fa-plus"></i></div>
                </div>
                <div className="faq-answer">
                  <p>No, teams can consist of members from different schools and educational levels.</p>
                </div>
              </div>

              <div className="faq-item" onClick={(e) => {
                e.currentTarget.classList.toggle('active');
              }}>
                <div className="faq-question">
                  <h3>What happens after I submit the registration form?</h3>
                  <div className="faq-toggle"><i className="fas fa-plus"></i></div>
                </div>
                <div className="faq-answer">
                  <p>
                    You'll receive an email with payment instructions. After payment is confirmed, 
                    you'll receive a confirmation email with your team's registration details.
                  </p>
                </div>
              </div>

              <div className="faq-item" onClick={(e) => {
                e.currentTarget.classList.toggle('active');
              }}>
                <div className="faq-question">
                  <h3>Can I modify my team information after registration?</h3>
                  <div className="faq-toggle"><i className="fas fa-plus"></i></div>
                </div>
                <div className="faq-answer">
                  <p>
                    Yes, you can update your team information until June 23, 2025. 
                    Please contact us at cpeo.feutech.ph@gmail.com for any changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Registration; 
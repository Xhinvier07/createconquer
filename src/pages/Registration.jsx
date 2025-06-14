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
                <p>Registration: <br></br>June 14 - 23, 2025</p>
                <p>Event: <br></br>June 27 - July 5, 2025</p>
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
            
            <div className="fee-cards-container">
              <div className="fee-cards">
                <div className="fee-card cpeo">
                  <div className="fee-icon">
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <h3>CPEO Members</h3>
                  <div className="fee-amount">₱200</div>
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
                  <div className="fee-amount">₱200</div>
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
                  <div className="fee-amount">₱250</div>
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
            
            <div className="fee-notice">
              <i className="fas fa-info-circle"></i>
              <p>A portion of the registration fees will be donated to a cause. Updates on the beneficiary will be announced.</p>
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
            
            <div className="google-form-card">
              <div className="google-form-card-content">
                <div className="google-form-icon">
                  <i className="fab fa-google"></i>
                </div>
                <h3>Register via Google Forms</h3>
                <p>Please use the Google Form to register your team for the Create & Conquer 2025 Hackathon.</p>
                <div className="google-form-features">
                  <div className="feature">
                    <i className="fas fa-check-circle"></i>
                    <span>Email confirmation will be sent a few days after registration.</span>
                  </div>
                </div>
                <div className="google-form-action">
                  <a href="https://bit.ly/createconquerregis" target="_blank" rel="noopener noreferrer" className="google-form-button">
                    <i className="fab fa-google"></i> Register Now
                  </a>
                  <div className="form-note">
                    <i className="fas fa-info-circle"></i>
                    <span>After submission, you'll receive confirmation via email</span>
                  </div>
                </div>
              </div>
              <div className="google-form-decoration">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-circle circle-3"></div>
                <div className="decoration-line"></div>
              </div>
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
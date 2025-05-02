import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className="registration-page">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>Registration</h1>
          <p>Join Create & Conquer 2025 Hackathon</p>
        </div>
      </div>

      <div className="main-content">
        {/* Registration Info */}
        <section className="section registration-info-section">
          <div className="container">
            <div className="registration-info-grid">
              <div className="registration-details">
                <h2 className="section-title">Registration Details</h2>
                <p>
                  Registration for Create & Conquer 2025 Hackathon is open from 
                  <strong> June 9, 2025 </strong> to <strong> June 23, 2025</strong>.
                </p>
                <p>
                  Please read the eligibility requirements and registration process carefully before proceeding.
                </p>

                <h3>Eligibility Requirements</h3>
                <ul className="eligibility-list">
                  <li>Junior high school, senior high school, and undergraduate students in the Philippines</li>
                  <li>Participants under 18 years old must submit a signed consent form</li>
                  <li>Each participant can only be a member of one team</li>
                  <li>No coding experience required</li>
                </ul>

                <h3>Team Requirements</h3>
                <ul className="team-list">
                  <li>Teams must consist of 4-6 members</li>
                  <li>One member must be designated as the team leader</li>
                  <li>Team leaders will register on behalf of their team</li>
                  <li>Registration must be completed by the deadline: June 23, 2025 (11:59 PM)</li>
                </ul>
              </div>

              <div className="registration-fees">
                <h2 className="section-title">Registration Fees</h2>
                <div className="fees-card early-bird">
                  <h3>Early Bird Registration</h3>
                  <p className="fees-dates">June 9 - June 14, 2025</p>
                  <ul className="fees-list">
                    <li>
                      <span className="fee-group">CPEO Members:</span>
                      <span className="fee-amount">₱150</span> per member
                    </li>
                    <li>
                      <span className="fee-group">JHS & SHS Students:</span>
                      <span className="fee-amount">₱150</span> per member
                    </li>
                    <li>
                      <span className="fee-group">Undergraduate Students:</span>
                      <span className="fee-amount">₱200</span> per member
                    </li>
                  </ul>
                </div>

                <div className="fees-card regular">
                  <h3>Regular Registration</h3>
                  <p className="fees-dates">June 15 - June 23, 2025</p>
                  <ul className="fees-list">
                    <li>
                      <span className="fee-group">CPEO Members:</span>
                      <span className="fee-amount">₱200</span> per member
                    </li>
                    <li>
                      <span className="fee-group">JHS & SHS Students:</span>
                      <span className="fee-amount">₱200</span> per member
                    </li>
                    <li>
                      <span className="fee-group">Undergraduate Students:</span>
                      <span className="fee-amount">₱250</span> per member
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="section registration-form-section">
          <div className="container">
            <h2 className="section-title">Registration Form</h2>
            <div className="registration-form-container">
              <form className="registration-form">
                <div className="form-section">
                  <h3>Team Information</h3>
                  
                  <div className="form-group">
                    <label htmlFor="teamName">Team Name *</label>
                    <input type="text" id="teamName" name="teamName" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="teamSize">Number of Team Members *</label>
                    <select id="teamSize" name="teamSize" required>
                      <option value="">Select team size</option>
                      <option value="4">4 members</option>
                      <option value="5">5 members</option>
                      <option value="6">6 members</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="participationType">Participation Type *</label>
                    <select id="participationType" name="participationType" required>
                      <option value="">Select participation type</option>
                      <option value="inperson">In-Person (Metro Manila)</option>
                      <option value="online">Online (Remote)</option>
                    </select>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Team Leader Information</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="leaderFirstName">First Name *</label>
                      <input type="text" id="leaderFirstName" name="leaderFirstName" required />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="leaderLastName">Last Name *</label>
                      <input type="text" id="leaderLastName" name="leaderLastName" required />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="leaderEmail">Email Address *</label>
                    <input type="email" id="leaderEmail" name="leaderEmail" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="leaderPhone">Phone Number *</label>
                    <input type="tel" id="leaderPhone" name="leaderPhone" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="leaderSchool">School/University *</label>
                    <input type="text" id="leaderSchool" name="leaderSchool" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="leaderEducLevel">Educational Level *</label>
                    <select id="leaderEducLevel" name="leaderEducLevel" required>
                      <option value="">Select educational level</option>
                      <option value="jhs">Junior High School</option>
                      <option value="shs">Senior High School</option>
                      <option value="undergrad">Undergraduate</option>
                    </select>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Team Members Information</h3>
                  <p className="form-note">You will be asked to provide details for each team member after initial registration.</p>
                </div>

                <div className="form-section">
                  <h3>Consent Form</h3>
                  <p className="form-note">
                    Participants under 18 years old must submit a signed consent form. Please download the form below, 
                    have it signed by a parent or guardian, and upload it during the registration process.
                  </p>
                  <div className="consent-form-download">
                    <a href="/consent-form.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      Download Consent Form
                    </a>
                  </div>
                </div>

                <div className="form-group checkbox-group">
                  <input type="checkbox" id="termsAgreement" name="termsAgreement" required />
                  <label htmlFor="termsAgreement">
                    I agree to the <Link to="/rules">terms and conditions</Link> of the Create & Conquer 2025 Hackathon
                  </label>
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn btn-primary">Submit Registration</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Registration Process */}
        <section className="section registration-process-section">
          <div className="container">
            <h2 className="section-title">Registration Process</h2>
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
        </section>

        {/* FAQ Section */}
        <section className="section registration-faq-section">
          <div className="container">
            <h2 className="section-title">Registration FAQs</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>Can I register as an individual?</h3>
                <p>No, you must be part of a team of 4-6 members to participate in the hackathon.</p>
              </div>

              <div className="faq-item">
                <h3>I don't have a team. How can I find team members?</h3>
                <p>
                  You can join our Discord server to connect with other participants looking for team members. 
                  We also recommend reaching out to classmates or friends who might be interested in participating.
                </p>
              </div>

              <div className="faq-item">
                <h3>Do all team members need to be from the same school?</h3>
                <p>No, teams can consist of members from different schools and educational levels.</p>
              </div>

              <div className="faq-item">
                <h3>What happens after I submit the registration form?</h3>
                <p>
                  You'll receive an email with payment instructions. After payment is confirmed, 
                  you'll receive a confirmation email with your team's registration details.
                </p>
              </div>

              <div className="faq-item">
                <h3>Can I modify my team information after registration?</h3>
                <p>
                  Yes, you can update your team information until June 23, 2025. 
                  Please contact us at cpeo.feutech.ph@gmail.com for any changes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registration; 
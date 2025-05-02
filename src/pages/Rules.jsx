import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Rules = () => {
  return (
    <div className="rules-page">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>Rules & Guidelines</h1>
          <p>Official rulebook for Create & Conquer 2025 Hackathon</p>
        </div>
      </div>

      <div className="main-content">
        {/* Hackathon Rulebook */}
        <AnimatedSection>
          <section className="section rulebook-section">
            <div className="container">
              <h2 className="section-title">Hackathon Rulebook</h2>
              
              <div className="rules-grid">
                <div className="rule-card">
                  <div className="rule-icon">👥</div>
                  <h3>Eligibility Requirements</h3>
                  <ul className="rule-list">
                    <li>Open to junior high school, senior high school, and undergraduate students in the Philippines</li>
                    <li>Participants must form teams of 4-6 members</li>
                    <li>Participants under 18 years old must submit a signed consent form</li>
                    <li>Each participant can only be a member of one team</li>
                    <li>All team members must register by the deadline: June 23, 2025</li>
                  </ul>
                </div>

                <div className="rule-card">
                  <div className="rule-icon">💻</div>
                  <h3>Skill Requirements</h3>
                  <p>No coding experience is necessary to participate in the hackathon. We welcome participants of all skill levels, from beginners to advanced developers.</p>
                  <p>Teams will have the option to choose whether to use code or no-code tools for their projects. The judging criteria will be adjusted accordingly to ensure fairness.</p>
                </div>

                <div className="rule-card">
                  <div className="rule-icon">🧩</div>
                  <h3>Pre-existing Work</h3>
                  <ul className="rule-list">
                    <li>All projects must be created during the hackathon period</li>
                    <li>Pre-existing code, designs, or assets may not be used</li>
                    <li>Open-source libraries and frameworks are allowed, but must be disclosed</li>
                    <li>Any team found using pre-existing work will be disqualified</li>
                  </ul>
                </div>

                <div className="rule-card">
                  <div className="rule-icon">📜</div>
                  <h3>Event Rules & Conditions</h3>
                  <ul className="rule-list">
                    <li>All participants must adhere to the Code of Conduct</li>
                    <li>Teams must submit their projects by the specified deadlines</li>
                    <li>Judges' decisions are final and cannot be contested</li>
                    <li>Organizers reserve the right to disqualify any team for rule violations</li>
                    <li>Participants grant organizers permission to use images and videos from the event for promotional purposes</li>
                  </ul>
                </div>

                <div className="rule-card">
                  <div className="rule-icon">🏢</div>
                  <h3>Use of Facilities</h3>
                  <ul className="rule-list">
                    <li>In-person participants must respect the venue's rules and facilities</li>
                    <li>Any damage to venue property will be the responsibility of the participant(s) involved</li>
                    <li>Quiet hours must be observed during overnight periods</li>
                    <li>Participants must clean up their workspaces before leaving</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Accepted Project Types */}
        <AnimatedSection>
          <section className="section project-types-section">
            <div className="container">
              <h2 className="section-title">Accepted Project Types</h2>
              <p className="section-description">
                Create & Conquer 2025 welcomes a wide range of project types. Teams can choose to develop any of the following:
              </p>
              
              <div className="project-types-grid">
                <div className="project-type">
                  <div className="project-type-icon">📱</div>
                  <h3>Mobile Application</h3>
                  <p>Android, iOS, or cross-platform mobile apps</p>
                </div>

                <div className="project-type">
                  <div className="project-type-icon">🌐</div>
                  <h3>Web Application</h3>
                  <p>Dynamic web applications with frontend and/or backend components</p>
                </div>

                <div className="project-type">
                  <div className="project-type-icon">🎮</div>
                  <h3>Game</h3>
                  <p>Digital games for mobile, web, or desktop platforms</p>
                </div>

                <div className="project-type">
                  <div className="project-type-icon">🧩</div>
                  <h3>Web Extension</h3>
                  <p>Browser extensions that enhance web browsing experience</p>
                </div>

                <div className="project-type">
                  <div className="project-type-icon">💻</div>
                  <h3>Website</h3>
                  <p>Static or content-focused websites</p>
                </div>

                <div className="project-type">
                  <div className="project-type-icon">📊</div>
                  <h3>IoT</h3>
                  <p>Internet of Things projects with hardware components</p>
                </div>

                <div className="project-type">
                  <div className="project-type-icon">🔌</div>
                  <h3>Hardware</h3>
                  <p>Physical computing projects and hardware prototypes</p>
                </div>

                <div className="project-type">
                  <div className="project-type-icon">🤖</div>
                  <h3>Robot</h3>
                  <p>Robotics projects with mechanical and electronic components</p>
                </div>

                <div className="project-type">
                  <div className="project-type-icon">💡</div>
                  <h3>Other</h3>
                  <p>Other technological outputs with approval from organizers</p>
                </div>
              </div>
              
              <p className="project-types-note">
                Not sure which project type to choose? Contact the organizers at 
                <a href="mailto:cpeo.feutech.ph@gmail.com"> cpeo.feutech.ph@gmail.com</a> for guidance.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Project Submission Guide */}
        <AnimatedSection>
          <section className="section submission-guide-section">
            <div className="container">
              <h2 className="section-title">Project Submission Guide</h2>
              
              <div className="submission-rounds">
                <div className="submission-round">
                  <h3>Elimination Round Requirements</h3>
                  <p className="deadline">Deadline: June 30, 2025 (Monday) | 1:00 PM</p>
                  
                  <div className="submission-items">
                    <div className="submission-item">
                      <div className="submission-icon">📋</div>
                      <div className="submission-content">
                        <h4>Proof of Concept</h4>
                        <p>A preliminary version of your project that demonstrates its core functionality</p>
                      </div>
                    </div>
                    
                    <div className="submission-item">
                      <div className="submission-icon">📝</div>
                      <div className="submission-content">
                        <h4>Project Brief</h4>
                        <p>A document explaining your project's purpose, target users, and how it addresses the hackathon theme</p>
                      </div>
                    </div>
                    
                    <div className="submission-item">
                      <div className="submission-icon">🎬</div>
                      <div className="submission-content">
                        <h4>Short Video Demo/Presentation</h4>
                        <p>A 2-3 minute video demonstrating your project and explaining its features</p>
                      </div>
                    </div>
                    
                    <div className="submission-item">
                      <div className="submission-icon">🔗</div>
                      <div className="submission-content">
                        <h4>Link to Project Github (Optional)</h4>
                        <p>For code-based projects, provide a link to your GitHub repository</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="submission-round">
                  <h3>Final Round Requirements</h3>
                  <p className="deadline">Deadline: July 4, 2025 (Friday) | 11:59 PM</p>
                  
                  <div className="submission-categories">
                    <div className="submission-category">
                      <h4>For No-Code Participants</h4>
                      <div className="submission-items">
                        <div className="submission-item">
                          <div className="submission-icon">📋</div>
                          <div className="submission-content">
                            <h4>Finalized Proof of Concept</h4>
                            <p>The completed version of your no-code project</p>
                          </div>
                        </div>
                        
                        <div className="submission-item">
                          <div className="submission-icon">📝</div>
                          <div className="submission-content">
                            <h4>Finalized Project Brief</h4>
                            <p>An updated document explaining your project in detail</p>
                          </div>
                        </div>
                        
                        <div className="submission-item">
                          <div className="submission-icon">🖼️</div>
                          <div className="submission-content">
                            <h4>Presentation Deck</h4>
                            <p>Slides for your final presentation during Demo Day</p>
                          </div>
                        </div>
                        
                        <div className="submission-item">
                          <div className="submission-icon">🎬</div>
                          <div className="submission-content">
                            <h4>30-second Project Video Teaser</h4>
                            <p>A brief promotional video highlighting your project</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="submission-category">
                      <h4>For Code Participants</h4>
                      <div className="submission-items">
                        <div className="submission-item">
                          <div className="submission-icon">📋</div>
                          <div className="submission-content">
                            <h4>Finalized Proof of Concept</h4>
                            <p>The completed version of your coded project</p>
                          </div>
                        </div>
                        
                        <div className="submission-item">
                          <div className="submission-icon">📝</div>
                          <div className="submission-content">
                            <h4>Finalized Project Brief</h4>
                            <p>An updated document explaining your project in detail</p>
                          </div>
                        </div>
                        
                        <div className="submission-item">
                          <div className="submission-icon">💾</div>
                          <div className="submission-content">
                            <h4>Code Submission (GitHub repository)</h4>
                            <p>A public or private GitHub repository containing your project code</p>
                          </div>
                        </div>
                        
                        <div className="submission-item">
                          <div className="submission-icon">🖼️</div>
                          <div className="submission-content">
                            <h4>Presentation Deck</h4>
                            <p>Slides for your final presentation during Demo Day</p>
                          </div>
                        </div>
                        
                        <div className="submission-item">
                          <div className="submission-icon">🎬</div>
                          <div className="submission-content">
                            <h4>30-second Project Video Teaser</h4>
                            <p>A brief promotional video highlighting your project</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="submission-notes">
                <h3>Important Submission Notes</h3>
                <ul>
                  <li>All submissions must be made through the official hackathon platform</li>
                  <li>Late submissions will not be accepted</li>
                  <li>All team members must be listed in the submission</li>
                  <li>Teams must comply with intellectual property laws and open-source licenses</li>
                  <li>Detailed submission instructions will be sent to registered teams</li>
                </ul>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="section cta-section">
            <div className="container">
              <div className="cta-content">
                <h2>Questions About the Rules?</h2>
                <p>Contact us for clarification or join our Discord server for real-time assistance.</p>
                <div className="cta-buttons">
                  <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                  <Link to="/resources" className="btn btn-secondary">View Resources</Link>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Rules; 
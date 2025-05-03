import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Card from '../components/Card';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedSection from '../components/AnimatedSection';
import './Judging.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Rules = () => {
  const rulesRef = useRef(null);
  const projectTypesRef = useRef(null);
  const submissionRef = useRef(null);
  
  // Animation setup with GSAP
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Safety delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initAnimations();
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Initialize animations
  const initAnimations = () => {
    // Rules cards animation
    if (rulesRef.current) {
      const ruleCards = rulesRef.current.querySelectorAll('.card');
      if (ruleCards && ruleCards.length > 0) {
        gsap.fromTo(ruleCards,
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.1, 
            ease: "power3.out", 
            scrollTrigger: {
              trigger: rulesRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }
    
    // Project types animation
    if (projectTypesRef.current) {
      const projectTypes = projectTypesRef.current.querySelectorAll('.project-type');
      if (projectTypes && projectTypes.length > 0) {
        gsap.fromTo(projectTypes,
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.6, 
            stagger: 0.08, 
            ease: "power2.out", 
            scrollTrigger: {
              trigger: projectTypesRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }
    
    // Submission items animation
    if (submissionRef.current) {
      const submissionItems = submissionRef.current.querySelectorAll('.submission-item');
      if (submissionItems && submissionItems.length > 0) {
        gsap.fromTo(submissionItems,
          { y: 20, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.5, 
            stagger: 0.08, 
            ease: "power1.out", 
            scrollTrigger: {
              trigger: submissionRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }
  };

  return (
    <div className="judging-rules-page">
      {/* Page Banner with Particle Background */}
      <div className="page-banner">
        <ParticleBackground color="#00E676" opacity={0.2} />
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Rules & Guidelines
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Official rulebook for Create & Conquer 2025 Hackathon
          </motion.p>
        </div>
      </div>

      <div className="main-content">
        {/* Hackathon Rulebook */}
        <AnimatedSection className="section rulebook-section">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Hackathon Rulebook
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              All participants must adhere to these rules to ensure a fair and enjoyable competition for everyone.
            </motion.p>
            
            <div className="rules-grid" ref={rulesRef}>
              <Card 
                cardType="rule-card"
                icon={<i className="fas fa-users"></i>}
                iconClass="rule-icon"
                delay={0.1}
                title="Eligibility Requirements"
              >
                <ul className="rule-list">
                  <li>Open to junior high school, senior high school, and undergraduate students in the Philippines</li>
                  <li>Participants must form teams of 4-6 members</li>
                  <li>Participants under 18 years old must submit a signed consent form</li>
                  <li>Each participant can only be a member of one team</li>
                  <li>All team members must register by the deadline: June 23, 2025</li>
                </ul>
              </Card>

              <Card 
                cardType="rule-card"
                icon={<i className="fas fa-laptop-code"></i>}
                iconClass="rule-icon"
                delay={0.2}
                title="Skill Requirements"
              >
                <p>No coding experience is necessary to participate in the hackathon. We welcome participants of all skill levels, from beginners to advanced developers.</p>
                <p>Teams will have the option to choose whether to use code or no-code tools for their projects. The judging criteria will be adjusted accordingly to ensure fairness.</p>
              </Card>

              <Card 
                cardType="rule-card"
                icon={<i className="fas fa-puzzle-piece"></i>}
                iconClass="rule-icon"
                delay={0.3}
                title="Pre-existing Work"
              >
                <ul className="rule-list">
                  <li>All projects must be created during the hackathon period</li>
                  <li>Pre-existing code, designs, or assets may not be used</li>
                  <li>Open-source libraries and frameworks are allowed, but must be disclosed</li>
                  <li>Any team found using pre-existing work will be disqualified</li>
                </ul>
              </Card>

              <Card 
                cardType="rule-card"
                icon={<i className="fas fa-scroll"></i>}
                iconClass="rule-icon"
                delay={0.4}
                title="Event Rules & Conditions"
              >
                <ul className="rule-list">
                  <li>All participants must adhere to the Code of Conduct</li>
                  <li>Teams must submit their projects by the specified deadlines</li>
                  <li>Judges' decisions are final and cannot be contested</li>
                  <li>Organizers reserve the right to disqualify any team for rule violations</li>
                  <li>Participants grant organizers permission to use images and videos from the event for promotional purposes</li>
                </ul>
              </Card>

              <Card 
                cardType="rule-card"
                icon={<i className="fas fa-building"></i>}
                iconClass="rule-icon"
                delay={0.5}
                title="Use of Facilities"
              >
                <ul className="rule-list">
                  <li>In-person participants must respect the venue's rules and facilities</li>
                  <li>Any damage to venue property will be the responsibility of the participant(s) involved</li>
                  <li>Quiet hours must be observed during overnight periods</li>
                  <li>Participants must clean up their workspaces before leaving</li>
                </ul>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Accepted Project Types */}
        <AnimatedSection className="section project-types-section">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Accepted Project Types
            </motion.h2>
            
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Create & Conquer 2025 welcomes a wide range of project types. Teams can choose to develop any of the following:
            </motion.p>
            
            <div className="project-types-grid" ref={projectTypesRef}>
              <div className="project-type">
                <div className="project-type-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3>Mobile Application</h3>
                <p>Android, iOS, or cross-platform mobile apps</p>
              </div>

              <div className="project-type">
                <div className="project-type-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h3>Web Application</h3>
                <p>Dynamic web applications with frontend and/or backend components</p>
              </div>

              <div className="project-type">
                <div className="project-type-icon">
                  <i className="fas fa-gamepad"></i>
                </div>
                <h3>Game</h3>
                <p>Digital games for mobile, web, or desktop platforms</p>
              </div>

              <div className="project-type">
                <div className="project-type-icon">
                  <i className="fas fa-puzzle-piece"></i>
                </div>
                <h3>Web Extension</h3>
                <p>Browser extensions that enhance web browsing experience</p>
              </div>

              <div className="project-type">
                <div className="project-type-icon">
                  <i className="fas fa-laptop"></i>
                </div>
                <h3>Website</h3>
                <p>Static or content-focused websites</p>
              </div>

              <div className="project-type">
                <div className="project-type-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>IoT</h3>
                <p>Internet of Things projects with hardware components</p>
              </div>

              <div className="project-type">
                <div className="project-type-icon">
                  <i className="fas fa-microchip"></i>
                </div>
                <h3>Hardware</h3>
                <p>Physical computing projects and hardware prototypes</p>
              </div>

              <div className="project-type">
                <div className="project-type-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <h3>Robot</h3>
                <p>Robotics projects with mechanical and electronic components</p>
              </div>

              <div className="project-type">
                <div className="project-type-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Other</h3>
                <p>Other technological outputs with approval from organizers</p>
              </div>
            </div>
            
            <div className="project-types-note">
              <p>
                Not sure which project type to choose? Contact the organizers at 
                <a href="mailto:cpeo.feutech.ph@gmail.com"> cpeo.feutech.ph@gmail.com</a> for guidance.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Project Submission Guide */}
        <AnimatedSection className="section submission-guide-section">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Project Submission Guide
            </motion.h2>
            
            <div className="submission-rounds" ref={submissionRef}>
              <div className="submission-round">
                <h3>Elimination Round Requirements</h3>
                <p className="deadline">
                  <i className="fas fa-calendar-alt"></i> Deadline: June 30, 2025 (Monday) | 1:00 PM
                </p>
                
                <div className="submission-items">
                  <div className="submission-item">
                    <div className="submission-icon">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <div className="submission-content">
                      <h4>Proof of Concept</h4>
                      <p>A preliminary version of your project that demonstrates its core functionality</p>
                    </div>
                  </div>
                  
                  <div className="submission-item">
                    <div className="submission-icon">
                      <i className="fas fa-file-signature"></i>
                    </div>
                    <div className="submission-content">
                      <h4>Project Brief</h4>
                      <p>A document explaining your project's purpose, target users, and how it addresses the hackathon theme</p>
                    </div>
                  </div>
                  
                  <div className="submission-item">
                    <div className="submission-icon">
                      <i className="fas fa-film"></i>
                    </div>
                    <div className="submission-content">
                      <h4>Short Video Demo/Presentation</h4>
                      <p>A 2-3 minute video demonstrating your project and explaining its features</p>
                    </div>
                  </div>
                  
                  <div className="submission-item">
                    <div className="submission-icon">
                      <i className="fab fa-github"></i>
                    </div>
                    <div className="submission-content">
                      <h4>Link to Project Github (Optional)</h4>
                      <p>For code-based projects, provide a link to your GitHub repository</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="submission-round">
                <h3>Final Round Requirements</h3>
                <p className="deadline">
                  <i className="fas fa-calendar-alt"></i> Deadline: July 4, 2025 (Friday) | 11:59 PM
                </p>
                
                <div className="submission-categories">
                  <div className="submission-category">
                    <h4><i className="fas fa-wand-magic-sparkles"></i> For No-Code Participants</h4>
                    <div className="submission-items">
                      <div className="submission-item">
                        <div className="submission-icon">
                          <i className="fas fa-file-alt"></i>
                        </div>
                        <div className="submission-content">
                          <h4>Finalized Proof of Concept</h4>
                          <p>The completed version of your no-code project</p>
                        </div>
                      </div>
                      
                      <div className="submission-item">
                        <div className="submission-icon">
                          <i className="fas fa-file-signature"></i>
                        </div>
                        <div className="submission-content">
                          <h4>Finalized Project Brief</h4>
                          <p>An updated document explaining your project in detail</p>
                        </div>
                      </div>
                      
                      <div className="submission-item">
                        <div className="submission-icon">
                          <i className="fas fa-desktop"></i>
                        </div>
                        <div className="submission-content">
                          <h4>Presentation Deck</h4>
                          <p>Slides for your final presentation during Demo Day</p>
                        </div>
                      </div>
                      
                      <div className="submission-item">
                        <div className="submission-icon">
                          <i className="fas fa-video"></i>
                        </div>
                        <div className="submission-content">
                          <h4>30-second Project Video Teaser</h4>
                          <p>A brief promotional video highlighting your project</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="submission-category">
                    <h4><i className="fas fa-code"></i> For Code Participants</h4>
                    <div className="submission-items">
                      <div className="submission-item">
                        <div className="submission-icon">
                          <i className="fas fa-file-alt"></i>
                        </div>
                        <div className="submission-content">
                          <h4>Finalized Proof of Concept</h4>
                          <p>The completed version of your coded project</p>
                        </div>
                      </div>
                      
                      <div className="submission-item">
                        <div className="submission-icon">
                          <i className="fas fa-file-signature"></i>
                        </div>
                        <div className="submission-content">
                          <h4>Finalized Project Brief</h4>
                          <p>An updated document explaining your project in detail</p>
                        </div>
                      </div>
                      
                      <div className="submission-item">
                        <div className="submission-icon">
                          <i className="fas fa-code-branch"></i>
                        </div>
                        <div className="submission-content">
                          <h4>Code Submission (GitHub repository)</h4>
                          <p>A public or private GitHub repository containing your project code</p>
                        </div>
                      </div>
                      
                      <div className="submission-item">
                        <div className="submission-icon">
                          <i className="fas fa-desktop"></i>
                        </div>
                        <div className="submission-content">
                          <h4>Presentation Deck</h4>
                          <p>Slides for your final presentation during Demo Day</p>
                        </div>
                      </div>
                      
                      <div className="submission-item">
                        <div className="submission-icon">
                          <i className="fas fa-video"></i>
                        </div>
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
              <h3>
                <i className="fas fa-exclamation-circle"></i> Important Submission Notes
              </h3>
              <ul>
                <li>All submissions must be made through the official hackathon platform</li>
                <li>Late submissions will not be accepted</li>
                <li>All team members must be listed in the submission</li>
                <li>Teams must comply with intellectual property laws and open-source licenses</li>
                <li>Detailed submission instructions will be sent to registered teams</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Questions About the Rules?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Contact us for clarification or join our Discord server for real-time assistance.
              </motion.p>
              <motion.div 
                className="cta-buttons"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/contact" className="btn btn-white">
                  <i className="fas fa-envelope"></i> Contact Us
                </Link>
                <Link to="/resources" className="btn btn-secondary">
                  <i className="fas fa-book"></i> View Resources
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Rules; 
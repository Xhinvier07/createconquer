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

const Judging = () => {
  const [activeTab, setActiveTab] = useState('judging');
  const criteriaRef = useRef(null);
  const processRef = useRef(null);
  const prizesRef = useRef(null);
  const rulesRef = useRef(null);
  const projectTypesRef = useRef(null);
  const submissionRef = useRef(null);
  
  // Animation setup with GSAP
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Safety delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Initialize animations based on the active tab
      if (activeTab === 'judging') {
        initJudgingAnimations();
      } else if (activeTab === 'rules') {
        initRulesAnimations();
      }
    }, 200);
    
    return () => clearTimeout(timer);
  }, [activeTab]);
  
  // Initialize animations for the judging tab
  const initJudgingAnimations = () => {
    // Criteria cards staggered animation
    if (criteriaRef.current) {
      const criteriaCards = criteriaRef.current.querySelectorAll('.card.criterion-card');
      if (criteriaCards && criteriaCards.length > 0) {
        gsap.fromTo(criteriaCards, 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.1, 
            ease: "power3.out", 
            scrollTrigger: {
              trigger: criteriaRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }
    
    // Process steps animation
    if (processRef.current) {
      const steps = processRef.current.querySelectorAll('.process-step');
      if (steps && steps.length > 0) {
        gsap.fromTo(steps,
          { x: -30, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.6, 
            stagger: 0.15, 
            ease: "power2.out", 
            scrollTrigger: {
              trigger: processRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }
    
    // Prize cards animation
    if (prizesRef.current) {
      const prizeCards = prizesRef.current.querySelectorAll('.card.prize-card');
      if (prizeCards && prizeCards.length > 0) {
        gsap.fromTo(prizeCards,
          { y: 40, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.15, 
            ease: "back.out(1.2)", 
            scrollTrigger: {
              trigger: prizesRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }
  };
  
  // Initialize animations for the rules tab
  const initRulesAnimations = () => {
    // Rules cards animation
    if (rulesRef.current) {
      const ruleCards = rulesRef.current.querySelectorAll('.rule-card');
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
            Judging, Rules & Prizes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about the competition format and evaluation
          </motion.p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation-container">
        <div className="container">
          <div className="tabs">
            <button 
              className={`tab-button ${activeTab === 'judging' ? 'active' : ''}`}
              onClick={() => setActiveTab('judging')}
            >
              <i className="fas fa-gavel"></i> Judging & Prizes
            </button>
            <button 
              className={`tab-button ${activeTab === 'rules' ? 'active' : ''}`}
              onClick={() => setActiveTab('rules')}
            >
              <i className="fas fa-book"></i> Rules & Guidelines
            </button>
          </div>
        </div>
      </div>

      {/* Judging Content */}
      <div className={`tab-content ${activeTab === 'judging' ? 'active' : ''}`}>
        <div className="main-content">
          {/* Judging Criteria */}
          <AnimatedSection className="section judging-criteria-section">
            <div className="container">
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Judging Criteria
              </motion.h2>
              <motion.p
                className="section-subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                All projects submitted at Create & Conquer 2025 will be evaluated based on the following criteria. Projects will be scored on a scale of 1-10 for each criterion, and the final score will be a weighted average based on the percentages indicated.
              </motion.p>
              
              <div className="criteria-grid grid grid-3" ref={criteriaRef}>
                <Card 
                  title="Theme Relevance" 
                  cardType="criterion"
                  icon={<i className="fas fa-bullseye"></i>}
                  iconClass="theme-icon"
                  delay={0.1}
                >
                  <p className="criterion-header">
                    <span>How well does the project align with the hackathon theme?</span>
                    <span className="criterion-weight">10%</span>
                  </p>
                  <div className="criterion-details">
                    <h4>What judges look for:</h4>
                    <ul>
                      <li>Clear connection to the theme</li>
                      <li>Thoughtful interpretation of the theme</li>
                      <li>Theme integration throughout the project</li>
                    </ul>
                  </div>
                </Card>

                <Card 
                  title="Innovation & Creativity" 
                  cardType="criterion"
                  icon={<i className="fas fa-lightbulb"></i>}
                  iconClass="innovation-icon"
                  delay={0.2}
                >
                  <p className="criterion-header">
                    <span>How original and creative is the solution?</span>
                    <span className="criterion-weight">30%</span>
                  </p>
                  <div className="criterion-details">
                    <h4>What judges look for:</h4>
                    <ul>
                      <li>Uniqueness of the idea</li>
                      <li>Creative approach to solving the problem</li>
                      <li>Differentiation from existing solutions</li>
                      <li>Innovative use of technology</li>
                    </ul>
                  </div>
                </Card>

                <Card 
                  title="Impact" 
                  cardType="criterion"
                  icon={<i className="fas fa-chart-line"></i>}
                  iconClass="impact-icon"
                  delay={0.3}
                >
                  <p className="criterion-header">
                    <span>What is the potential impact of the solution?</span>
                    <span className="criterion-weight">10%</span>
                  </p>
                  <div className="criterion-details">
                    <h4>What judges look for:</h4>
                    <ul>
                      <li>Potential social/economic impact</li>
                      <li>Scale of the problem being addressed</li>
                      <li>Effectiveness of the solution</li>
                      <li>Beneficiaries of the solution</li>
                    </ul>
                  </div>
                </Card>

                <Card 
                  title="Execution" 
                  cardType="criterion"
                  icon={<i className="fas fa-cogs"></i>}
                  iconClass="execution-icon"
                  delay={0.4}
                >
                  <p className="criterion-header">
                    <span>How well was the solution implemented?</span>
                    <span className="criterion-weight">30%</span>
                  </p>
                  <div className="criterion-details">
                    <h4>What judges look for:</h4>
                    <ul>
                      <li>Technical implementation quality</li>
                      <li>Functionality and completeness</li>
                      <li>User experience and design</li>
                      <li>Quality of the prototype or demo</li>
                    </ul>
                  </div>
                </Card>

                <Card 
                  title="Relevance & Feasibility" 
                  cardType="criterion"
                  icon={<i className="fas fa-check-circle"></i>}
                  iconClass="feasibility-icon"
                  delay={0.5}
                >
                  <p className="criterion-header">
                    <span>How relevant and feasible is the solution?</span>
                    <span className="criterion-weight">20%</span>
                  </p>
                  <div className="criterion-details">
                    <h4>What judges look for:</h4>
                    <ul>
                      <li>Practicality of the solution</li>
                      <li>Technical and economic feasibility</li>
                      <li>Scalability potential</li>
                      <li>Market fit and target audience</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </AnimatedSection>

          {/* Judging Process */}
          <AnimatedSection className="section judging-process-section bg-secondary">
            <div className="container">
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Judging Process
              </motion.h2>
              
              <div className="process-steps" ref={processRef}>
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Initial Submission</h3>
                    <p>
                      Teams submit their proposals by June 30, 2025 (1:00 PM). This includes a proof of concept, 
                      project brief, and short video demo/presentation.
                    </p>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Preliminary Evaluation</h3>
                    <p>
                      All proposals undergo an initial evaluation by the judging panel to identify the top 8 
                      projects that will proceed to the final round.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Finalist Announcement</h3>
                    <p>
                      Top 8 finalists will be announced on July 1, 2025 (1:00 PM). Finalists will have until 
                      July 4, 2025 (11:59 PM) to submit their final outputs.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3>Live Presentations</h3>
                    <p>
                      Finalists will present their projects live to the judges and audience on July 5, 2025 (8:00 AM - 12:00 PM). 
                      Each team will have 15 minutes for their presentation.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h3>Final Deliberation & Awards</h3>
                    <p>
                      Judges will deliberate from 1:00 PM to 2:00 PM. Winners will be announced during the 
                      Awards Ceremony on July 5, 2025, from 2:00 PM to 3:00 PM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Judges */}
          <AnimatedSection className="section judges-section">
            <div className="container">
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Meet Our Judges
              </motion.h2>
              
              <motion.p
                className="section-subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Our judges are experts from various fields including technology, business, design, and academia. 
                They bring diverse perspectives and expertise to evaluate your projects.
              </motion.p>
              
              <div className="judges-note">
                <p>
                  <strong>Note:</strong> Judges for the Create & Conquer 2025 Hackathon will be announced closer to the event. 
                  Check back later for updates, or follow us on social media for announcements.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Prizes */}
          <AnimatedSection className="section prizes-section bg-accent">
            <div className="container">
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Prizes
              </motion.h2>
              
              <motion.p
                className="section-subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Create & Conquer 2025 offers a total prize pool of ₱9,500 across various categories.
              </motion.p>
              
              <div className="prizes-container">
                <h3 className="prizes-category-title">Main Prizes</h3>
                <div className="prizes-grid grid grid-3" ref={prizesRef}>
                  <Card
                    cardType="prize"
                    className="first-prize"
                    delay={0.1}
                  >
                    <div className="prize-medal">1st</div>
                    <h4>Champion</h4>
                    <div className="prize-amount">₱4,500</div>
                    <ul className="prize-perks">
                      <li>Cash prize</li>
                      <li>Winner's trophy</li>
                      <li>Certificates</li>
                      <li>Recognition on CPEO and FEU Tech Innovation Center platforms</li>
                    </ul>
                  </Card>
                  
                  <Card
                    cardType="prize"
                    className="second-prize"
                    delay={0.2}
                  >
                    <div className="prize-medal">2nd</div>
                    <h4>1st Place</h4>
                    <div className="prize-amount">₱3,000</div>
                    <ul className="prize-perks">
                      <li>Cash prize</li>
                      <li>Trophy</li>
                      <li>Certificates</li>
                      <li>Recognition on CPEO and FEU Tech Innovation Center platforms</li>
                    </ul>
                  </Card>
                  
                  <Card
                    cardType="prize"
                    className="third-prize"
                    delay={0.3}
                  >
                    <div className="prize-medal">3rd</div>
                    <h4>2nd Place</h4>
                    <div className="prize-amount">₱2,000</div>
                    <ul className="prize-perks">
                      <li>Cash prize</li>
                      <li>Trophy</li>
                      <li>Certificates</li>
                      <li>Recognition on CPEO and FEU Tech Innovation Center platforms</li>
                    </ul>
                  </Card>
                </div>

                <h3 className="prizes-category-title">Special Awards</h3>
                <div className="special-prizes-grid grid grid-3">
                  <Card
                    title="Sponsor Award 1"
                    cardType="prize"
                    className="special-prize"
                    delay={0.1}
                  >
                    <div className="prize-amount">TBA</div>
                    <p>Special prize sponsored by our partners (to be announced).</p>
                  </Card>
                  
                  <Card
                    title="Sponsor Award 2"
                    cardType="prize"
                    className="special-prize"
                    delay={0.2}
                  >
                    <div className="prize-amount">TBA</div>
                    <p>Special prize sponsored by our partners (to be announced).</p>
                  </Card>
                  
                  <Card
                    title="Best Presenter"
                    cardType="prize"
                    className="special-prize"
                    delay={0.3}
                  >
                    <div className="prize-amount">Certificate</div>
                    <p>Awarded to the team with the most impressive presentation skills.</p>
                  </Card>
                  
                  <Card
                    title="Best Working Prototype"
                    cardType="prize"
                    className="special-prize"
                    delay={0.4}
                  >
                    <div className="prize-amount">Certificate</div>
                    <p>Awarded to the most functional and well-executed project implementation.</p>
                  </Card>
                  
                  <Card
                    title="Fan Favourite Award"
                    cardType="prize"
                    className="special-prize"
                    delay={0.5}
                  >
                    <div className="prize-amount">Certificate</div>
                    <p>Awarded to the team whose project receives the most audience votes.</p>
                  </Card>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Rules Content */}
      <div className={`tab-content ${activeTab === 'rules' ? 'active' : ''}`}>
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
              
              <div className="rules-grid" ref={rulesRef}>
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
          </AnimatedSection>
        </div>
      </div>

      {/* Common CTA Section (visible in both tabs) */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Participate?</h2>
            <p>Register now for Create & Conquer 2025 and showcase your creativity!</p>
            <div className="cta-buttons">
              <Link to="/registration" className="btn btn-white">Register Now</Link>
              <Link to="/resources" className="btn btn-secondary">View Resources</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Judging; 
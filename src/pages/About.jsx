import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import cpeoLogo from '../assets/cpeo.png';
import fticLogo from '../assets/ftic.png';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="about-page">
      {/* Page Banner with Particle Background */}
      <div className="page-banner">
        <ParticleBackground color="#00E676" opacity={0.2} />
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Create & Conquer 2025
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Learn more about our hackathon and organizing teams
          </motion.p>
        </div>
      </div>

      <div className="main-content">
        {/* Event Introduction Section */}
        <AnimatedSection className="section event-intro-section">
          <div className="container">
            <div className="event-intro-content">
              <div className="event-intro-text">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="intro-heading"
                >
                  <span className="animated-star"><i className="fas fa-star"></i></span>
                  CREATE & CONQUER 2025: Redefining Innovation
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="intro-tagline"
                >
                  Where creativity meets technology to shape the future
                </motion.p>
                <motion.div
                  className="intro-paragraph"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="drop-cap">
                    CREATE & CONQUER 2025 Hackathon is the inaugural hackathon organized by the FEU Institute of Technology's 
                    Computer Engineering Organization, connecting creative minds and redefining the landscape of innovation.
                  </p>
                  <p>
                    Our mission is to provide a platform for students to showcase their creativity, problem-solving skills, 
                    and innovation in a competitive yet collaborative environment.
                  </p>
                  <div className="highlighted-quote">
                    <span className="quote-mark"><i className="fas fa-quote-left"></i></span>
                    <span className="quote-text">No coding skills? No problem!</span>
                    <span className="quote-mark"><i className="fas fa-quote-right"></i></span>
                  </div>
                  <p>
                    Unlike traditional hackathons, CREATE & CONQUER 2025 
                    welcomes participants of all skill levels, including those with zero coding experience. We believe that 
                    great ideas can come from anyone, and we're here to support your journey from concept to creation.
                  </p>
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  What Makes Us Unique
                </motion.h3>
                <ul className="feature-list">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="feature-icon"><i className="fas fa-users"></i></span>
                    <div>
                      <strong>Inclusive Environment</strong>
                      <p>Open to junior high school, senior high school, and undergraduate students across the Philippines</p>
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <span className="feature-icon"><i className="fas fa-code"></i></span>
                    <div>
                      <strong>No Coding Experience Needed</strong>
                      <p>We provide resources and support for participants of all skill levels</p>
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <span className="feature-icon"><i className="fas fa-globe-asia"></i></span>
                    <div>
                      <strong>Hybrid Format</strong>
                      <p>Participate in-person (Metro Manila) or remotely from anywhere in the Philippines</p>
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <span className="feature-icon"><i className="fas fa-hands-helping"></i></span>
                    <div>
                      <strong>Comprehensive Support</strong>
                      <p>Access to mentors, resources, and a supportive community throughout the event</p>
                    </div>
                  </motion.li>
                </ul>
              </div>
              <div className="event-intro-visual">
                <motion.div 
                  className="intro-image-container"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="tech-pattern"></div>
                  <div className="animated-circuit"></div>
                  <div className="parallax-image">
                    <div className="image-placeholder">
                      <i className="fas fa-laptop-code"></i>
                    </div>
                    <span className="image-caption">Innovation in action</span>
                  </div>
                </motion.div>
                <div className="icons-grid">
                  <div className="icon-item">
                    <i className="fas fa-brain"></i>
                    <span>Creativity</span>
                  </div>
                  <div className="icon-item">
                    <i className="fas fa-rocket"></i>
                    <span>Innovation</span>
                  </div>
                  <div className="icon-item">
                    <i className="fas fa-users"></i>
                    <span>Collaboration</span>
                  </div>
                  <div className="icon-item">
                    <i className="fas fa-lightbulb"></i>
                    <span>Ideas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* About the Organizers */}
        <AnimatedSection className="section organizers-about-section">
          <div className="container">
            <h2 className="section-title">About the Organizers</h2>
            
            <div className="organizers-grid">
              <motion.div 
                className="organizer-card cpeo-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="organizer-content">
                  <div className="organizer-logo-container">
                    <img src={cpeoLogo} alt="Computer Engineering Organization Logo" />
                  </div>
                  <div className="organizer-title">
                    <h3>Computer Engineering Organization (CPEO)</h3>
                    <p><i className="fas fa-university"></i> FEU Tech</p>
                  </div>
                  <div className="organizer-description">
                    <p>
                      The Computer Engineering Organization (CPEO) is a recognized student body of the Far Eastern University 
                      Institute of Technology (FEU Tech) and an affiliate of the Institute of Computer Engineers of the 
                      Philippines - Student Edition.
                    </p>
                    <p>
                      Based in Sampaloc, Manila, CPEO is dedicated to fostering academic excellence, leadership, and innovation 
                      among computer engineering students through various events, workshops, and competitions.
                    </p>
                  </div>
                  <div className="organizer-values">
                    <div className="value-icon"><i className="fas fa-graduation-cap"></i><span>Excellence</span></div>
                    <div className="value-icon"><i className="fas fa-users"></i><span>Community</span></div>
                    <div className="value-icon"><i className="fas fa-lightbulb"></i><span>Innovation</span></div>
                  </div>
                  <div className="organizer-socials">
                    <a href="https://facebook.com/feutechCpEO" target="_blank" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/CpEOfeutech" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                  </div>
                  <div className="hover-text">Hover to learn more</div>
                </div>
              </motion.div>

              <motion.div 
                className="organizer-card ftic-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="organizer-content">
                  <div className="organizer-logo-container">
                    <img src={fticLogo} alt="FEU Tech Innovation Center Logo" />
                  </div>
                  <div className="organizer-title">
                    <h3>FEU Innovation Center</h3>
                    <p><i className="fas fa-university"></i> FEU Tech</p>
                  </div>
                  <div className="organizer-description">
                    <p>
                      The FEU Innovation Center is a leading ecosystem of learning support for students, alumni, faculty, and 
                      employees. It aims to incubate business ideas and social enterprises, providing the resources and 
                      mentorship needed to turn concepts into reality.
                    </p>
                    <p>
                      As a hub for innovation and entrepreneurship, the FEU Innovation Center plays a crucial role in 
                      fostering a culture of creativity and forward-thinking within the FEU community.
                    </p>
                  </div>
                  <div className="organizer-values">
                    <div className="value-icon"><i className="fas fa-lightbulb"></i><span>Innovation</span></div>
                    <div className="value-icon"><i className="fas fa-handshake"></i><span>Mentorship</span></div>
                    <div className="value-icon"><i className="fas fa-rocket"></i><span>Entrepreneurship</span></div>
                  </div>
                  <div className="organizer-socials">
                    <a href="https://facebook.com/feutechinnovationcenter" target="_blank" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.linkedin.com/company/feu-tech-innovation-center" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  </div>
                  <div className="hover-text">Hover to learn more</div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Vision and Goals */}
        <AnimatedSection className="section vision-section">
          <div className="container">
            <h2 className="section-title">Our Vision and Goals</h2>
            <div className="vision-content">
              <Card 
                title="Foster Innovation"
                icon={<i className="fas fa-lightbulb"></i>}
                iconClass="vision-icon"
                delay={0.1}
              >
                <p>
                  Create an environment where participants can explore new ideas, technologies, and approaches to 
                  problem-solving without fear of failure.
                </p>
              </Card>

              <Card 
                title="Build Community"
                icon={<i className="fas fa-users"></i>}
                iconClass="vision-icon"
                delay={0.2}
              >
                <p>
                  Connect students from different schools, backgrounds, and skill levels to share knowledge, 
                  collaborate, and form lasting relationships.
                </p>
              </Card>

              <Card 
                title="Develop Skills"
                icon={<i className="fas fa-chart-line"></i>}
                iconClass="vision-icon"
                delay={0.3}
              >
                <p>
                  Provide opportunities for participants to enhance their technical, creative, and soft skills 
                  through real-world challenges and teamwork.
                </p>
              </Card>

              <Card 
                title="Celebrate Creativity"
                icon={<i className="fas fa-paint-brush"></i>}
                iconClass="vision-icon"
                delay={0.4}
              >
                <p>
                  Recognize and reward innovative solutions that demonstrate creativity, technical excellence, 
                  and potential for real-world impact.
                </p>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <section className="about-cta-section">
          <div className="container">
            <div className="about-cta-content">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="cta-heading"
              >
                Ready to Create & Conquer?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="cta-text"
              >
                Join us for a transformative experience that will challenge your creativity and expand your skills.
              </motion.p>
              
              <motion.div 
                className="about-countdown-container"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="about-countdown-label">Registration opens:</div>
                <div className="about-countdown-date">June 14, 2025</div>
              </motion.div>
              
              <motion.div 
                className="about-cta-buttons"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link to="/registration" className="btn btn-primary cta-button">
                  <span className="btn-text">Register Now</span>
                  <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                </Link>
                <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
              </motion.div>
            </div>
          </div>
          <div className="geometric-decorations">
            <div className="geo-shape shape-1"></div>
            <div className="geo-shape shape-2"></div>
            <div className="geo-shape shape-3"></div>
            <div className="geo-shape shape-4"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 
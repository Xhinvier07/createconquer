import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Card from '../components/Card';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedSection from '../components/AnimatedSection';
import './Resources.css';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('general');
  
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
  
  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="resources-page">
      {/* Page Banner with Particle Background - Matching About.jsx style */}
      <div className="page-banner">
        <ParticleBackground color="#FFEB3B" opacity={0.2} />
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Helpful resources to prepare for the hackathon
          </motion.p>
        </div>
      </div>

      <div className="main-content">
        {/* FAQ Tabs */}
        <AnimatedSection className="section faq-section" id="faqs">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Find answers to common questions about Create & Conquer 2025.
            </motion.p>
            
            <div className="faq-tabs">
              <div className="tabs-navigation">
                <button 
                  className={`tab-button ${activeTab === 'general' ? 'active' : ''}`}
                  onClick={() => switchTab('general')}
                >
                  <i className="fas fa-info-circle"></i> General FAQ
                </button>
                <button 
                  className={`tab-button ${activeTab === 'submission' ? 'active' : ''}`}
                  onClick={() => switchTab('submission')}
                >
                  <i className="fas fa-upload"></i> Project Submission FAQ
                </button>
              </div>
              
              <div className="tabs-content">
                {/* General FAQ Tab */}
                <motion.div 
                  className={`tab-pane ${activeTab === 'general' ? 'active' : ''}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate={activeTab === 'general' ? "visible" : "hidden"}
                  key="general"
                >
                  <div className="faq-grid">
                    <motion.div className="faq-item" variants={itemVariants}>
                      <h3>
                        <i className="fas fa-question-circle"></i>
                        What is Create & Conquer 2025?
                      </h3>
                      <p>
                        Create & Conquer 2025 is the inaugural hackathon organized by the FEU Institute of Technology's 
                        Computer Engineering Organization, connecting creative minds and redefining the landscape of innovation. 
                        It brings together students, visionary thinkers, and developers from across Metro Manila and the Philippines.
                      </p>
                    </motion.div>
                    
                    <motion.div className="faq-item" variants={itemVariants}>
                      <h3>
                        <i className="fas fa-medal"></i>
                        Why should I participate?
                      </h3>
                      <p>
                        Participating in Create & Conquer 2025 offers numerous benefits: gain hands-on experience, 
                        network with like-minded individuals, learn new skills, possibly win prizes, and add a 
                        valuable experience to your portfolio or resume.
                      </p>
                    </motion.div>
                    
                    <motion.div className="faq-item" variants={itemVariants}>
                      <h3>
                        <i className="fas fa-laptop-code"></i>
                        I don't have coding experience; can I still join?
                      </h3>
                      <p>
                        Absolutely! Create & Conquer 2025 is designed to be inclusive for participants of all skill levels. 
                        No coding experience is necessary, and we welcome teams that want to use no-code tools for their projects.
                      </p>
                    </motion.div>
                    
                    <motion.div className="faq-item" variants={itemVariants}>
                      <h3>
                        <i className="fas fa-balance-scale"></i>
                        Is coding a part of the judging criteria?
                      </h3>
                      <p>
                        No, technical implementation is just one aspect of the judging criteria. Projects will be evaluated on 
                        theme relevance, innovation & creativity, impact, execution, and relevance & feasibility. 
                        No-code solutions are equally welcomed and will be judged based on the same overall criteria.
                      </p>
                    </motion.div>
                    
                    <motion.div className="faq-item" variants={itemVariants}>
                      <h3>
                        <i className="fas fa-comments"></i>
                        Where can I ask questions during the hackathon?
                      </h3>
                      <p>
                        During the hackathon, you can ask questions through our Discord server, where organizers and mentors 
                        will be available to provide assistance. You can also reach out via email at cpeo.feutech.ph@gmail.com.
                      </p>
                    </motion.div>
                    
                    <motion.div className="faq-item" variants={itemVariants}>
                      <h3>
                        <i className="fas fa-map-marker-alt"></i>
                        Do I need to attend the in-person events to qualify?
                      </h3>
                      <p>
                        No, Create & Conquer 2025 is a hybrid hackathon with both in-person and online participation options. 
                        Remote participants will have equal opportunities to compete and win.
                      </p>
                    </motion.div>
                    
                    <motion.div className="faq-item" variants={itemVariants}>
                      <h3>
                        <i className="fas fa-users"></i>
                        We don't have enough members; where can I look for team members?
                      </h3>
                      <p>
                        You can use our Discord server to connect with potential team members. We'll also host team formation 
                        activities during the pre-hackathon period to help participants find teammates.
                      </p>
                    </motion.div>
                    
                    <motion.div className="faq-item" variants={itemVariants}>
                      <h3>
                        <i className="fas fa-lightbulb"></i>
                        When will the theme be announced?
                      </h3>
                      <p>
                        The hackathon theme will be announced during the Orientation & Kickoff event on June 27, 2025.
                      </p>
                    </motion.div>
                    
                    <motion.div className="faq-item" variants={itemVariants}>
                      <h3>
                        <i className="fas fa-user-friends"></i>
                        Can I join multiple teams?
                      </h3>
                      <p>
                        No, each participant can only be a member of one team for the duration of the hackathon.
                      </p>
                    </motion.div>
                    
                    <motion.div className="faq-item" variants={itemVariants}>
                      <h3>
                        <i className="fas fa-project-diagram"></i>
                        Can our team submit more than one project?
                      </h3>
                      <p>
                        No, each team can only submit one project for consideration.
                      </p>
                    </motion.div>
                    
                    <motion.div className="faq-item" variants={itemVariants}>
                      <h3>
                        <i className="fas fa-code-branch"></i>
                        Can I join with a pre-existing project?
                      </h3>
                      <p>
                        No, all projects must be created during the hackathon period. Pre-existing code, designs, 
                        or assets may not be used, though open-source libraries and frameworks are allowed.
                      </p>
                    </motion.div>
                    
                    <motion.div className="faq-item" variants={itemVariants}>
                      <h3>
                        <i className="fas fa-user-minus"></i>
                        What if a team member drops out during the competition?
                      </h3>
                      <p>
                        Teams may continue with fewer members if needed, as long as the team still has at least 4 members. 
                        In exceptional circumstances, please contact the organizers for guidance.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Submission FAQ Tab */}
                <motion.div 
                  className={`tab-pane ${activeTab === 'submission' ? 'active' : ''}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate={activeTab === 'submission' ? "visible" : "hidden"}
                  key="submission"
                >
                  <div className="faq-grid">
                    <motion.div className="faq-item" variants={itemVariants}>
                      <h3>
                        <i className="fas fa-user-check"></i>
                        Who will submit the project?
                      </h3>
                      <p>
                        The team leader is responsible for submitting the project on behalf of the team through 
                        the official submission platform.
                      </p>
                    </motion.div>
                    
                    <motion.div className="faq-item" variants={itemVariants}>
                      <h3>
                        <i className="fab fa-github"></i>
                        Can I make my GitHub repository private?
                      </h3>
                      <p>
                        Yes, you can keep your GitHub repository private during development. For the final submission, 
                        you can either make it public or provide access to the judges if you prefer to keep it private.
                      </p>
                    </motion.div>
                    
                    <motion.div className="faq-item" variants={itemVariants}>
                      <h3>
                        <i className="fas fa-exclamation-triangle"></i>
                        We submitted the wrong file; what should we do?
                      </h3>
                      <p>
                        If you submitted the wrong file or need to make changes to your submission before the deadline, 
                        please contact the organizers immediately at cpeo.feutech.ph@gmail.com.
                      </p>
                    </motion.div>
                    
                    <motion.div className="faq-item" variants={itemVariants}>
                      <h3>
                        <i className="fas fa-robot"></i>
                        Can we use AI during the competition?
                      </h3>
                      <p>
                        Yes, you can use AI tools such as ChatGPT, GitHub Copilot, or other AI assistants to help with 
                        your project. However, you must disclose all AI tools used in your project submission, and the 
                        core idea and implementation should be your team's original work.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Discord Information */}
        <AnimatedSection className="section discord-section" id="discord">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              Join Our Discord Community
            </motion.h2>
            
            <div className="discord-content">
              <motion.div 
                className="discord-details"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <p>
                  Join our official Discord server for Create & Conquer 2025! This is the hub for:
                </p>
                <ul className="discord-features">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <i className="fas fa-users"></i> Finding team members
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <i className="fas fa-bell"></i> Getting real-time updates and announcements
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <i className="fas fa-question-circle"></i> Asking questions to organizers and mentors
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <i className="fas fa-network-wired"></i> Connecting with other participants
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <i className="fas fa-file-alt"></i> Accessing exclusive resources and support
                  </motion.li>
                </ul>
                <motion.div 
                  className="discord-join"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <a href="https://discord.gg/sY8KtCDNpj" className="btn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-discord"></i> Join Discord Server
                  </a>
                </motion.div>
              </motion.div>
              <motion.div 
                className="discord-image"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="discord-illustration">
                  <i className="fab fa-discord"></i>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Guides Section */}
        <AnimatedSection className="section guides-section" id="guides">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              Participant Guides
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Download these guides to help you prepare for and navigate the hackathon.
            </motion.p>
            
            <motion.div 
              className="resources-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants}>
                <Card
                  title="Hackathon Primer"
                  icon={<i className="fas fa-book"></i>}
                  delay={0.1}
                >
                  <p>A comprehensive guide with everything you need to know before participating in Create & Conquer 2025.</p>
                  <a href="https://bit.ly/createconquerprimer" className="resource-link">Open Participant Primer</a>
                </Card>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Card
                  title="Sample Project Brief"
                  icon={<i className="fas fa-file-alt"></i>}
                  delay={0.2}
                >
                  <p>An example of what a complete project brief looks like, to help you structure your submission properly.</p>
                  <a href="#" className="resource-link">To Be Added</a>
                </Card>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Card
                  title="Sample Project Demo"
                  icon={<i className="fas fa-laptop-code"></i>}
                  delay={0.3}
                >
                  <p>Watch examples of successful project demos from past hackathons to inspire your presentation.</p>
                  <a href="#" className="resource-link">To Be Added</a>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <Section className="cta-section" withContainer={true}>
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to participate?</h2>
            <p>Registration is open from June 9 to June 23, 2025. Join us for an exciting hackathon experience!</p>
            <div className="cta-buttons">
              <Link to="/registration" className="btn btn-white">Register Now</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </motion.div>
        </Section>
      </div>
    </div>
  );
};

export default Resources; 
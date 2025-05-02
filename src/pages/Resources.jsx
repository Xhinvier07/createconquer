import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../components/Section';
import Card from '../components/Card';
import ParticleBackground from '../components/ParticleBackground';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Resources = () => {
  const [activeTab, setActiveTab] = useState('general');
  const faqsRef = useRef(null);
  const guidesRef = useRef(null);
  
  // GSAP animations
  useEffect(() => {
    // Safety delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (faqsRef.current) {
        const faqItems = faqsRef.current.querySelectorAll('.faq-item');
        if (faqItems && faqItems.length > 0) {
          gsap.from(faqItems, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: faqsRef.current,
              start: "top 70%"
            }
          });
        }
      }
      
      if (guidesRef.current) {
        const guides = guidesRef.current.querySelectorAll('.card');
        if (guides && guides.length > 0) {
          gsap.from(guides, {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: guidesRef.current,
              start: "top 75%"
            }
          });
        }
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeTab]);
  
  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="resources-page">
      {/* Header Banner */}
      <section className="page-banner with-particle-bg">
        <ParticleBackground color="#FFEB3B" opacity={0.2} />
        <div className="container">
          <h1>Resources</h1>
          <p>Helpful resources to prepare for the hackathon</p>
        </div>
      </section>

      <div className="main-content">
        {/* FAQ Tabs */}
        <Section 
          title="Frequently Asked Questions" 
          subtitle="Find answers to common questions about Create & Conquer 2025."
          className="faq-section"
          id="faqs"
        >
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
            
            <div className="tabs-content" ref={faqsRef}>
              {/* General FAQ Tab */}
              <div className={`tab-pane ${activeTab === 'general' ? 'active' : ''}`}>
                <div className="faq-grid">
                  <div className="faq-item">
                    <h3>
                      <i className="fas fa-question-circle"></i>
                      What is Create & Conquer 2025?
                    </h3>
                    <p>
                      Create & Conquer 2025 is the inaugural hackathon organized by the FEU Institute of Technology's 
                      Computer Engineering Organization, connecting creative minds and redefining the landscape of innovation. 
                      It brings together students, visionary thinkers, and developers from across Metro Manila and the Philippines.
                    </p>
                  </div>
                  
                  <div className="faq-item">
                    <h3>
                      <i className="fas fa-medal"></i>
                      Why should I participate?
                    </h3>
                    <p>
                      Participating in Create & Conquer 2025 offers numerous benefits: gain hands-on experience, 
                      network with like-minded individuals, learn new skills, possibly win prizes, and add a 
                      valuable experience to your portfolio or resume.
                    </p>
                  </div>
                  
                  <div className="faq-item">
                    <h3>
                      <i className="fas fa-laptop-code"></i>
                      I don't have coding experience; can I still join?
                    </h3>
                    <p>
                      Absolutely! Create & Conquer 2025 is designed to be inclusive for participants of all skill levels. 
                      No coding experience is necessary, and we welcome teams that want to use no-code tools for their projects.
                    </p>
                  </div>
                  
                  <div className="faq-item">
                    <h3>
                      <i className="fas fa-balance-scale"></i>
                      Is coding a part of the judging criteria?
                    </h3>
                    <p>
                      No, technical implementation is just one aspect of the judging criteria. Projects will be evaluated on 
                      theme relevance, innovation & creativity, impact, execution, and relevance & feasibility. 
                      No-code solutions are equally welcomed and will be judged based on the same overall criteria.
                    </p>
                  </div>
                  
                  <div className="faq-item">
                    <h3>
                      <i className="fas fa-comments"></i>
                      Where can I ask questions during the hackathon?
                    </h3>
                    <p>
                      During the hackathon, you can ask questions through our Discord server, where organizers and mentors 
                      will be available to provide assistance. You can also reach out via email at cpeo.feutech.ph@gmail.com.
                    </p>
                  </div>
                  
                  <div className="faq-item">
                    <h3>
                      <i className="fas fa-map-marker-alt"></i>
                      Do I need to attend the in-person events to qualify?
                    </h3>
                    <p>
                      No, Create & Conquer 2025 is a hybrid hackathon with both in-person and online participation options. 
                      Remote participants will have equal opportunities to compete and win.
                    </p>
                  </div>
                  
                  <div className="faq-item">
                    <h3>
                      <i className="fas fa-users"></i>
                      We don't have enough members; where can I look for team members?
                    </h3>
                    <p>
                      You can use our Discord server to connect with potential team members. We'll also host team formation 
                      activities during the pre-hackathon period to help participants find teammates.
                    </p>
                  </div>
                  
                  <div className="faq-item">
                    <h3>
                      <i className="fas fa-lightbulb"></i>
                      When will the theme be announced?
                    </h3>
                    <p>
                      The hackathon theme will be announced during the Orientation & Kickoff event on June 27, 2025.
                    </p>
                  </div>
                  
                  <div className="faq-item">
                    <h3>
                      <i className="fas fa-user-friends"></i>
                      Can I join multiple teams?
                    </h3>
                    <p>
                      No, each participant can only be a member of one team for the duration of the hackathon.
                    </p>
                  </div>
                  
                  <div className="faq-item">
                    <h3>
                      <i className="fas fa-project-diagram"></i>
                      Can our team submit more than one project?
                    </h3>
                    <p>
                      No, each team can only submit one project for consideration.
                    </p>
                  </div>
                  
                  <div className="faq-item">
                    <h3>
                      <i className="fas fa-code-branch"></i>
                      Can I join with a pre-existing project?
                    </h3>
                    <p>
                      No, all projects must be created during the hackathon period. Pre-existing code, designs, 
                      or assets may not be used, though open-source libraries and frameworks are allowed.
                    </p>
                  </div>
                  
                  <div className="faq-item">
                    <h3>
                      <i className="fas fa-user-minus"></i>
                      What if a team member drops out during the competition?
                    </h3>
                    <p>
                      Teams may continue with fewer members if needed, as long as the team still has at least 4 members. 
                      In exceptional circumstances, please contact the organizers for guidance.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Submission FAQ Tab */}
              <div className={`tab-pane ${activeTab === 'submission' ? 'active' : ''}`}>
                <div className="faq-grid">
                  <div className="faq-item">
                    <h3>
                      <i className="fas fa-user-check"></i>
                      Who will submit the project?
                    </h3>
                    <p>
                      The team leader is responsible for submitting the project on behalf of the team through 
                      the official submission platform.
                    </p>
                  </div>
                  
                  <div className="faq-item">
                    <h3>
                      <i className="fab fa-github"></i>
                      Can I make my GitHub repository private?
                    </h3>
                    <p>
                      Yes, you can keep your GitHub repository private during development. For the final submission, 
                      you can either make it public or provide access to the judges if you prefer to keep it private.
                    </p>
                  </div>
                  
                  <div className="faq-item">
                    <h3>
                      <i className="fas fa-exclamation-triangle"></i>
                      We submitted the wrong file; what should we do?
                    </h3>
                    <p>
                      If you submitted the wrong file or need to make changes to your submission before the deadline, 
                      please contact the organizers immediately at cpeo.feutech.ph@gmail.com.
                    </p>
                  </div>
                  
                  <div className="faq-item">
                    <h3>
                      <i className="fas fa-robot"></i>
                      Can we use AI during the competition?
                    </h3>
                    <p>
                      Yes, you can use AI tools such as ChatGPT, GitHub Copilot, or other AI assistants to help with 
                      your project. However, you must disclose all AI tools used in your project submission, and the 
                      core idea and implementation should be your team's original work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Discord Information */}
        <Section 
          title="Join Our Discord Community" 
          className="discord-section bg-secondary"
          id="discord"
        >
          <div className="discord-content">
            <div className="discord-details">
              <p>
                Join our official Discord server for Create & Conquer 2025! This is the hub for:
              </p>
              <ul className="discord-features">
                <li><i className="fas fa-users"></i> Finding team members</li>
                <li><i className="fas fa-bell"></i> Getting real-time updates and announcements</li>
                <li><i className="fas fa-question-circle"></i> Asking questions to organizers and mentors</li>
                <li><i className="fas fa-network-wired"></i> Connecting with other participants</li>
                <li><i className="fas fa-file-alt"></i> Accessing exclusive resources and support</li>
              </ul>
              <div className="discord-join">
                <a href="#" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-discord"></i> Join Discord Server
                </a>
              </div>
            </div>
            <div className="discord-image">
              <div className="discord-illustration">
                <i className="fab fa-discord"></i>
              </div>
            </div>
          </div>
        </Section>

        {/* Guides Section */}
        <Section 
          title="Participant Guides" 
          subtitle="Download these guides to help you prepare for and navigate the hackathon."
          className="guides-section"
          id="guides"
        >
          <div className="resources-grid grid grid-4" ref={guidesRef}>
            <Card
              title="Hackathon Guide"
              icon={<i className="fas fa-book"></i>}
              delay={0.1}
            >
              <p>A comprehensive guide to help you prepare for and navigate the Create & Conquer hackathon.</p>
              <a href="#" className="resource-link">Download PDF</a>
            </Card>
            
            <Card
              title="Team Formation Guide"
              icon={<i className="fas fa-users"></i>}
              delay={0.2}
            >
              <p>Tips for forming effective teams and roles that every successful hackathon team should have.</p>
              <a href="#" className="resource-link">Download PDF</a>
            </Card>
            
            <Card
              title="Ideation Toolkit"
              icon={<i className="fas fa-lightbulb"></i>}
              delay={0.3}
            >
              <p>Methods and frameworks to help your team generate and refine innovative project ideas.</p>
              <a href="#" className="resource-link">Download PDF</a>
            </Card>
            
            <Card
              title="Presentation Tips"
              icon={<i className="fas fa-chalkboard-teacher"></i>}
              delay={0.4}
            >
              <p>How to effectively present your project to judges and make a lasting impression.</p>
              <a href="#" className="resource-link">Download PDF</a>
            </Card>
          </div>
        </Section>

        {/* CTA Section */}
        <Section 
          className="cta-section bg-primary"
          withContainer={true}
        >
          <div className="cta-content">
            <h2>Ready to participate?</h2>
            <p>Registration is open from June 9 to June 23, 2025. Join us for an exciting hackathon experience!</p>
            <div className="cta-buttons">
              <Link to="/registration" className="btn btn-white">Register Now</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Resources; 
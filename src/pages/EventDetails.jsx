import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';
import { initEventDetails } from './EventDetails.js';
import './EventDetails.css';

const EventDetails = () => {
  // Create refs for the tab buttons to make them accessible in useEffect
  const kickoffTabRef = useRef(null);
  const demoTabRef = useRef(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Initialize the tabs functionality
    initEventDetails();
    
    // Direct tab click handling as backup to ensure functionality
    const handleTabClick = (targetId, activeButton) => {
      // Hide all program schedules and deactivate all buttons
      document.querySelectorAll('.program-schedule').forEach(el => {
        el.classList.remove('active');
      });
      document.querySelectorAll('.tab-button').forEach(el => {
        el.classList.remove('active');
      });
      
      // Show the target schedule and activate the button
      const targetSchedule = document.getElementById(targetId);
      if (targetSchedule) {
        targetSchedule.classList.add('active');
      }
      if (activeButton) {
        activeButton.classList.add('active');
      }
    };
    
    // Add click handlers to the tab buttons
    if (kickoffTabRef.current) {
      kickoffTabRef.current.addEventListener('click', () => {
        handleTabClick('kickoff', kickoffTabRef.current);
      });
    }
    
    if (demoTabRef.current) {
      demoTabRef.current.addEventListener('click', () => {
        handleTabClick('demo', demoTabRef.current);
      });
    }
    
    // Cleanup event listeners on component unmount
    return () => {
      if (kickoffTabRef.current) {
        kickoffTabRef.current.removeEventListener('click', () => {
          handleTabClick('kickoff', kickoffTabRef.current);
        });
      }
      
      if (demoTabRef.current) {
        demoTabRef.current.removeEventListener('click', () => {
          handleTabClick('demo', demoTabRef.current);
        });
      }
    };
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

  // Timeline events data
  const timelineEvents = [
    {
      date: 'June 9, 2025',
      title: 'Registration Opens',
      description: 'Early bird registration begins at 9AM',
      mode: 'Online',
      isImportant: true
    },
    {
      date: 'June 23, 2025',
      title: 'Registration Closes',
      description: 'Last day to submit team registrations by 11:59PM',
      mode: 'Online'
    },
    {
      date: 'June 24, 2025',
      title: 'Confirmation Emails Sent',
      description: 'All registered teams will receive confirmation emails',
      mode: 'Online',
      isImportant: true
    },
    {
      date: 'June 27, 2025',
      title: 'Orientation & Kickoff',
      description: 'Event kickoff, theme announcement, and workshops from 8AM to 4PM',
      mode: 'Hybrid',
      isImportant: true
    },
    {
      date: 'June 30, 2025',
      title: 'Deadline for Proposals',
      description: 'Deadline for all project proposals by 1PM',
      mode: 'Online'
    },
    {
      date: 'July 1, 2025',
      title: 'Announcement of Finalists',
      description: 'Top 8 finalists will be announced at 1PM',
      mode: 'Online',
      isImportant: true
    },
    {
      date: 'July 4, 2025',
      title: 'Final Output Submission',
      description: 'Deadline for final project submissions by 11:59PM',
      mode: 'Online'
    },
    {
      date: 'July 5, 2025',
      title: 'Demo Day & Awarding',
      description: 'Project demonstrations, judging, and awards ceremony from 8AM to 4PM',
      mode: 'Hybrid',
      isImportant: true
    }
  ];

  return (
    <div className="event-details-page">
      {/* Page Banner with Particle Background */}
      <div className="page-banner">
        <ParticleBackground color="#00E676" opacity={0.2} />
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Event Details
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about Create & Conquer 2025
          </motion.p>
        </div>
      </div>

      <div className="main-content">
        {/* Timeline Section */}
        <AnimatedSection className="section timeline-section">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              CREATE & CONQUER 2025 JOURNEY
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Mark your calendars for these key dates
            </motion.p>
            
            <div className="event-timeline">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={index} 
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`timeline-content ${event.isImportant ? 'important-event' : ''}`}>
                    <div className="timeline-date">{event.date}</div>
                    <div className={`timeline-mode ${event.mode.toLowerCase()}`}>
                      <span className="mode-icon">
                        {event.mode === 'Online' && <i className="fas fa-globe"></i>}
                        {event.mode === 'Hybrid' && <i className="fas fa-building"></i>}
                        {event.mode === 'F2F' && <i className="fas fa-users"></i>}
                      </span>
                      <span className="mode-text">{event.mode}</span>
                    </div>
                    <h3 className="timeline-title">
                      {event.title}
                      {event.isImportant && <span className="important-indicator">★</span>}
                    </h3>
                    <p className="timeline-description">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Program Flow Section */}
        <AnimatedSection className="section program-flow-section">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Program Flow
            </motion.h2>
            
            <div className="program-tabs">
              <motion.div 
                className="tab-navigation"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <button className="tab-button active" data-target="kickoff" ref={kickoffTabRef}>
                  <i className="fas fa-flag-checkered"></i> Orientation & Kickoff
                </button>
                <button className="tab-button" data-target="demo" ref={demoTabRef}>
                  <i className="fas fa-award"></i> Demo Day & Awarding
                </button>
              </motion.div>
              
              <motion.div 
                className="program-content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div id="kickoff" className="program-schedule active">
                  <div className="day-header">
                    <h3><i className="fas fa-calendar-day"></i> June 27, 2025</h3>
                    <span className="badge hybrid"><i className="fas fa-building"></i> Hybrid Event</span>
                  </div>
                  
                  <div className="schedule-grid">
                    <div className="schedule-item">
                      <div className="schedule-time">8:00AM - 9:00AM</div>
                      <div className="schedule-content">
                        <h4>Registration and Assembly</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">9:00AM - 9:05AM</div>
                      <div className="schedule-content">
                        <h4>Opening Ceremony Start / Spiels</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">9:05AM - 9:10AM</div>
                      <div className="schedule-content">
                        <h4>Opening Prayer and National Anthem</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">9:10AM - 9:15AM</div>
                      <div className="schedule-content">
                        <h4>Opening Remarks</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">9:15AM - 10:15AM</div>
                      <div className="schedule-content">
                        <h4>Reading of Rules, Mechanics, Rubric and Guidelines</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">10:15AM - 10:20AM</div>
                      <div className="schedule-content">
                        <h4>Announcement of Mentors for Finalists</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">10:20AM - 10:25AM</div>
                      <div className="schedule-content">
                        <h4>Announcement of Judges</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item highlight">
                      <div className="schedule-time">10:25AM - 10:30AM</div>
                      <div className="schedule-content">
                        <h4>Announcement of Hackathon Theme</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">10:30AM - 10:45AM</div>
                      <div className="schedule-content">
                        <h4>Q&A Session</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">10:45AM - 10:50AM</div>
                      <div className="schedule-content">
                        <h4>Deployment of Participants to Discord Server</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">10:50AM - 11:50AM</div>
                      <div className="schedule-content">
                        <h4>Sponsors Segment (Talks)</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item break">
                      <div className="schedule-time">11:50AM - 1:00PM</div>
                      <div className="schedule-content">
                        <h4>Lunch Break</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">1:00PM - 3:00PM</div>
                      <div className="schedule-content">
                        <h4>Participants Ideation / Hackathon Proper</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">3:00PM - 4:00PM</div>
                      <div className="schedule-content">
                        <h4>Team Checkup</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">4:00PM - 4:10PM</div>
                      <div className="schedule-content">
                        <h4>Closing Remarks</h4>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div id="demo" className="program-schedule">
                  <div className="day-header">
                    <h3><i className="fas fa-calendar-day"></i> July 5, 2025</h3>
                    <span className="badge hybrid"><i className="fas fa-building"></i> Hybrid Event</span>
                  </div>
                  
                  <div className="schedule-grid">
                    <div className="schedule-item">
                      <div className="schedule-time">8:00AM - 9:00AM</div>
                      <div className="schedule-content">
                        <h4>Registration and Assembly</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">9:00AM - 9:10AM</div>
                      <div className="schedule-content">
                        <h4>Opening Prayer and National Anthem</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">9:10AM - 9:15AM</div>
                      <div className="schedule-content">
                        <h4>Opening Remarks</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">9:15AM - 9:25AM</div>
                      <div className="schedule-content">
                        <h4>Re-Reading of Rules, Mechanics, Rubric and Guidelines</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">9:25AM - 9:30AM</div>
                      <div className="schedule-content">
                        <h4>Introduction of Judges</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">9:30AM - 9:35AM</div>
                      <div className="schedule-content">
                        <h4>Spiels</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item presentation">
                      <div className="schedule-time">9:35AM - 10:00AM</div>
                      <div className="schedule-content">
                        <h4>Team 1 Presentation</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item presentation">
                      <div className="schedule-time">10:00AM - 10:25AM</div>
                      <div className="schedule-content">
                        <h4>Team 2 Presentation</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item presentation">
                      <div className="schedule-time">10:25AM - 10:50AM</div>
                      <div className="schedule-content">
                        <h4>Team 3 Presentation</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item presentation">
                      <div className="schedule-time">10:50AM - 11:15AM</div>
                      <div className="schedule-content">
                        <h4>Team 4 Presentation</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item presentation">
                      <div className="schedule-time">11:15AM - 11:40AM</div>
                      <div className="schedule-content">
                        <h4>Team 5 Presentation</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item break">
                      <div className="schedule-time">11:40AM - 1:00PM</div>
                      <div className="schedule-content">
                        <h4>Lunch Break</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">1:00PM - 1:05PM</div>
                      <div className="schedule-content">
                        <h4>Spiels</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item presentation">
                      <div className="schedule-time">1:05PM - 1:30PM</div>
                      <div className="schedule-content">
                        <h4>Team 6 Presentation</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item presentation">
                      <div className="schedule-time">1:30PM - 1:55PM</div>
                      <div className="schedule-content">
                        <h4>Team 7 Presentation</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item presentation">
                      <div className="schedule-time">1:55PM - 2:20PM</div>
                      <div className="schedule-content">
                        <h4>Team 8 Presentation</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">2:20PM - 2:50PM</div>
                      <div className="schedule-content">
                        <h4>Tallying of Scores / Word from Sponsors</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item highlight">
                      <div className="schedule-time">2:50PM - 3:20PM</div>
                      <div className="schedule-content">
                        <h4>Awarding Ceremony + Thanks to Mentors, Judges, Sponsors</h4>
                      </div>
                    </div>
                    
                    <div className="schedule-item">
                      <div className="schedule-time">3:20PM - 3:25PM</div>
                      <div className="schedule-content">
                        <h4>Closing Remarks</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Venue Information Section */}
        <AnimatedSection className="section venue-section">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Venue Information
            </motion.h2>
            
            <div className="venue-cards">
              <motion.div 
                className="venue-card in-person"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="venue-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h3>For In-Person Attendees</h3>
                <div className="venue-details">
                  <div className="venue-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>FEU Tech Innovation Center</span>
                  </div>
                  <div className="venue-item">
                    <i className="fas fa-id-card"></i>
                    <span>Valid ID/Student ID required</span>
                  </div>
                </div>
                <div className="venue-note">
                  <p><i className="fas fa-info-circle"></i> In-person attendees are encouraged to explore their own food options for lunch</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="venue-card online"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="venue-icon">
                  <i className="fas fa-laptop"></i>
                </div>
                <h3>For Online Attendees</h3>
                <div className="venue-details">
                  <div className="venue-item">
                    <i className="fas fa-video"></i>
                    <span>Microsoft Teams</span>
                  </div>
                  <div className="venue-item">
                    <i className="fas fa-wifi"></i>
                    <span>Stable internet connection required</span>
                  </div>
                </div>
                <div className="venue-note">
                  <p><i className="fas fa-info-circle"></i> Please refrain from asking unnecessary questions or turning on your mic/video during the MS Teams session unless prompted</p>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
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
                <div className="about-countdown-date">June 9, 2025</div>
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

export default EventDetails; 
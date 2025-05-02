import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const EventDetails = () => {
  return (
    <div className="event-details-page">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>Event Details</h1>
          <p>Everything you need to know about Create & Conquer 2025</p>
        </div>
      </div>

      <div className="main-content">
        {/* Key Dates Section */}
        <AnimatedSection>
          <section className="section key-dates-section">
            <div className="container">
              <h2 className="section-title">Key Dates</h2>
              <div className="dates-timeline">
                <div className="timeline-item">
                  <div className="timeline-date">
                    <div className="date">June 9, 2025</div>
                    <div className="day">Monday</div>
                    <div className="time">9:00 AM</div>
                  </div>
                  <div className="timeline-content">
                    <h3>Registration Opens</h3>
                    <p>Start forming your teams and register for the hackathon</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-date">
                    <div className="date">June 23, 2025</div>
                    <div className="day">Monday</div>
                    <div className="time">11:59 PM</div>
                  </div>
                  <div className="timeline-content">
                    <h3>Registration Closes</h3>
                    <p>Last chance to register your team</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-date">
                    <div className="date">June 24, 2025</div>
                    <div className="day">Tuesday</div>
                  </div>
                  <div className="timeline-content">
                    <h3>End of Confirmation Emails Dissemination</h3>
                    <p>All registered teams will receive confirmation emails</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-date">
                    <div className="date">June 27, 2025</div>
                    <div className="day">Friday</div>
                    <div className="time">8:00 AM - 4:00 PM</div>
                  </div>
                  <div className="timeline-content">
                    <h3>Orientation & Kickoff</h3>
                    <p>The hackathon officially begins with an orientation for all participants</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-date">
                    <div className="date">June 30, 2025</div>
                    <div className="day">Monday</div>
                    <div className="time">1:00 PM</div>
                  </div>
                  <div className="timeline-content">
                    <h3>Deadline of Proposals</h3>
                    <p>All teams must submit their project proposals</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-date">
                    <div className="date">July 1, 2025</div>
                    <div className="day">Tuesday</div>
                    <div className="time">1:00 PM</div>
                  </div>
                  <div className="timeline-content">
                    <h3>Announcement of Finalists (Top 8)</h3>
                    <p>The top 8 teams advancing to the final round will be announced</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-date">
                    <div className="date">July 4, 2025</div>
                    <div className="day">Friday</div>
                    <div className="time">11:59 PM</div>
                  </div>
                  <div className="timeline-content">
                    <h3>Final Output Submission</h3>
                    <p>Deadline for finalists to submit their completed projects</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-date">
                    <div className="date">July 5, 2025</div>
                    <div className="day">Saturday</div>
                    <div className="time">8:00 AM - 4:00 PM</div>
                  </div>
                  <div className="timeline-content">
                    <h3>Demo Day & Awarding</h3>
                    <p>Final presentations, judging, and awarding ceremony</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Competition Flow Section */}
        <AnimatedSection>
          <section className="section competition-flow-section">
            <div className="container">
              <h2 className="section-title">Competition Flow & Structure</h2>
              <div className="flow-container">
                <div className="flow-card">
                  <div className="flow-icon">📧</div>
                  <h3>Registration & Confirmation</h3>
                  <p>
                    After registering, teams will receive confirmation emails by June 24, 2025. 
                    These emails will contain important information about the hackathon, including 
                    access credentials for online participants and venue details for in-person attendees.
                  </p>
                </div>

                <div className="flow-card">
                  <div className="flow-icon">🚀</div>
                  <h3>Event Kickoff</h3>
                  <p>
                    The hackathon begins with an orientation on June 27, 2025. During this session, 
                    the hackathon theme will be announced, rules will be explained, and teams will have 
                    the opportunity to interact with mentors and sponsors.
                  </p>
                </div>

                <div className="flow-card">
                  <div className="flow-icon">🔍</div>
                  <h3>Elimination Round</h3>
                  <p>
                    Teams will have until June 30, 2025 to develop and submit their project proposals. 
                    These proposals will be evaluated by our panel of judges, and the top 8 teams will 
                    advance to the final round.
                  </p>
                </div>

                <div className="flow-card">
                  <div className="flow-icon">⚖️</div>
                  <h3>Judging Period</h3>
                  <p>
                    The judges will review all submissions and announce the top 8 finalists on July 1, 2025. 
                    Finalists will have until July 4, 2025 to refine their projects and prepare for the 
                    final presentation.
                  </p>
                </div>

                <div className="flow-card">
                  <div className="flow-icon">🏆</div>
                  <h3>Final Round</h3>
                  <p>
                    On July 5, 2025, finalists will present their projects to the judges and audience. 
                    After all presentations, the winners will be announced during the awarding ceremony.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Program Flow Section */}
        <AnimatedSection>
          <section className="section program-flow-section">
            <div className="container">
              <h2 className="section-title">Program Flow</h2>
              
              <div className="program-day">
                <h3>Orientation & Kickoff (June 27, 2025)</h3>
                <div className="program-schedule">
                  <div className="schedule-item">
                    <div className="schedule-time">8:00 AM - 9:00 AM</div>
                    <div className="schedule-content">
                      <h4>Registration & Check-in</h4>
                      <p>Participants arrive and complete check-in procedures</p>
                    </div>
                  </div>
                  
                  <div className="schedule-item">
                    <div className="schedule-time">9:00 AM - 9:30 AM</div>
                    <div className="schedule-content">
                      <h4>Opening Ceremony</h4>
                      <p>Welcome remarks and introduction to the hackathon</p>
                    </div>
                  </div>
                  
                  <div className="schedule-item">
                    <div className="schedule-time">9:30 AM - 10:30 AM</div>
                    <div className="schedule-content">
                      <h4>Rules & Guidelines Explanation</h4>
                      <p>Detailed explanation of hackathon rules and submission requirements</p>
                    </div>
                  </div>
                  
                  <div className="schedule-item">
                    <div className="schedule-time">10:30 AM - 11:00 AM</div>
                    <div className="schedule-content">
                      <h4>Theme Announcement</h4>
                      <p>Reveal of the hackathon theme and problem statement</p>
                    </div>
                  </div>
                  
                  <div className="schedule-item">
                    <div className="schedule-time">11:00 AM - 12:00 PM</div>
                    <div className="schedule-content">
                      <h4>Sponsors Segment</h4>
                      <p>Presentations from our sponsors and industry partners</p>
                    </div>
                  </div>
                  
                  <div className="schedule-item">
                    <div className="schedule-time">12:00 PM - 1:00 PM</div>
                    <div className="schedule-content">
                      <h4>Lunch Break</h4>
                    </div>
                  </div>
                  
                  <div className="schedule-item">
                    <div className="schedule-time">1:00 PM - 2:30 PM</div>
                    <div className="schedule-content">
                      <h4>Workshops & Mentoring Sessions</h4>
                      <p>Optional workshops and mentoring opportunities for participants</p>
                    </div>
                  </div>
                  
                  <div className="schedule-item">
                    <div className="schedule-time">2:30 PM - 3:30 PM</div>
                    <div className="schedule-content">
                      <h4>Team Planning Time</h4>
                      <p>Teams begin ideation and planning for their projects</p>
                    </div>
                  </div>
                  
                  <div className="schedule-item">
                    <div className="schedule-time">3:30 PM - 4:00 PM</div>
                    <div className="schedule-content">
                      <h4>Q&A Session</h4>
                      <p>Opportunity for teams to ask questions about the hackathon</p>
                    </div>
                  </div>
                  
                  <div className="schedule-item">
                    <div className="schedule-time">4:00 PM - 4:10 PM</div>
                    <div className="schedule-content">
                      <h4>Closing Remarks</h4>
                      <p>Final instructions and reminders for all participants</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="program-day">
                <h3>Demo Day & Awarding (July 5, 2025)</h3>
                <div className="program-schedule">
                  <div className="schedule-item">
                    <div className="schedule-time">8:00 AM - 8:30 AM</div>
                    <div className="schedule-content">
                      <h4>Registration & Setup</h4>
                      <p>Finalists arrive and set up for presentations</p>
                    </div>
                  </div>
                  
                  <div className="schedule-item">
                    <div className="schedule-time">8:30 AM - 9:00 AM</div>
                    <div className="schedule-content">
                      <h4>Opening Remarks</h4>
                      <p>Welcome and introduction of judges and finalists</p>
                    </div>
                  </div>
                  
                  <div className="schedule-item">
                    <div className="schedule-time">9:00 AM - 12:00 PM</div>
                    <div className="schedule-content">
                      <h4>Team Presentations</h4>
                      <p>Each finalist team presents their project (15 minutes per team)</p>
                    </div>
                  </div>
                  
                  <div className="schedule-item">
                    <div className="schedule-time">12:00 PM - 1:00 PM</div>
                    <div className="schedule-content">
                      <h4>Lunch Break</h4>
                    </div>
                  </div>
                  
                  <div className="schedule-item">
                    <div className="schedule-time">1:00 PM - 2:00 PM</div>
                    <div className="schedule-content">
                      <h4>Judges Deliberation</h4>
                      <p>Judges evaluate presentations and determine winners</p>
                    </div>
                  </div>
                  
                  <div className="schedule-item">
                    <div className="schedule-time">2:00 PM - 3:00 PM</div>
                    <div className="schedule-content">
                      <h4>Awarding Ceremony</h4>
                      <p>Announcement of winners and distribution of prizes</p>
                    </div>
                  </div>
                  
                  <div className="schedule-item">
                    <div className="schedule-time">3:00 PM - 3:25 PM</div>
                    <div className="schedule-content">
                      <h4>Closing Ceremony</h4>
                      <p>Final remarks and acknowledgments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Venue Information Section */}
        <AnimatedSection>
          <section className="section venue-section">
            <div className="container">
              <h2 className="section-title">Venue Information</h2>
              <div className="venue-content">
                <div className="venue-details">
                  <h3>For In-Person Attendees</h3>
                  <p>
                    The in-person events will be held at the FEU Tech Innovation Center, located in 
                    Sampaloc, Manila. All participants must follow the venue's guidelines and protocols.
                  </p>
                  
                  <h4>What to Bring:</h4>
                  <ul className="venue-requirements">
                    <li>Valid ID/Student ID</li>
                    <li>Laptop and necessary accessories</li>
                    <li>Confirmation email</li>
                    <li>Signed consent form (for participants under 18)</li>
                  </ul>
                  
                  <p>
                    A detailed map and vicinity guide will be provided in the confirmation emails. 
                    If you have any questions about the venue, please contact us at cpeo.feutech.ph@gmail.com.
                  </p>
                </div>
                
                <div className="venue-map">
                  <div className="map-placeholder">
                    <p>Map will be provided in confirmation emails</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="section cta-section">
            <div className="container">
              <div className="cta-content">
                <h2>Ready to Join Create & Conquer 2025?</h2>
                <p>Registration is open from June 9 to June 23, 2025.</p>
                <div className="cta-buttons">
                  <Link to="/registration" className="btn btn-primary">Register Now</Link>
                  <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default EventDetails; 
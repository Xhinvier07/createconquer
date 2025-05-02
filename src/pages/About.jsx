import React from 'react';
import cpeoLogo from '../assets/cpeo.png';
import fticLogo from '../assets/ftic.png';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>About Create & Conquer 2025</h1>
          <p>Learn more about our hackathon and organizing teams</p>
        </div>
      </div>

      <div className="main-content">
        {/* About the Hackathon */}
        <section className="section about-hackathon-section">
          <div className="container">
            <h2 className="section-title">About the Hackathon</h2>
            <div className="about-content">
              <p>
                CREATE & CONQUER 2025 Hackathon is the inaugural hackathon organized by the FEU Institute of Technology's 
                Computer Engineering Organization, connecting creative minds and redefining the landscape of innovation.
              </p>
              <p>
                Our mission is to provide a platform for students to showcase their creativity, problem-solving skills, 
                and innovation in a competitive yet collaborative environment.
              </p>
              <p>
                <strong>No coding skills? No problem!</strong> Unlike traditional hackathons, CREATE & CONQUER 2025 
                welcomes participants of all skill levels, including those with zero coding experience. We believe that 
                great ideas can come from anyone, and we're here to support your journey from concept to creation.
              </p>
              <h3>What Makes Us Unique</h3>
              <ul className="feature-list">
                <li>
                  <span className="feature-icon">✅</span>
                  <div>
                    <strong>Inclusive Environment</strong>
                    <p>Open to junior high school, senior high school, and undergraduate students across the Philippines</p>
                  </div>
                </li>
                <li>
                  <span className="feature-icon">✅</span>
                  <div>
                    <strong>No Coding Experience Needed</strong>
                    <p>We provide resources and support for participants of all skill levels</p>
                  </div>
                </li>
                <li>
                  <span className="feature-icon">✅</span>
                  <div>
                    <strong>Hybrid Format</strong>
                    <p>Participate in-person (Metro Manila) or remotely from anywhere in the Philippines</p>
                  </div>
                </li>
                <li>
                  <span className="feature-icon">✅</span>
                  <div>
                    <strong>Comprehensive Support</strong>
                    <p>Access to mentors, resources, and a supportive community throughout the event</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* About the Organizers */}
        <section className="section organizers-about-section">
          <div className="container">
            <h2 className="section-title">About the Organizers</h2>
            
            <div className="organizer-profile">
              <div className="organizer-header">
                <div className="organizer-logo-container">
                  <img src={cpeoLogo} alt="Computer Engineering Organization Logo" />
                </div>
                <div className="organizer-title">
                  <h3>Computer Engineering Organization (CPEO)</h3>
                  <p>FEU Tech</p>
                </div>
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
            </div>

            <div className="organizer-profile">
              <div className="organizer-header">
                <div className="organizer-logo-container">
                  <img src={fticLogo} alt="FEU Tech Innovation Center Logo" />
                </div>
                <div className="organizer-title">
                  <h3>FEU Innovation Center</h3>
                  <p>FEU Tech</p>
                </div>
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
            </div>
          </div>
        </section>

        {/* Vision and Goals */}
        <section className="section vision-section">
          <div className="container">
            <h2 className="section-title">Our Vision and Goals</h2>
            <div className="vision-content">
              <div className="vision-item">
                <h3>Foster Innovation</h3>
                <p>
                  Create an environment where participants can explore new ideas, technologies, and approaches to 
                  problem-solving without fear of failure.
                </p>
              </div>

              <div className="vision-item">
                <h3>Build Community</h3>
                <p>
                  Connect students from different schools, backgrounds, and skill levels to share knowledge, 
                  collaborate, and form lasting relationships.
                </p>
              </div>

              <div className="vision-item">
                <h3>Develop Skills</h3>
                <p>
                  Provide opportunities for participants to enhance their technical, creative, and soft skills 
                  through real-world challenges and teamwork.
                </p>
              </div>

              <div className="vision-item">
                <h3>Celebrate Creativity</h3>
                <p>
                  Recognize and reward innovative solutions that demonstrate creativity, technical excellence, 
                  and potential for real-world impact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 
import { Link } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import CountdownTimer from '../components/CountdownTimer';
import Timeline from '../components/Timeline';
import './Home.css';
import heroImage from '../assets/hero.png';
import cpeoLogo from '../assets/cpeo.png';
import fticLogo from '../assets/ftic.png';
import ikigaiLogo from '../assets/ikigai.png';
import icorepayLogo from '../assets/icore.png';
import zenithpadsLogo from '../assets/zenith.png';
import geospectrumLogo from '../assets/geo.png';
import feltaLogo from '../assets/felt.jpg';
import jpcsLogo from '../assets/jpc.png';
import tambayanLogo from '../assets/tambaya.png';
import icpepplmLogo from '../assets/icpep-pl.jpeg';

const Home = () => {
  // Registration deadline date
  const registrationDeadline = "2025-06-23T23:59:59";

  return (
    <div className="home-page">
      <Analytics />
      
      {/* Hero Section - Left logo, right details */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-flex">
            <div className="hero-logo">
              <img src={heroImage} alt="Create & Conquer 2025" className="hero-banner" />
            </div>
            <div className="hero-content">
              <h1 className="hero-title">Create & Conquer 2025</h1>
              <p className="hero-tagline">Bringing together students, visionary thinkers, and developers from across Metro Manila and the Philippines</p>
              <p className="hero-dates">
                <i className="fas fa-calendar-alt"></i>
                June 27 - July 5, 2025 
                <br></br>
                <i className="fas fa-map-marker-alt"></i>
              For Metro Manila Participants: FEU Tech Innovation Center, Manila
              <br></br>
              <i className="fas fa-map-marker-alt"></i>
              For Remote Participants: Online</p>
              <div className="hero-cta">
                <Link to="/registration" className="btn btn-primary">Register Now</Link>
                <Link to="/about" className="btn btn-secondary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <h2 className="section-title">About the Hackathon</h2>
            <p className="intro-text">
              CREATE & CONQUER 2025 Hackathon is the inaugural hackathon organized by the FEU Institute of Technology's 
              Computer Engineering Organization, connecting creative minds and redefining the landscape of innovation.
            </p>
            <div className="intro-features">
              <div className="feature">
                <span className="feature-icon"><i className="fas fa-check-circle"></i></span>
                <p><strong>No coding experience needed!</strong> This event is open to all skill levels.</p>
              </div>
              <div className="feature">
                <span className="feature-icon"><i className="fas fa-globe"></i></span>
                <p><strong>Hybrid format:</strong> Face-to-face (Metro Manila) & Online (for remote participants)</p>
              </div>
            </div>
            <div className="intro-cta">
              <Link to="/about" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="section highlights-section">
        <div className="container">
          <h2 className="section-title">Key Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon"><i className="fas fa-trophy"></i></div>
              <h3>₱15,000+ Prize Pool</h3>
              <p>Compete for exciting cash prizes and special awards</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><i className="fas fa-calendar-check"></i></div>
              <h3>Event Dates</h3>
              <p>June 27 - July 5, 2025</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><i className="fas fa-clipboard-list"></i></div>
              <h3>Registration</h3>
              <p>June 14 - June 23, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="section countdown-section">
        <div className="container">
          <h2 className="section-title">Registration Closing In</h2>
          <p><i className="fas fa-calendar-alt"></i> Registration Period: June 9 - June 23, 2025</p>
          <CountdownTimer targetDate={registrationDeadline} />
          <div className="countdown-cta">
            <Link to="/registration" className="btn btn-primary">Secure Your Spot</Link>
          </div>
        </div>
      </section>

      {/* Key Details Section */}
      <section className="section details-section">
        <div className="container">
          <h2 className="section-title">Key Details</h2>
          <div className="details-grid">
            <div className="detail-card">
              <div className="detail-icon"><i className="fas fa-users"></i></div>
              <h3>Team Size</h3>
              <p>4-6 members per team</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon"><i className="fas fa-graduation-cap"></i></div>
              <h3>Eligibility</h3>
              <p>JHS, SHS, and undergraduate students in the Philippines</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon"><i className="fas fa-globe-asia"></i></div>
              <h3>Hybrid Format</h3>
              <p>In-person & online options available</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon"><i className="fas fa-coins"></i></div>
              <h3>Registration Fees</h3>
              <p>Early bird & regular pricing options available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="section timeline-section">
        <div className="container">
          <h2 className="section-title">Important Dates</h2>
          <div className="important-dates">
            <div className="date-item">
              <h3>Registration</h3>
              <p><i className="fas fa-calendar-day"></i> June 14 - June 23, 2025</p>
            </div>
            <div className="date-item">
              <h3>Orientation & Kickoff</h3>
              <p><i className="fas fa-flag"></i> June 27, 2025</p>
            </div>
            <div className="date-item">
              <h3>Final Demo Day & Awarding</h3>
              <p><i className="fas fa-award"></i> July 5, 2025</p>
            </div>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Organizers Section */}
      <section className="section organizers-section">
        <div className="container">
          <h2 className="section-title">Organized By</h2>
          <div className="organizers-grid">
            <div className="organizer-card">
              <div className="organizer-logo">
                <img src={cpeoLogo} alt="Computer Engineering Organization Logo" />
              </div>
              <h3>Computer Engineering Organization (CPEO)</h3>
              <p><i className="fas fa-university"></i> FEU Tech</p>
            </div>
            <div className="organizer-card">
              <div className="organizer-logo">
                <img src={fticLogo} alt="FEU Tech Innovation Center Logo" />
              </div>
              <h3>FEU Innovation Center</h3>
              <p><i className="fas fa-university"></i> FEU Tech</p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Sponsors Section */}
      <section className="section sponsors-section">
        <div className="container">
          <h2 className="section-title">Our Sponsors</h2>
          <p className="sponsors-subtitle">Supported by industry leaders</p>

          <div className="countdown-cta">
            <p className="btn btn-primary">Presented By</p>
          </div>

          <div className="sponsors-grid">
           
            <div className="sponsor-logo img">

              <a href="https://www.ikigaianimationstudio.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src={ikigaiLogo}
                  alt="Ikigai Animation Studio logo"
                />
              </a>
              <h3>Ikigai Animation Studio</h3>
            </div>
            <div className="sponsor-logo img">
              <a href="https://icorepay.tech" target="_blank" rel="noopener noreferrer">
                <img
                  src={icorepayLogo}
                  alt="iCOREPay logo"
                />
              </a>
              <h3>iCOREPay</h3>
            </div>
          </div>
          

          

          <div className="countdown-cta">
            <p className="btn btn-primary">Co-presented By</p>
          </div>

          <div className="sponsors-grid">
            <div className="sponsor-logo img">
             <a href="https://zenithpads.com/" target="_blank" rel="noopener noreferrer">
                 <img src={zenithpadsLogo} alt="Zenith Pads logo" />
              </a>
              <h3>ZenithPads</h3>
            </div>
          </div>


          <div className="countdown-cta">
            <p className="btn btn-primary">Supported By</p>
          </div>

          <div className="sponsors-grid">
            <div className="sponsor-logo img">
              <a href="https://www.geospectrum.com.ph//" target="_blank" rel="noopener noreferrer">
              <img src={geospectrumLogo} alt="Geospectrum logo" width="200" height="160" />
              </a>
              <h3>Geospectrum</h3>
            </div>
            <div className="sponsor-logo img">
              <a href="https://www.felta.ph/" target="_blank" rel="noopener noreferrer">
                <img src={feltaLogo} alt="Felta Multi-Media logo" width="200" height="160" />
              </a>
              <h3>Felta Multi-Media</h3>
            </div>
          </div>

          <div className="countdown-cta">
            <p className="btn btn-primary">Partnered With</p>
          </div>

          <div className="sponsors-grid">

            <div className="sponsor-logo img">
              <a href="https://icpep-plm.com/" target="_blank" rel="noopener noreferrer">
                <img src={icpepplmLogo} alt="ICPEP-PLM logo" width="200" height="160" />
              </a>
              <h3>ICpEP-PLM</h3>
            </div>

            <div className="sponsor-logo img">
              <a href="https://www.jpcs.com.ph/" target="_blank" rel="noopener noreferrer">
                <img src={jpcsLogo} alt="JPCS logo" width="200" height="160" />
              </a>
              <h3>JPCS</h3>
            </div>

            <div className="sponsor-logo img">
              <a href="https://tambayan.org/" target="_blank" rel="noopener noreferrer">
                <img src={tambayanLogo} alt="Tambayan logo" width="200" height="160" />
              </a>
              <h3>TAMBayan TV</h3>
            </div>

            </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
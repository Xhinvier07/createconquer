import { Link } from 'react-router-dom';
import cpeoLogo from '../assets/cpeo.png';
import fticLogo from '../assets/ftic.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-bg"></div>
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <h2 className="footer-brand">CREATE & CONQUER</h2>
            <p className="footer-tagline">2025 HACKATHON</p>
            <div className="footer-decoration"></div>
          </div>
        </div>

        <div className="footer-nav">
          <div className="footer-links-column">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
              <li><Link to="/about"><i className="fas fa-info-circle"></i> About</Link></li>
              <li><Link to="/registration"><i className="fas fa-user-plus"></i> Registration</Link></li>
              <li><Link to="/event-details"><i className="fas fa-calendar-alt"></i> Events</Link></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>More Info</h3>
            <ul>
              <li><Link to="/rules"><i className="fas fa-gavel"></i> Rules</Link></li>
              <li><Link to="/judging"><i className="fas fa-balance-scale"></i> Judging</Link></li>
              <li><Link to="/resources"><i className="fas fa-book"></i> Resources</Link></li>
              <li><Link to="/sponsors"><i className="fas fa-handshake"></i> Sponsors</Link></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li><i className="fas fa-envelope"></i> cpeo.feutech.ph@gmail.com</li>
              <li><i className="fas fa-map-marker-alt"></i> FEU Tech Innovation Center, Sampaloc, Manila</li>
            </ul>
          </div>
        </div>

        <div className="footer-social-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com/feutechCpEO" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-organizers">
          <h3>Organized By</h3>
          <div className="organizer-logos">
            <div className="organizer-logo">
              <img src={cpeoLogo} alt="Computer Engineering Organization Logo" />
            </div>
            <div className="organizer-logo">
              <img src={fticLogo} alt="FEU Tech Innovation Center Logo" />
            </div>
          </div>
        </div>

        <div className="footer-decoration-line"></div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p><i className="fas fa-copyright"></i> {currentYear} CREATE & CONQUER 2025 Hackathon. All rights reserved.</p>
          </div>
          <div className="footer-contact">
            <p><i className="fas fa-paper-plane"></i> Questions? Contact: <a href="mailto:cpeo.feutech.ph@gmail.com">cpeo.feutech.ph@gmail.com</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
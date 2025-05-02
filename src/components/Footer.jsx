import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-bg"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2 className="footer-brand">CREATE & CONQUER</h2>
            <p className="footer-tagline">2025 HACKATHON</p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/registration">Registration</Link></li>
                <li><Link to="/event-details">Events</Link></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3>More Info</h3>
              <ul>
                <li><Link to="/rules">Rules</Link></li>
                <li><Link to="/judging">Judging</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/sponsors">Sponsors</Link></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3>Contact Us</h3>
              <ul className="contact-info">
                <li><i className="icon-email"></i> cpeo.feutech.ph@gmail.com</li>
                <li><i className="icon-location"></i> FEU Tech Innovation Center, Sampaloc, Manila</li>
              </ul>
            </div>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com/feutechCpEO" target="_blank" rel="noopener noreferrer">
                <i className="icon-facebook">FB</i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="icon-instagram">IG</i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="icon-youtube">YT</i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-organizers">
          <h3>Organized By</h3>
          <div className="organizer-logos">
            <div className="organizer-logo">
              <img src="/src/assets/cpeo.png" alt="Computer Engineering Organization Logo" />
            </div>
            <div className="organizer-logo">
              <img src="/src/assets/ftic.png" alt="FEU Tech Innovation Center Logo" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} CREATE & CONQUER 2025 Hackathon. All rights reserved.</p>
          </div>
          <div className="footer-contact">
            <p>Questions? Contact: <a href="mailto:cpeo.feutech.ph@gmail.com">cpeo.feutech.ph@gmail.com</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
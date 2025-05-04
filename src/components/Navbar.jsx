import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import hackathonLogo from '../assets/banner.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Register', path: '/registration' },
    { name: 'Events', path: '/event-details' },
    { name: 'Rules', path: '/judging' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-brand">
          <Link to="/" onClick={closeMenu}>
            <img src={hackathonLogo} alt="Create & Conquer 2025 Logo" className="navbar-logo" />
          </Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`toggle-icon ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map((link, index) => (
              <li key={index} className={location.pathname === link.path ? 'active' : ''}>
                <Link to={link.path} onClick={closeMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="navbar-cta">
            <Link to="/registration" className="btn register-btn" onClick={closeMenu}>
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

 
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

  // Add effect to handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling on body when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

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

  // Always add the 'mobile-nav' class for mobile devices to ensure consistent styling
  const navbarClass = `navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'mobile-nav' : ''}`;

  return (
    <nav className={navbarClass}>
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

 
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../components/Section';
import Card from '../components/Card';
import ParticleBackground from '../components/ParticleBackground';
import cpeoLogo from '../assets/cpeo.png';
import fticLogo from '../assets/ftic.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {
  const partnersRef = useRef(null);
  const benefitsRef = useRef(null);
  const opportunitiesRef = useRef(null);
  
  // GSAP animations
  useEffect(() => {
    // Safety delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Partners animation
      if (partnersRef.current) {
        const partnerCards = partnersRef.current.querySelectorAll('.partner-card');
        if (partnerCards && partnerCards.length > 0) {
          gsap.from(partnerCards, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: partnersRef.current,
              start: "top 75%"
            }
          });
        }
      }
      
      // Benefits animation
      if (benefitsRef.current) {
        const benefitCards = benefitsRef.current.querySelectorAll('.benefit-card');
        if (benefitCards && benefitCards.length > 0) {
          gsap.from(benefitCards, {
            scale: 0.9,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: benefitsRef.current,
              start: "top 80%"
            }
          });
        }
      }
      
      // Opportunities animation
      if (opportunitiesRef.current) {
        const opportunityItems = opportunitiesRef.current.querySelectorAll('.opportunity-category');
        if (opportunityItems && opportunityItems.length > 0) {
          gsap.from(opportunityItems, {
            x: -20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: opportunitiesRef.current,
              start: "top 80%"
            }
          });
        }
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="sponsors-page">
      {/* Header Banner */}
      <section className="page-banner with-particle-bg">
        <ParticleBackground color="#00E676" particleCount={2000} opacity={0.3} />
        <div className="container">
          <h1>Sponsors & Partners</h1>
          <p>The organizations helping make Create & Conquer 2025 possible</p>
        </div>
      </section>

      <div className="main-content">
        {/* Current Sponsors */}
        <Section 
          title="Our Sponsors" 
          subtitle="We extend our sincere gratitude to all the sponsors who have committed to supporting Create & Conquer 2025. Their contributions make this event possible."
          className="current-sponsors-section"
          id="sponsors"
        >
          {/* Platinum Sponsors */}
          <div className="sponsors-tier">
            <h3 className="tier-title">Platinum Sponsors</h3>
            <div className="sponsors-logo-grid large">
              <div className="sponsor-logo placeholder">
                <div className="sponsor-placeholder-icon">
                  <i className="fas fa-building"></i>
                </div>
                <span>Your Logo Here</span>
              </div>
              <div className="sponsor-logo placeholder">
                <div className="sponsor-placeholder-icon">
                  <i className="fas fa-building"></i>
                </div>
                <span>Your Logo Here</span>
              </div>
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="sponsors-tier">
            <h3 className="tier-title">Gold Sponsors</h3>
            <div className="sponsors-logo-grid medium">
              <div className="sponsor-logo placeholder">
                <div className="sponsor-placeholder-icon">
                  <i className="fas fa-building"></i>
                </div>
                <span>Your Logo Here</span>
              </div>
              <div className="sponsor-logo placeholder">
                <div className="sponsor-placeholder-icon">
                  <i className="fas fa-building"></i>
                </div>
                <span>Your Logo Here</span>
              </div>
              <div className="sponsor-logo placeholder">
                <div className="sponsor-placeholder-icon">
                  <i className="fas fa-building"></i>
                </div>
                <span>Your Logo Here</span>
              </div>
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="sponsors-tier">
            <h3 className="tier-title">Silver Sponsors</h3>
            <div className="sponsors-logo-grid small">
              <div className="sponsor-logo placeholder">
                <div className="sponsor-placeholder-icon">
                  <i className="fas fa-building"></i>
                </div>
                <span>Your Logo Here</span>
              </div>
              <div className="sponsor-logo placeholder">
                <div className="sponsor-placeholder-icon">
                  <i className="fas fa-building"></i>
                </div>
                <span>Your Logo Here</span>
              </div>
              <div className="sponsor-logo placeholder">
                <div className="sponsor-placeholder-icon">
                  <i className="fas fa-building"></i>
                </div>
                <span>Your Logo Here</span>
              </div>
              <div className="sponsor-logo placeholder">
                <div className="sponsor-placeholder-icon">
                  <i className="fas fa-building"></i>
                </div>
                <span>Your Logo Here</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Partners */}
        <Section 
          title="Our Partners" 
          className="partners-section bg-secondary"
          id="partners"
        >
          <div className="partners-grid grid grid-2" ref={partnersRef}>
            <Card
              cardType="feature"
              className="partner-card"
              iconSrc={cpeoLogo}
              title="Computer Engineering Organization (CPEO)"
              delay={0.1}
            >
              <p>
                A recognized student body of the Far Eastern University Institute of Technology (FEU Tech) 
                and an affiliate of the Institute of Computer Engineers of the Philippines - Student Edition.
                Based in Sampaloc, Manila, CPEO is dedicated to fostering academic excellence, leadership, 
                and innovation among computer engineering students.
              </p>
            </Card>
            
            <Card
              cardType="feature"
              className="partner-card"
              iconSrc={fticLogo}
              title="FEU Tech Innovation Center"
              delay={0.3}
            >
              <p>
                A leading ecosystem of learning support for students, alumni, faculty, and employees. 
                The FEU Innovation Center aims to incubate business ideas or social enterprises, 
                providing the resources and mentorship needed to turn concepts into reality.
              </p>
            </Card>
          </div>
        </Section>

        {/* Why Sponsor */}
        <Section 
          title="Why Sponsor?" 
          className="why-sponsor-section"
          id="why-sponsor"
        >
          <div className="benefits-grid grid grid-4" ref={benefitsRef}>
            <Card
              title="Brand Visibility"
              icon={<i className="fas fa-eye"></i>}
              delay={0.1}
            >
              <p>
                Showcase your brand to hundreds of participants, including students, professionals, and tech 
                enthusiasts from across the Philippines. Your logo will appear on all event materials, website, and social media.
              </p>
            </Card>
            
            <Card
              title="Talent Recruitment"
              icon={<i className="fas fa-user-plus"></i>}
              delay={0.2}
            >
              <p>
                Connect with top tech talent and innovative thinkers. The hackathon is an excellent 
                opportunity to identify potential recruits for your organization.
              </p>
            </Card>
            
            <Card
              title="Innovation Insights"
              icon={<i className="fas fa-lightbulb"></i>}
              delay={0.3}
            >
              <p>
                Gain fresh perspectives on industry challenges. Participants will develop creative solutions 
                that could provide valuable insights for your business.
              </p>
            </Card>
            
            <Card
              title="Community Engagement"
              icon={<i className="fas fa-handshake"></i>}
              delay={0.4}
            >
              <p>
                Demonstrate your commitment to supporting tech education and innovation in the community. 
                Build goodwill and positive brand association.
              </p>
            </Card>
          </div>
        </Section>

        {/* Sponsorship Opportunities */}
        <Section 
          title="Sponsorship Opportunities" 
          subtitle="We offer various sponsorship opportunities to suit different levels of involvement and budget. Each package includes a unique set of benefits designed to maximize your organization's exposure."
          className="opportunities-section bg-accent"
          id="opportunities"
        >
          <div className="opportunity-categories" ref={opportunitiesRef}>
            <div className="opportunity-category">
              <div className="opportunity-icon">
                <i className="fas fa-money-bill-wave"></i>
              </div>
              <div className="opportunity-content">
                <h3>Financial Support</h3>
                <p>
                  Direct financial contributions to support event costs, including venue, prizes, 
                  participant materials, and other operational expenses.
                </p>
              </div>
            </div>
            
            <div className="opportunity-category">
              <div className="opportunity-icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="opportunity-content">
                <h3>Prize Donations</h3>
                <p>
                  Provide prizes for hackathon winners, special categories, or participant giveaways. 
                  This can include cash prizes, products, services, or gift certificates.
                </p>
              </div>
            </div>
            
            <div className="opportunity-category">
              <div className="opportunity-icon">
                <i className="fas fa-gift"></i>
              </div>
              <div className="opportunity-content">
                <h3>In-Kind Donations</h3>
                <p>
                  Contribute resources such as technology tools, software licenses, venue space, 
                  catering, or printing services to support the hackathon's operations.
                </p>
              </div>
            </div>
            
            <div className="opportunity-category">
              <div className="opportunity-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <div className="opportunity-content">
                <h3>Mentorship & Expertise</h3>
                <p>
                  Provide mentors, speakers, or judges from your organization to support participants 
                  during the hackathon and evaluation process.
                </p>
              </div>
            </div>
          </div>
          
          <div className="custom-package">
            <h3><i className="fas fa-puzzle-piece"></i> Custom Packages Available</h3>
            <p>
              We're happy to create a custom sponsorship package tailored to your specific goals and budget. 
              Contact us to discuss your requirements and how we can best showcase your support.
            </p>
          </div>
        </Section>

        {/* Contact CTA */}
        <Section 
          className="cta-section bg-primary"
          withContainer={true}
        >
          <div className="cta-content">
            <h2>Interested in Sponsoring?</h2>
            <p>
              Join us in supporting the next generation of tech innovators! Contact our sponsorship team to 
              learn more about how your organization can be part of Create & Conquer 2025.
            </p>
            <div className="contact-info-sponsor">
              <p>
                <strong>Sponsorship Inquiries:</strong><br />
                <a href="mailto:cpeo.feutech.ph@gmail.com">
                  <i className="fas fa-envelope"></i> cpeo.feutech.ph@gmail.com
                </a>
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-white">Contact Our Team</Link>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Sponsors; 
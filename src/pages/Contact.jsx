import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../components/Section';
import Card from '../components/Card';
import ParticleBackground from '../components/ParticleBackground';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });
  
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);
  
  // GSAP animations
  useEffect(() => {
    // Safety delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Animate contact info items
      if (contactInfoRef.current) {
        const infoItems = contactInfoRef.current.querySelectorAll('.info-item');
        if (infoItems && infoItems.length > 0) {
          gsap.from(infoItems, {
            x: -30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contactInfoRef.current,
              start: "top 75%"
            }
          });
        }
      }
      
      // Animate form elements
      if (formRef.current && !formStatus.submitted) {
        const formElements = formRef.current.querySelectorAll('.form-group, button');
        if (formElements && formElements.length > 0) {
          gsap.from(formElements, {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%"
            }
          });
        }
      }
      
      // Animate FAQ items
      if (faqRef.current) {
        const faqItems = faqRef.current.querySelectorAll('.card.faq-card');
        if (faqItems && faqItems.length > 0) {
          gsap.from(faqItems, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: faqRef.current,
              start: "top 75%"
            }
          });
        }
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [formStatus.submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Demo form submission - in a real app, this would be an API call
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Your message has been sent successfully! We will get back to you shortly.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Add a slight delay before animating the success message
    setTimeout(() => {
      // Animate success message
      const messageElement = document.querySelector('.form-message');
      if (messageElement) {
        gsap.from(messageElement, {
          y: -20,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    }, 100);
  };

  return (
    <div className="contact-page">
      {/* Header Banner */}
      <section className="page-banner with-particle-bg">
        <ParticleBackground color="#2196F3" opacity={0.3} />
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have questions? We're here to help!</p>
        </div>
      </section>

      <div className="main-content">
        {/* Contact Form Section */}
        <Section 
          title="Get In Touch" 
          className="contact-section"
          id="contact"
        >
          <div className="contact-grid grid grid-2">
            <div className="contact-form-container">
              <h3>Send us a Message</h3>
              <p>
                Fill out the form below, and we'll get back to you as soon as possible.
              </p>

              {formStatus.submitted ? (
                <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                  <i className={formStatus.error ? 'fas fa-exclamation-circle' : 'fas fa-check-circle'}></i>
                  {formStatus.message}
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="fas fa-user"></i> Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="fas fa-envelope"></i> Your Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      <i className="fas fa-tag"></i> Subject*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      <i className="fas fa-comment"></i> Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-paper-plane"></i> Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="contact-info" ref={contactInfoRef}>
              <h3>Contact Information</h3>
              <p>
                You can reach out to us through the following channels:
              </p>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="info-content">
                  <h4>Event Head</h4>
                  <p>Cristen Lei D. Tolentino</p>
                  <p><a href="mailto:cpeo.feutech.vpexternal@gmail.com">cpeo.feutech.vpexternal@gmail.com</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="info-content">
                  <h4>Event Co-head</h4>
                  <p>Gero Achilles H. Fernandez</p>
                  <p><a href="mailto:cpeo.feutech.dfevents@gmail.com">cpeo.feutech.dfevents@gmail.com</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h4>Official Email</h4>
                  <p><a href="mailto:cpeo.feutech.ph@gmail.com">cpeo.feutech.ph@gmail.com</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h4>Address</h4>
                  <p>
                    FEU Tech Building<br />
                    P. Paredes St, Sampaloc<br />
                    Manila, 1015 Metro Manila
                  </p>
                </div>
              </div>

              <div className="social-links-contact">
                <h4>Connect With Us</h4>
                <div className="social-icons">
                  <a href="https://facebook.com/feutechCpEO" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-facebook"></i> facebook.com/feutechCpEO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Map Section */}
        <Section 
          className="map-section bg-secondary"
          id="location"
        >
          <div className="map-container">
            <h3>Our Location</h3>
            <div className="map-responsive">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.1714589108097!2d120.98958831483992!3d14.592484389815638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca27759cb0ed%3A0x60dcef2bcd8c4c71!2sFEU%20Institute%20of%20Technology!5e0!3m2!1sen!2sph!4v1652841012578!5m2!1sen!2sph" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="FEU Tech Location Map"
              ></iframe>
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section 
          title="Frequently Asked Questions"
          className="faq-section"
          id="faq"
        >
          <div className="faq-grid grid grid-2" ref={faqRef}>
            <Card
              title="How can I register for the hackathon?"
              cardType="faq"
              delay={0.1}
            >
              <p>
                You can register by visiting the Registration page on our website. Follow the steps 
                to complete your registration for your team.
              </p>
            </Card>
            
            <Card
              title="What are the registration fees?"
              cardType="faq"
              delay={0.2}
            >
              <p>
                Early Bird (June 9-14, 2025): CPEO members and JHS/SHS students - ₱150 per member, 
                Undergraduates - ₱200 per member. Regular Registration: CPEO members and JHS/SHS students - ₱200 per member, 
                Undergraduates - ₱250 per member.
              </p>
            </Card>
            
            <Card
              title="Do I need to have a team to register?"
              cardType="faq"
              delay={0.3}
            >
              <p>
                Yes, teams must consist of 4-6 members. One member must be designated as the team leader
                who will register on behalf of their team.
              </p>
            </Card>
            
            <Card
              title="What if I don't have any coding experience?"
              cardType="faq"
              delay={0.4}
            >
              <p>
                No coding experience is necessary! Create & Conquer 2025 is designed to be inclusive for 
                participants of all skill levels, and teams can choose to use no-code tools.
              </p>
            </Card>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Contact;
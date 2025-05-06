import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Card from '../components/Card';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedSection from '../components/AnimatedSection';
import './Contact.css';

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
  
  const [activeFaqId, setActiveFaqId] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
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
  };
  
  const toggleFaq = (id) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <div className="contact-page">
      {/* Header Banner */}
      <div className="page-banner">
        <ParticleBackground color="#2196F3" opacity={0.2} />
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions? We're here to help!
          </motion.p>
        </div>
      </div>

      <div className="main-content">
        {/* Contact Form Section */}
        <AnimatedSection className="section contact-section" id="contact">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have questions about the hackathon? Feel free to reach out to us.
            </motion.p>

            <motion.div 
              className="contact-card"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="contact-form-container"
                variants={itemVariants}
              >
                <h3>Send us a Message</h3>
                <p>
                  Fill out the form below, and we'll get back to you as soon as possible.
                </p>

                {formStatus.submitted ? (
                  <motion.div 
                    className={`form-message ${formStatus.error ? 'error' : 'success'}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <i className={formStatus.error ? 'fas fa-exclamation-circle' : 'fas fa-check-circle'}></i>
                    {formStatus.message}
                  </motion.div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <motion.div className="form-group" variants={itemVariants}>
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
                      </motion.div>

                      <motion.div className="form-group" variants={itemVariants}>
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
                      </motion.div>
                    </div>

                    <motion.div className="form-group" variants={itemVariants}>
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
                    </motion.div>

                    <motion.div className="form-group" variants={itemVariants}>
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
                    </motion.div>

                    <motion.button 
                      type="submit" 
                      className="btn btn-primary"
                      variants={itemVariants}
                    >
                      <i className="fas fa-paper-plane"></i> Send Message
                    </motion.button>
                  </form>
                )}
              </motion.div>

              <motion.div 
                className="contact-info"
                variants={itemVariants}
              >
                <div className="contact-info-content">
                  <h3>Contact Information</h3>
                  <p>
                    You can reach out to us through the following channels:
                  </p>

                  <div className="info-row">
                    <motion.div 
                      className="info-item"
                      variants={itemVariants}
                    >
                      <div className="info-icon">
                        <i className="fas fa-user-tie"></i>
                      </div>
                      <div className="info-content">
                        <h4>Event Head</h4>
                        <p>Cristen Lei D. Tolentino</p>
                        <p><a href="mailto:cpeo.feutech.vpexternal@gmail.com">cpeo.feutech.vpexternal@gmail.com</a></p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="info-item"
                      variants={itemVariants}
                    >
                      <div className="info-icon">
                        <i className="fas fa-user-tie"></i>
                      </div>
                      <div className="info-content">
                        <h4>Event Co-head</h4>
                        <p>Gero Achilles H. Fernandez</p>
                        <p><a href="mailto:cpeo.feutech.dfevents@gmail.com">cpeo.feutech.dfevents@gmail.com</a></p>
                      </div>
                    </motion.div>
                  </div>

                  <div className="info-row">
                    <motion.div 
                      className="info-item"
                      variants={itemVariants}
                    >
                      <div className="info-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="info-content">
                        <h4>Official Email</h4>
                        <p><a href="mailto:cpeo.feutech.ph@gmail.com">cpeo.feutech.ph@gmail.com</a></p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="info-item"
                      variants={itemVariants}
                    >
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
                    </motion.div>
                  </div>

                  <motion.div 
                    className="social-links-contact"
                    variants={itemVariants}
                  >
                    <h4>Connect With Us</h4>
                    <div className="social-icons">
                      <a href="https://facebook.com/feutechCpEO" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Map Section */}
        <AnimatedSection className="section map-section" id="location">
          <div className="container">
            <div className="map-container">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Location
              </motion.h3>
              <motion.div 
                className="map-responsive"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
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
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection className="section faq-section" id="faq">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Find quick answers to common questions about the hackathon.
            </motion.p>
            
            <motion.div 
              className="faq-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <div 
                  className={`card faq ${activeFaqId === 1 ? 'active' : ''}`} 
                  onClick={() => toggleFaq(1)}
                >
                  <div className="card-header">
                    <h3>How can I register for the hackathon?</h3>
                  </div>
                  <div className="card-content">
                    <p>
                      You can register by visiting the Registration page on our website. Follow the steps 
                      to complete your registration for your team.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div 
                  className={`card faq ${activeFaqId === 2 ? 'active' : ''}`} 
                  onClick={() => toggleFaq(2)}
                >
                  <div className="card-header">
                    <h3>What are the registration fees?</h3>
                  </div>
                  <div className="card-content">
                    <p>
                      Early Bird (June 9-14, 2025): CPEO members and JHS/SHS students - ₱150 per member, 
                      Undergraduates - ₱200 per member. Regular Registration: CPEO members and JHS/SHS students - ₱200 per member, 
                      Undergraduates - ₱250 per member.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div 
                  className={`card faq ${activeFaqId === 3 ? 'active' : ''}`} 
                  onClick={() => toggleFaq(3)}
                >
                  <div className="card-header">
                    <h3>Do I need to have a team to register?</h3>
                  </div>
                  <div className="card-content">
                    <p>
                      Yes, teams must consist of 4-6 members. One member must be designated as the team leader
                      who will register on behalf of their team.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div 
                  className={`card faq ${activeFaqId === 4 ? 'active' : ''}`} 
                  onClick={() => toggleFaq(4)}
                >
                  <div className="card-header">
                    <h3>What if I don't have any coding experience?</h3>
                  </div>
                  <div className="card-content">
                    <p>
                      No coding experience is necessary! Create & Conquer 2025 is designed to be inclusive for 
                      participants of all skill levels, and teams can choose to use no-code tools.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;
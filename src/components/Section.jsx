import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Section = ({ 
  id,
  title, 
  subtitle, 
  children, 
  className = '', 
  containerClassName = '',
  backgroundStyle = 'default', // default, primary, secondary, accent, dark
  withContainer = true,
  titleCenter = false,
  titleAnimation = true
}) => {
  // Add state to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile when the component mounts
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  const getSectionClass = () => {
    const baseClass = 'section';
    const bgClass = backgroundStyle !== 'default' ? `bg-${backgroundStyle}` : '';
    return `${baseClass} ${bgClass} ${className}`;
  };
  
  const getTitleClass = () => {
    return `section-title ${titleCenter ? 'text-center' : ''}`;
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        delay: 0.2, 
        ease: "easeOut" 
      }
    }
  };
  
  // Disable animations on mobile
  const renderTitle = () => {
    if (!title) return null;
    
    if (isMobile || !titleAnimation) {
      return <h2 className={getTitleClass()}>{title}</h2>;
    }
    
    return (
      <motion.h2 
        className={getTitleClass()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={titleVariants}
      >
        {title}
      </motion.h2>
    );
  };
  
  const renderSubtitle = () => {
    if (!subtitle) return null;
    
    if (isMobile || !titleAnimation) {
      return <p className="section-subtitle">{subtitle}</p>;
    }
    
    return (
      <motion.p 
        className="section-subtitle"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={subtitleVariants}
      >
        {subtitle}
      </motion.p>
    );
  };
  
  const content = (
    <>
      {renderTitle()}
      {renderSubtitle()}
      {children}
    </>
  );
  
  return (
    <section id={id} className={getSectionClass()}>
      {withContainer ? (
        <div className={`container ${containerClassName}`}>{content}</div>
      ) : (
        content
      )}
    </section>
  );
};

export default Section; 
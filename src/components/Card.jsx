import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  title, 
  children, 
  icon, 
  iconClass = '', 
  className = '', 
  delay = 0,
  iconSrc = null,
  cardType = 'default' // default, feature, criterion, faq, prize
}) => {
  const cardRef = useRef(null);
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
  
  const getCardClasses = () => {
    const baseClass = 'card';
    
    const typeClass = {
      'default': '',
      'feature': 'feature-card',
      'criterion': 'criterion-card',
      'faq': 'faq-card',
      'prize': 'prize-card'
    }[cardType];
    
    return `${baseClass} ${typeClass} ${className}`;
  };
  
  // If on mobile, don't animate
  if (isMobile) {
    return (
      <div ref={cardRef} className={getCardClasses()}>
        {(icon || iconSrc) && (
          <div className={`card-icon ${iconClass}`}>
            {iconSrc ? (
              <img src={iconSrc} alt={title || 'Card icon'} />
            ) : (
              <span className="icon">{icon}</span>
            )}
          </div>
        )}
        
        {title && <h3 className="card-title">{title}</h3>}
        
        <div className="card-content">
          {children}
        </div>
      </div>
    );
  }
  
  // For desktop, use animations
  return (
    <motion.div
      ref={cardRef}
      className={getCardClasses()}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
    >
      {(icon || iconSrc) && (
        <div className={`card-icon ${iconClass}`}>
          {iconSrc ? (
            <img src={iconSrc} alt={title || 'Card icon'} />
          ) : (
            <span className="icon">{icon}</span>
          )}
        </div>
      )}
      
      {title && <h3 className="card-title">{title}</h3>}
      
      <div className="card-content">
        {children}
      </div>
    </motion.div>
  );
};

export default Card; 
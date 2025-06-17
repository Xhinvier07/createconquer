import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  id = ''
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
  
  // If on mobile, don't animate
  if (isMobile) {
    return (
      <section id={id} className={`section ${className}`}>
        {children}
      </section>
    );
  }
  
  // For desktop, use animations
  let initial = { opacity: 0 };
  
  // Add directional animation
  switch (direction) {
    case 'up':
      initial.y = 50;
      break;
    case 'down':
      initial.y = -50;
      break;
    case 'left':
      initial.x = 50;
      break;
    case 'right':
      initial.x = -50;
      break;
    default:
      break;
  }

  return (
    <motion.section
      id={id}
      className={`section ${className}`}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection; 
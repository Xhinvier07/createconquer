import { motion } from 'framer-motion';

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  id = ''
}) => {
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
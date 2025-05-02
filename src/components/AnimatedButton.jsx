import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AnimatedButton = ({ 
  children, 
  to, 
  className = '',
  external = false, 
  onClick,
  type = 'button'
}) => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  // For external links or button functionality
  if (external || !to) {
    return (
      <motion.button
        className={`btn ${className}`}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        onClick={onClick}
        type={type}
      >
        {children}
      </motion.button>
    );
  }

  // For internal navigation with React Router
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
    >
      <Link to={to} className={`btn ${className}`} onClick={onClick}>
        {children}
      </Link>
    </motion.div>
  );
};

export default AnimatedButton; 
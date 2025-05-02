import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 40, color = 'var(--tech-blue)' }) => {
  return (
    <div className="loading-spinner-container" style={{ height: size, width: size }}>
      <motion.div
        className="loading-spinner"
        style={{
          height: size,
          width: size,
          borderWidth: size / 8,
          borderTopColor: color,
          borderRadius: '50%',
          borderStyle: 'solid',
          borderColor: 'rgba(0, 0, 0, 0.1)',
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default LoadingSpinner; 
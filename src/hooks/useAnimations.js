import { useCallback } from 'react';

const useAnimations = () => {
  // Common animation variants
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.6 } }
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    },
    staggerChildren: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1, 
        transition: { 
          staggerChildren: 0.1
        } 
      }
    },
    staggerItem: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5 } 
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    }
  };

  // Function to create custom delays for staggered animations
  const staggerWithDelay = useCallback((delay = 0.1) => {
    return {
      hidden: { opacity: 0 },
      visible: (i = 0) => ({
        opacity: 1,
        transition: {
          delay: i * delay
        }
      })
    };
  }, []);

  // Common transition presets
  const transitions = {
    smooth: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
    bounce: { duration: 0.6, type: "spring", bounce: 0.4 },
    elastic: { duration: 0.8, type: "spring", stiffness: 300, damping: 20 }
  };

  return {
    variants,
    staggerWithDelay,
    transitions
  };
};

export default useAnimations; 
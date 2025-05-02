import { useEffect } from 'react';
import { initAOS } from '../utils/animationUtils';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AppInitializer = ({ children }) => {
  useEffect(() => {
    // Initialize AOS animations
    initAOS();
    
    // Additional initialization can go here
  }, []);
  
  return children;
};

export default AppInitializer; 
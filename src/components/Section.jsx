import React from 'react';
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
  
  const content = (
    <>
      {title && (
        titleAnimation ? (
          <motion.h2 
            className={getTitleClass()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={titleVariants}
          >
            {title}
          </motion.h2>
        ) : (
          <h2 className={getTitleClass()}>{title}</h2>
        )
      )}
      
      {subtitle && (
        titleAnimation ? (
          <motion.p 
            className="section-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={subtitleVariants}
          >
            {subtitle}
          </motion.p>
        ) : (
          <p className="section-subtitle">{subtitle}</p>
        )
      )}
      
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
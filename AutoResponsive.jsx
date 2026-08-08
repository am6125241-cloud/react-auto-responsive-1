import React, { useEffect } from 'react';

/**
 * AutoResponsive Wrapper
 * Automatic Scaling Component for Desktop-First React Layouts
 */
export const AutoResponsive = ({ children }) => {
  useEffect(() => {
    const updateScale = () => {
      const desktopWidth = 1280; // Target Desktop Layout Width
      const screenWidth = window.innerWidth;
      
      // Calculate scale ratio for smaller screens
      const scale = screenWidth < desktopWidth ? screenWidth / desktopWidth : 1;

      let meta = document.querySelector('meta[name="viewport"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'viewport';
        document.head.appendChild(meta);
      }
      
      // Update viewport dynamically
      meta.content = width=${desktopWidth}, initial-scale=${scale}, maximum-scale=1.0, user-scalable=no;
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div 
      style={{ 
        width: '1280px', 
        margin: '0 auto', 
        overflowX: 'hidden',
        minHeight: '100vh' 
      }}
    >
      {children}
    </div>
  );
};

export default AutoResponsive;

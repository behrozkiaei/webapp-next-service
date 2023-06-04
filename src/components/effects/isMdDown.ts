/** @jsxImportSource @next/client */
"use client"; // this is a client component 👈🏽
import { useState, useEffect } from 'react';

const useIsMdDown = () => {
  const [isMdDown, setIsMdDown] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window != "undefined" && window) {

      const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMdDown(true);
      } else  {
        setIsMdDown(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }
  }, []);

  return isMdDown;
};

export default useIsMdDown;
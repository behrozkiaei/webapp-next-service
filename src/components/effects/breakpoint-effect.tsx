/** @jsxImportSource @next/client */
"use client"; // this is a client component 👈🏽
import { useState, useEffect } from 'react';

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('');

  useEffect(() => {
    if (typeof window != "undefined" && window) {

      const handleResize = () => {
        if (window.innerWidth < 576) {
          setBreakpoint('xs');
      } else if (window.innerWidth < 768) {
        setBreakpoint('sm');
      } else if (window.innerWidth < 992) {
        setBreakpoint('md');
      } else if (window.innerWidth < 1200) {
        setBreakpoint('lg');
      } else {
        setBreakpoint('xl');
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }
  }, []);

  return breakpoint;
};

export default useBreakpoint;

import React, { useState, useRef, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Loader from './Components/Loader'
import Pages from './Components/Pages'


const App = () => {
  const [startClicked, setStartClicked] = useState(false);
  const lenisRef = useRef(null);
  const rafId = useRef(null);

  function initializeLenis() {
    if (lenisRef.current) return; // Already initialized
    
    // Ensure body overflow is reset before initializing Lenis
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    
    const lenis = new Lenis({
      wheelMultiplier: 2,
      duration: 1.5,
      easing: (x) => 1 - Math.pow(1 - x, 5),
    });
    
    lenisRef.current = lenis;
    
    function raf(time) {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
        rafId.current = requestAnimationFrame(raf);
      }
    }
    rafId.current = requestAnimationFrame(raf);
  }

  const handleStartButtonClick = () => {
    setStartClicked(true);
  };

  // Initialize Lenis only when START button is clicked
  useEffect(() => {
    if (startClicked) {
      // Small delay to ensure loader animation starts
      const timer = setTimeout(() => {
        initializeLenis();
      }, 600);
      
      return () => clearTimeout(timer);
    }
  }, [startClicked]);

  // Cleanup function
  useEffect(() => {
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="main w-full min-h-screen bg-[#1A1A1A] text-white">
        <Loader onLoadingComplete={handleStartButtonClick} />
        <Pages/>
      </div>
    </>
  )
}

export default App
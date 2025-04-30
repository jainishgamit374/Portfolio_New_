import React from 'react'
import Lenis from '@studio-freight/lenis'
import Loader from './Components/Loader'
import Pages from './Components/Pages'


const App = () => {

  function lenisFn() {
    const lenis = new Lenis({
      wheelMultiplier: 2,
      duration: 1.5,
      easing: (x) => 1 - Math.pow(1 - x, 5),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
  lenisFn();

  return (
    <>
      <div className="main w-full min-h-screen bg-[#1A1A1A] text-white">
        <Loader />
        <Pages/>
      </div>
    </>
  )
}

export default App
import React, { useEffect } from "react";
import { Stars } from "@react-three/drei"; // 3D Stars component from Drei
import { Canvas } from "@react-three/fiber"; // Canvas for rendering 3D content
import { FiArrowRight } from "react-icons/fi"; // Icon for the button
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion"; // Animation libraries from Framer Motion

import styles from "./Hero.module.css"; 
import Navbar from "./Navbar"; 

// Array of colors for the top section's animation
const COLORS_TOP = ["#F3F4F6", "#fef08a"];

const Hero = () => {
  // Using motion value for color animation
  const color = useMotionValue(COLORS_TOP[0]);

  // Animate the color using useEffect for continuous transition
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  // Define border and box-shadow using motion values
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <>
      {/* Navbar component */}
      <Navbar />

      {/* Hero section */}
      <motion.section className="relative grid h-[100vh] md:h-[100vh] lg:h-[150vh] place-content-center overflow-hidden px-4 py-24 text-white">
        
        {/* Text and image container */}
        <div className="w-full h-full flex items-center justify-center">
          
          {/* Hero text animation */}
          <div className="hero-text flex flex-col  gap-2 absolute w-full top-1/4 left-1/2 md:top-1/4 md:left-1/2 -translate-x-1/2 -translate-y-1/2 z-[7] text-center">
            <h1 className="text-[18vw] md:text-[14vw] lg:text-[15vw] hr-text uppercase tracking-tight leading-none md:leading-[12vw] lg:leading-[12vw] font-semibold text-zinc-300">
              {"Front-end".split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                  {child}
                </span>
              ))}
            </h1>
            <h1 className="text-[16vw] md:text-[14vw] lg:text-[15vw] hr-text uppercase tracking-tight leading-[12vw] md:leading-[12vw] lg:leading-[12vw] font-mono text-white">
              {"Developer".split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                  {child}
                </span>
              ))}
            </h1>
          </div>

          {/* Placeholder for hero image */}
          
          <div className="hero-img-cont absolute flex items-center justify-center w-[85vw] sm:w-3/4 md:w-[70vw] lg:w-[45vw] h-[85vw] sm:h-[50%] md:h-[70vw] lg:h-[45vw] mt-10 sm:mt-16 md:mt-20 lg:mt-24 bg-yellow-200 rounded-full overflow-hidden">
              <img className="hero-img absolute z-[8] w-full h-full top-1 rounded-full" src="" alt="" />
          </div>
          <motion.div
            style={{ border, boxShadow }}
          className="hero-img-cont absolute flex items-center justify-center w-[85vw] sm:w-3/4 md:w-[70vw] lg:w-[45vw] h-[85vw] sm:h-[50%] md:h-[70vw] lg:h-[45vw] mt-10 sm:mt-16 md:mt-20 lg:mt-24 bg-yellow-200 rounded-full overflow-hidden border-white">
              
          </motion.div>
        </div>


        {/* Button container */}
        <div className="hero-btn-cont absolute top-[85%] md:top-[88%] lg:top-[92%] left-1/2 -translate-x-1/2 z-[7]  border-[1px] rounded-full border-white">
          <motion.button
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="group relative flex w-fit items-center gap-2 rounded-full bg-gray-950/10 px-5 py-3 text-gray-50 transition-colors hover:bg-gray-950/50"
          >
            <h1 className="uppercase">Explore More !</h1>
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
        </div>

    
        {/* 3D stars background */}
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;

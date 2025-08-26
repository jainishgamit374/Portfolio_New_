import React, { useEffect, useMemo, useState } from "react";
import Button from "./Button";
import { Resume } from "../utils";


const Navbar = () => {


  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
     const handleResize = () => {
       setIsMobile(window.innerWidth <= 768);
     };

     handleResize();

     window.addEventListener("resize", handleResize);
     return () => window.removeEventListener("resize", handleResize);

  }, []);


  // Navigation links data
   const navLinks = useMemo(() => [
    { link: "About", id: "#about" },
    { link: "Work", id: "#project" },
    { link: "Contact", id: "#contact" },
  ],[]);

  // Smooth scroll to sections of the page
  const smoothScroll = (e, id) => {
    e.preventDefault();
    if (id !== "#") {
      const targetElement = document.querySelector(id);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="nav fixed top-0 left-0 z-40 w-full bg-transparent backdrop-blur-lg">
      <div className="max-w-screen-xl mx-auto  border-b border-zinc-700 flex items-center justify-between py-2 px-4 md:px-14 md:py-6 lg:px-0">

        {/* Logo Section */}
        <div className="nav-logo">
          <div className="nav-cont flex items-center justify-center w-8 h-8 text-black bg-white rounded-full">
            <a href="/">JG</a>
          </div>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="nav-link hidden md:block">
          <div className="nav-links flex gap-16">
            {navLinks.map((item, i) => (
              <React.Fragment key={i} className="flex items-center gap-1">
                <a
                  className="link text-[1.5vw] uppercase"
                  href={item.id}
                  onClick={(e) => smoothScroll(e, item.id)}
                >
                  {item.link}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Resume Button for Desktop */}
        <div className="w-[10vw] hidden md:block">
          <a
            className="Resume btn"
            href={Resume}
            download="JainishGamit_Resume.pdf"
          >
            <Button text="Resume" />
          </a>
        </div>

        {/* Toggle Menu for Mobile */}
        <div className="nav-link md:hidden">
          <div className="nav-links gap-5">
            {navLinks.map((item, i) => (
              <div key={i} className="flex justify-end gap-2">
                <a
                  className="link text-[3.4vw] uppercase"
                  href={item.id}
                  onClick={(e) => smoothScroll(e, item.id)}
                >
                  {item.link}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

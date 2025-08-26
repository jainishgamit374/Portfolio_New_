import React, { useState, useEffect } from "react";
import {profile} from "../utils";
import gsap, { Elastic } from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const codingskills = [
    "HTML",
    "CSS",
    "Javascript",
    "TypeScript",
    "ReactJs",
    "ExpressJs",
    "ThreeJs",
    "GSAP",
    "FramerMotion",
  ];
  const designskills = [
    "Figma",
    "Framer",
    "Canvas",
    "Blender",
    "Ui/UX",
    "Wix Studio",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    const profcont = document.querySelector(".profile-cont");
    const prof = document.querySelector(".profile");

    // Mouse move stuff //
    const activateMagneto = (event) => {
      if (isMobile) return; // Disable for mobile devices

      let boundBox = profcont.getBoundingClientRect();
      const magnetoStrength = 40;
      const magnetoTextStrength = 80;

      const shiftX =
        (event.clientX - boundBox.left) / profcont.offsetWidth - 0.5;
      const shiftY =
        (event.clientY - boundBox.top) / profcont.offsetHeight - 0.5;

      //  Move the button to it's new position //
      gsap.to(profcont, {
        duration: 0.5,
        x: shiftX * magnetoStrength,
        y: shiftY * magnetoStrength,
        ease: "power4.easeOut",
      });

      //  Move the text to it's new position //
      gsap.to(prof, {
        duration: 0.5,
        x: shiftX * magnetoTextStrength,
        y: shiftY * magnetoTextStrength,
        ease: "power4.easeOut",
      });
    };

    // Mouse leave stuff //
    const resetMagneto = () => {
      if (isMobile) return; // Disable for mobile devices

      gsap.to(profcont, {
        duration: 1.5,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });

      gsap.to(prof, {
        duration: 1.5,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });
    };

    // Add event listeners for mousemove and mouseleave
    profcont.addEventListener("mousemove", activateMagneto);
    profcont.addEventListener("mouseleave", resetMagneto);

    return () => {
      profcont.removeEventListener("mousemove", activateMagneto);
      profcont.removeEventListener("mouseleave", resetMagneto);
    };
  }, [isMobile]);

  return (
    <div
      className="relative w-full text-center justify-center py-10 overflow-hidden"
      id="about"
    >
      <div className="heading max-w-screen-xl mx-auto flex items-center justify-between pb-12 px-4">
        <h1 className="text-3xl md:text-6xl lg:text-6xl uppercase font-semibold tracking-tight">
          About me
        </h1>
        <div className="w-1/3 h-1 bg-white"></div>
      </div> 
      <div className="inf-cont w-full min-h-screen bg-white flex items-center justify-center py-10">
        <div className="heading w-full h-full mx-auto flex items-center flex-col gap-2 md:gap-4 lg:gap-[5.8vw] py-10 px-1 md:py-14 md:px-12 lg:p-14 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-4 w-full h-auto">
            {/* Left Side: Two stacked containers */}

            {/* Right Side: Profile Section */}
            <div className="w-full lg:w-1/2 bg-[#232323] rounded-3xl p-10 flex flex-col justify-evenly relative overflow-hidden">
              <svg
                className="absolute scale-[250%] lg:top-14 lg:scale-150 lg:w-[50vw] lg:h-[50vh] lg:-rotate-6  "
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 800 400"
              >
                <path
                  d="M391.27557373046875,-0.4199475049972534C423.74256103515626,27.531758475303647,529.5648681640625,62.292215223312375,526.5546875,116.04549407958984C523.5445068359375,169.7987729358673,365.187333984375,157.32800537109375,378.733154296875,223.5520477294922C392.278974609375,289.7760900878906,533.9726171875,351.5565344238281,582.99560546875,391.97900390625"
                  fill="none"
                  stroke-width="22"
                  stroke='url("#SvgjsLinearGradient1004")'
                  stroke-linecap="round"
                ></path>
                <defs>
                  <linearGradient id="SvgjsLinearGradient1004">
                    <stop stop-color="#FFFFFF" offset="0"></stop>
                    <stop stop-color="#FFFFFF" offset="1"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex justify-end">
                <div className="col-span-1 md:col-span-2 lg:col-span-2  rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-10 lg:p-10 flex items-center justify-center">
                  <div className="profile-cont w-40 h-40 md:w-44 md:h-44 lg:w-56 lg:h-56 rounded-full bg-zinc-700 overflow-hidden drop-shadow-2xl shadow-gray-50 flex items-center justify-center">
                    <img
                      className="profile w-[90%] h-[90%] bg-zinc-200 object-cover rounded-full"
                      src={profile}
                      alt="Profil-Image"
                    />
                  </div>
                </div>
              </div>
              <div className="text-white mt-2 lg:mt-6">
                <h1 className=" text-[14vw] lg:text-[8vw] text-start leading-none">
                  I'm <br /> Jainish!
                </h1>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex text-start flex-col gap-4">
              {/* First Container */}
              <div className="rounded-3xl p-10 bg-[#232323] flex flex-col items-start gap-3 relative overflow-hidden">
                <svg
                  className="absolute scale-[280%] -top-24 left-44 lg:-top-20 lg:scale-90 w-[50vw] h-[50vh] -rotate-3"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 800 400"
                >
                  <path
                    d="M222.8486328125,-0.4199475049972534C245.24583435058594,32.27996470530828,305.2703348795573,164.27413258949915,357.2318420410156,195.77952575683594C409.19334920247394,227.28491892417273,460.8562367757161,208.62057749430338,534.61767578125,188.61241149902344C608.3791147867838,168.6042455037435,755.6033426920573,94.54417673746745,799.8004760742188,75.73052978515625"
                    fill="none"
                    stroke-width="30"
                    stroke="#ffffff"
                    stroke-linecap="round"
                  ></path>
                  <defs>
                    <linearGradient id="SvgjsLinearGradient1001">
                      <stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop>
                      <stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <h1 className="text-2xl lg:text-3xl text-white">DEVELOPE</h1>
                <h2 className="text-gray-400">Description</h2>
                <div className="paragraph">
                  <p className="text-base text-start lg:text-md text-gray-300">
                    I started building websites with JavaScript, and now I craft
                    them with TypeScript, React, Express, Node, and a little
                    magic!
                  </p>
                  <h2 className="py-4 text-gray-400">Skills & Tools</h2>
                  <div className="Skills flex flex-wrap gap-2">
                    {codingskills.map((item, i) => (
                      <h1
                        key={i}
                        className="bg-zinc-300 w-fit px-2 py-[.1vw] rounded-xl text-zinc-800 text-sm"
                      >
                        {item}
                      </h1>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second Container */}
              <div className="rounded-3xl p-10 bg-[#232323] flex flex-col items-start gap-3 relative overflow-hidden">
                <svg
                className="absolute hidden md:block lg:-top-24 lg:left-2 lg:scale-105 lg:w-[50vw] lg:h-[70vh] lg:-rotate-3"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 800 400"
                >
                  <path
                    d="M510.4286804199219,6.761154651641846C512.3876833089192,43.492560873031614,473.76295878092446,118.12599968274435,517.5957641601562,141.14434814453125C561.428569539388,164.16269660631815,630.1431778971354,24.613215128580734,670.7926025390625,90.97462463378906C711.4420271809896,157.33603413899738,667.5375492350261,303.8555254109701,666.3131713867188,383.92999267578125"
                    fill="none"
                    stroke-width="28"
                    stroke="#ffff"
                    stroke-linecap="round"
                  ></path>
                  <defs>
                    <linearGradient id="SvgjsLinearGradient1000">
                      <stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop>
                      <stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
                    </linearGradient>
                  </defs>
                </svg>

                <h1 className="text-2xl lg:text-3xl text-white">DESIGN</h1>
                <h2 className="text-gray-400">Description</h2>
                <div className="paragraph">
                  <p className="text-base text-start lg:text-md text-gray-300">
                    I started designing as my hobby, but like all good hobbies,
                    it slowly crept into my career—now it won't leave me alone!
                  </p>
                  <h2 className="py-4 text-gray-400">Skills & Tools</h2>
                  <div className="Skills flex flex-wrap gap-2">
                    {designskills.map((item, i) => (
                      <h1
                        key={i}
                        className="bg-zinc-300 w-fit px-2 py-[.1vw] rounded-xl text-zinc-800 text-sm"
                      >
                        {item}
                      </h1>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-4 w-full h-auto">
            <div className="w-full md:w-1/2 rounded-xl md:rounded-2xl lg:rounded-3xl bg-[#232323] faq-bga p-10 md:p-14 lg:p-10">
              <div className="project-container w-full h-full flex flex-col items-center justify-center">
                <span className="text-effect">
                  <p className="text-sm md:text-2xl lg:text-2l text-center">
                    A Creative Developer With A passion For Design And
                    Development. Form Concept To Launch, I'm Involved In Every
                    Step of the Process
                  </p>
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 rounded-xl md:rounded-2xl lg:rounded-3xl bg-[#232323] faq-bga p-10 md:p-14 lg:p-10">
              <div className="project-container w-full h-full flex gap-5 items-center justify-center">
                <h1 className="text-7xl md:text-5xl lg:text-[7vw]">20+</h1>
                <h2 className="text-5xl md:text-lg lg:text-6xl leading-none text-center">
                  Project
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import { profile, TechHtml, TechCss, TechJavascript, TechReact, TechTailwind, TechTypescript, TechFigma, TechFramer, TechGit } from '../utils';
import gsap, { Elastic } from 'gsap'
import { useGSAP } from "@gsap/react";



const About = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useGSAP(() => {
        const profcont = document.querySelector('.profile-cont');
        const prof = document.querySelector('.profile');

        // Mouse move stuff //
        const activateMagneto = (event) => {
            if (isMobile) return;  // Disable for mobile devices

            let boundBox = profcont.getBoundingClientRect();
            const magnetoStrength = 40
            const magnetoTextStrength = 80

            const shiftX = ((event.clientX - (boundBox.left)) / profcont.offsetWidth) - 0.5
            const shiftY = ((event.clientY - (boundBox.top)) / profcont.offsetHeight) - 0.5

            //  Move the button to it's new position //
            gsap.to(profcont, {
                duration: 0.5,
                x: shiftX * magnetoStrength,
                y: shiftY * magnetoStrength,
                ease: 'power4.easeOut'
            })

            //  Move the text to it's new position //
            gsap.to(prof, {
                duration: 0.5,
                x: shiftX * magnetoTextStrength,
                y: shiftY * magnetoTextStrength,
                ease: 'power4.easeOut'
            })


        }

        // Mouse leave stuff //
        const resetMagneto = () => {
            if (isMobile) return;  // Disable for mobile devices

            gsap.to(profcont, {
                duration: 1.5,
                x: 0,
                y: 0,
                ease: Elastic.easeOut
            });

            gsap.to(prof, {
                duration: 1.5,
                x: 0,
                y: 0,
                ease: Elastic.easeOut
            });
        }

        // Add event listeners for mousemove and mouseleave
        profcont.addEventListener('mousemove', activateMagneto);
        profcont.addEventListener('mouseleave', resetMagneto);

        return () => {
            profcont.removeEventListener('mousemove', activateMagneto);
            profcont.removeEventListener('mouseleave', resetMagneto);
        };

    }, [isMobile])
    

    return (
        <div className="relative w-full text-center py-14 overflow-hidden" id="about">
            <div className="heading max-w-screen-xl mx-auto flex items-center justify-between pb-12 px-4">
                <h1 className='text-3xl md:text-6xl lg:text-6xl uppercase font-semibold tracking-tight'>About me</h1>
                <div className="w-1/3 h-1 bg-white"></div>
            </div>
            <div className="inf-cont w-full h-[185vh]  md:h-[100vh] lg:h-[150vh] bg-white flex items-center justify-center">
                <div className="heading w-full h-full mx-auto flex items-center flex-col gap-2 md:gap-4 lg:gap-4 py-10 px-1 md:py-14 md:px-12 lg:p-14 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-4 w-full h-auto md:h-[35vh] lg:h-[60vh]">
                        <div className="col-span-1 md:col-span-3 lg:col-span-3 rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-10 md:pt-16 lg:p-10 lg:pt-16 flex items-start flex-col gap-4 md:gap-8 lg:gap-8 faq-bga img-cont bg-[#232323]">
                            <h1 className='text-xl md:text-2xl lg:text-2xl'>I am Jainish Gamit.</h1>
                            <div className="paragraph">
                                <p className='text-start py-2 text-sm md:text-base lg:text-lg'>A creative developer with a passion for design and development. From concept to launch, I am involved in every step of the process. </p>
                                <p className='text-start py-2 text-sm md:text-base lg:text-lg'>User experience, visually striking design, engaging interactions and impeccable typography are my top priorities. </p>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#232323] rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-10 lg:p-10 flex items-center justify-center faq-bga">
                            <div className="profile-cont w-32 h-32 md:w-44 md:h-44 lg:w-44 lg:h-44 rounded-full bg-zinc-700 overflow-hidden drop-shadow-2xl shadow-gray-50 flex items-center justify-center">
                                <img className='profile w-[80%] h-[80%] bg-zinc-200 object-cover rounded-full' src={profile} alt="Profil-Image" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-4 w-full h-auto md:h-[50vh] lg:h-[45vh]">
                        <div className="bg-[#232323] rounded-xl md:rounded-2xl lg:rounded-3xl faq-bga p-10 md:p-10 lg:p-0">
                            <div className="project-container w-full h-full flex flex-row md:flex-col lg:flex-col gap-4 md:gap-0 lg:gap-2 items-center justify-center">
                                <h1 className='text-5xl md:text-5xl lg:text-6xl'>20+</h1>
                                <h2 className='text-lg md:text-lg lg:text-xl leading-none text-center'>Complete <br /> Project</h2>
                            </div>
                        </div>
                        <div className="bg-[#232323] rounded-xl md:rounded-2xl lg:rounded-3xl faq-bga p-10 md:p-10 lg:p-0">
                            <div className="project-container w-full h-full flex flex-row md:flex-col lg:flex-col gap-4 md:gap-0 lg:gap-2 items-center justify-center">
                                <h1 className='text-5xl md:text-5xl lg:text-6xl'>1.5Year</h1>
                                <h2 className='text-lg md:text-lg lg:text-xl leading-none text-center'>Development <br /> & Designing</h2>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2 lg:col-span-2 rounded-xl md:rounded-2xl lg:rounded-3xl bg-[#232323] faq-bga p-10 md:p-14 lg:p-10">
                            <div className="project-container w-full h-full flex flex-col items-center justify-center">
                                <span className="text-effect">
                                <p className='text-sm md:text-2xl lg:text-lg text-center'>Helping startups, B2B Services, small businesses and Creatives with Customization design solutions that include landing pages & website Creations.</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-4 w-full h-[35vh] md:h-[20vh] lg:h-[35vh]">
                        <div className="col-span-4 md:col-span-3 lg:col-span-2 rounded-xl md:rounded-2xl lg:rounded-3xl bg-[#232323] faq-bga">
                            <div className="project-container w-full h-[30vh] md:h-full lg:h-full px-10 flex flex-col items-center gap-8 overflow-hidden">
                                <h1 className="py-2">My Tech Stack</h1>
                                <div className="relative w-full h-1/2 flex gap-10 flex-shrink-0 items-center px-4 py-7 overflow-hidden">
                                    <motion.div
                                        initial={{ x: "0" }}
                                        animate={{ x: "-100%" }}
                                        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                                        className="techstack-container flex gap-10">
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full ml-[.5vw]" src={TechHtml} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechCss} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full ml-[.5vw]" src={TechJavascript} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechReact} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechTailwind} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechTypescript} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechFigma} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechFramer} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechGit} />
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ x: "0" }}
                                        animate={{ x: "-100%" }}
                                        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                                        className="techstack-container flex gap-10">
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full ml-[.5vw]" src={TechHtml} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechCss} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full ml-[.5vw]" src={TechJavascript} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechReact} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechTailwind} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechTypescript} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechFigma} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechFramer} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechGit} />
                                        </div>
                                    </motion.div>
                                    <div className='absolute top-1/2 -translate-y-1/2 left-0 h-full w-full bg-gradient-to-r from-[#232323] via-transparent to-[#232323]'></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 md:col-span-2 lg:col-span-2 rounded-xl md:rounded-2xl lg:rounded-3xl bg-[#232323] flex faq-bga">
                            <div className="project-container w-full h-[30vh] md:h-full lg:h-full p-10 flex flex-col items-center justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className="primary-btn h-16 w-[90%] md:h-16 md:w-[28vw] lg:h-16 lg:w-[18vw] px-5 py-6 bg-white hover:bg-gray-100 text-black flex flex-col items-center justify-center overflow-hidden rounded-full">
                                    <motion.div
                                        transition={{ ease: easeInOut }}
                                        className="flex w-full items-center justify-center gap-5">
                                        <span className="text-2xl md:text-xl lg:text-2xl uppercase font-semibold">Contact Us</span>
                                        <motion.div
                                            className="p-1"
                                            animate={isHovered ? { x: "50%", rotate: "-45deg" } : { x: "0" }}
                                        >
                                            <i className="ri-arrow-right-line text-xl font-semibold"></i>
                                        </motion.div>
                                    </motion.div>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About
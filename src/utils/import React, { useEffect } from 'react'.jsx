import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const Footer = () => {


    const navLinks = [
        { link: "About", id: "#about" },
        { link: "Project", id: "#project" },
        { link: "Services", id: "#services" },
        { link: "Testiomonials", id: "#testiomonials" },
    ];
    useEffect(() => {
        const smoothScroll = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute("href");
            if (targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth",
                    });
                }
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }
        };

        const links = document.querySelectorAll('.footer-links a');
        links.forEach(link => {
            link.addEventListener('click', smoothScroll);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', smoothScroll);
            });
        };
    }, []);

    return (
        <>
            <div className="relative w-full  py-10 pb-0 overflow-hidden bg-zinc-50">
                <div className="heading max-w-screen-xl h-auto mx-auto flex items-center justify-between flex-col gap-5 px-1 md:px-4 lg:px-4  text-black">
                    <div className="footer-links w-full flex items-center flex-row justify-center py-1">
                        {navLinks.map((item, i) => (
                            <div key={i} className="w-[100%] md:w-[40%] lg:w-[14%] h-[10vh] flex items-center justify-center p-4">
                                <a className='cursor-pointer links text-sm md:text-xl lg:text-xl ' href={item.id}>{item.link}</a>
                            </div>
                        ))}
                    </div>

                    <div className="footer-logo py-5">
                        <h1 className='footertext text-5xl font-["Oxta]'>JG</h1>
                    </div>

                    <div className="w-full h-[8vh] flex items-center justify-center gap-14">
                        <motion.i
                            className='ri-instagram-line text-4xl cursor-pointer'
                            whileHover={{ scale: 1.2, y: -2 }}
                            transition={{ type: "spring", stiffness: 500 }}
                        ></motion.i>
                        <motion.i
                            className='ri-linkedin-box-fill text-4xl cursor-pointer'
                            whileHover={{ scale: 1.2, y: -2 }}
                            transition={{ type: "spring", stiffness: 500 }}
                        ></motion.i>
                        <motion.i
                            className='ri-github-fill text-4xl cursor-pointer'
                            whileHover={{ scale: 1.2, y: -2 }}
                            transition={{ type: "spring", stiffness: 500 }}
                        ></motion.i>
                        <motion.i
                            className='ri-twitter-fill text-4xl cursor-pointer'
                            whileHover={{ scale: 1.2, y: -2 }}
                            transition={{ type: "spring", stiffness: 500 }}
                        ></motion.i>
                    </div>
                    <div className="w-full py-4 flex items-center justify-center">
                        <p className='text-sm md:text-xl lg:text-xl'>All Rights Reserved. @ copyright Jainish Gamit 2024</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
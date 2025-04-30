import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
    const footerLinkes = [
        { link: "Github", url:"https://github.com/"},
        { link: "LinkedIn", },
        { link: "Twitter", },
        { link: "Instagram", },
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

        const links = document.querySelectorAll(".footer-links a");
        links.forEach((link) => {
            link.addEventListener("click", smoothScroll);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener("click", smoothScroll);
            });
        };
    }, []);

    return (
        <>
            <div className="relative w-full h-screen md:h-[70vh] lg:h-auto pt-10 overflow-hidden bg-zinc-50" id="contact">
                <div className="heading max-w-screen-xl h-auto mx-auto flex items-start justify-between flex-col  gap-5 px-1 md:px-4 lg:px-4 lg:gap-8  text-black">

                    <div className="footer-top px-1 w-full flex items-center justify-between">
                        <div className="py-5">
                            <h1 className="text-5xl font-[Bandeins Strange Variable]">CONTACT</h1>
                        </div>
                        <div className="footer-logo py-5">
                            <h1 className='footertext text-4xl font-["Oxta]'>JG</h1>
                        </div>
                    </div>

                    <div className="footer-moddle flex flex-col lg:justify-between lg:flex-row gap-8 px-2 w-full">
                        <div className="contact flex flex-col gap-2 w-1/2">
                            <div className="mail">
                                <h1 className="text-base lg:text-xl text-zinc-500">Email</h1>
                                <a className="text-lg" href="">Jainishgamit374@gmail.com</a>
                            </div>
                            <div className="number">
                                <h1 className="text-base lg:text-xl text-zinc-500">Number</h1>
                                <h2>+91 9574981958</h2>
                            </div>
                        </div>
                        <div className="contact flex flex-col gap-2 w-1/2 lg:w-1/2">
                            <h1 className="text-xl text-zinc-600">Social</h1>
                            <div className="footer-links w-full flex items-start flex-col justify-start gap-1 pr-12">
                                {footerLinkes.map((item, i) => (
                                    <div key={i} className="w-[100%] flex items-center gap-4 md:w-[40%] lg:w-[100%] h-[4vh]  border-b-[.2vw] border-zinc-700">
                                        <a className='cursor-pointer text-xl md:text-xl lg:text-xl ' href={item.url}>{item.link}</a>
                                        <span className="cursor-pointer text-xl md:text-xl lg:text-xl">
                                            <MdArrowOutward />
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="Credit py-6 lg:py-0 lg:pl-10 lg:w-1/2 flex items-start justify-start lg:justify-end">
                            <h1 className="text-2xl md:text-3xl text-zinc-600 lg:text-end">
                                Designed and  Develop <br />
                                by JAINISH
                            </h1>
                        </div>


                    </div>

                    <div className="w-full py-4 lg:py-10 flex items-center justify-center">
                        <p className="text-sm md:text-xl lg:text-xl">
                            All Rights Reserved. @ copyright Jainish Gamit 2025
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;

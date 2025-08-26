import { easeInOut, motion, MotionConfig } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import gsap, { Power2 } from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = ({ onLoadingComplete }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [btnClick, setBtnClick] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const loaderRef = useRef(null);

    const btnClicked = () => {
        setBtnClick(true);
        setIsLoading(false);
        // Call parent callback to enable scrolling
        if (onLoadingComplete) {
            onLoadingComplete();
        }
    }

    const t1 = gsap.timeline();
    useGSAP(() => {
        t1.from(".loader-text .loading ", {
            y: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            ease: 'easeInOut',
        })

        t1.to(".circle", {
            strokeDashoffset: -380,
            duration: 2.3,
            ease: 'easeInOut',
        }, "p");

        t1.to(
            '.loader-prog h1',
            {
                opacity: 1,
                duration: 2,
                ease: 'easeInOut',
                onStart: () => {
                    let percent = 0;
                    const interval = setInterval(() => {
                        percent += 10;
                        if (loaderRef.current) {
                            loaderRef.current.textContent = `${percent}%`;
                        }
                        if (percent === 100) {
                            clearInterval(interval);
                            setIsLoading(false);
                            // Don't enable scrolling automatically, only when button is clicked
                        }
                    }, 100);
                },
            },
            'p'
        );

        t1.to('.loader-prog h1',
            {
                opacity: 0,
                duration: .1,
                ease: 'easeInOut',
            },
        );

        t1.from('button',
            {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: 'easeInOut',
            },
        );

    }, []);

    // Disable body scroll until button is clicked
    useEffect(() => {
        if (!btnClick) {
            // Disable scrolling until button is clicked
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            // Enable scrolling only when button is clicked
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }

        // Cleanup function to restore scrolling when component unmounts
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [btnClick]);

    return (
        <>
            <MotionConfig
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                <motion.div
                    animate={btnClick ? "open" : "closed"}
                    variants={{
                        open: {
                            clipPath: "inset(0 0 100% 0)"
                        },
                        closed: {
                            clipPath: "inset(0 0 0 0)",
                            transform: { ease: Power2.easeOut }
                        }
                    }}
                    className="w-full h-screen bg-[#333] fixed bottom-0 left-[50%] -translate-x-[50%] z-50 snap-always loadered">
                    <div className="relative flex w-full h-full max-w-screen-xl mx-auto text-center">
                        <MotionConfig>
                            <div className="w-[50vw] h-[70vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="loader-container w-full h-full flex items-center flex-col gap-10 justify-center">
                                    <div className="loading relative">
                                        <svg width="225" height="225" viewBox="0 0 124 124">
                                            <circle
                                                style={{ rotate: "-90deg", transformOrigin: "center", strokeDasharray: "380", strokeDashoffset: "380" }}
                                                className="circle" cx="62" cy="62" r="59" fill="none" stroke="#ffff" strokeWidth="1px" />
                                        </svg>
                                        <div className="loader-prog absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                            <h1 ref={loaderRef} className='text-white text-[2vw] opacity-0'>0%</h1>
                                        </div>
                                    </div>
                                    <motion.button
                                        onClick={btnClicked}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        className="primary-btn h-8 w-34 px-4 py-4 bg-white hover:bg-gray-100 text-black flex flex-col items-center overflow-hidden rounded-full">
                                        <motion.div
                                            animate={{ y: isHovered ? "-200%" : "-50%" }}
                                            transition={{ ease: easeInOut }}
                                            className="flex translate-y-full w-full items-center justify-between gap-4 px-2">
                                            <span className="text-sm tracking-[0.4vw]">START</span>
                                        </motion.div>
                                        <motion.div
                                            animate={{ y: isHovered ? "-150%" : 0 }}
                                            transition={{ ease: easeInOut }}
                                            className="flex translate-y-full w-full items-center justify-between gap-4 px-2">
                                            <span className="text-sm tracking-[0.4vw]">START</span>
                                        </motion.div>
                                    </motion.button>
                                </div>
                            </div>
                        </MotionConfig>
                    </div>
                </motion.div>
            </MotionConfig>
        </>
    )
}

export default Loader
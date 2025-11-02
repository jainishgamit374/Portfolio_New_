import React, { useState } from "react";
import { image1, image2, image3 , image4 } from '../utils'
import { easeInOut, motion } from "framer-motion";


const Projects = () => {

    const projectsData = [

        {
            id: 1,
            image: image1,
            title: 'BrandbeetClone',
            category: 'Project',
            url: "https://jainish1025.github.io/-BrandbeetcLONE/"
        },

        {
            id: 2,
            image: image2,
            title: 'CubartoClone',
            category: 'Project',
            url: "https://jainish1025.github.io/CubartoClone/"
        },

        {
            id: 3,
            image: image3,
            title: 'AwwadedWebsite',
            category: 'Project',
            url: "https://jainish1025.github.io/AwwadedWebsite/"
        },
        {
            id: 4,
            image: image4,
            title: 'Netflix-(Clone)',
            category: 'Project',
            url: "https://netflix-aljr92zy3-jainish23-projects.vercel.app/"
        },
    ];

    const [isHovered, setIsHovered] = useState(false);


    return (
        <>
            <div className="relative w-full text-center py-14 overflow-hidden" id="project">
                <div className="heading max-w-screen-xl mx-auto flex items-center justify-between pb-12 px-4">
                    <h1 className="text-3xl md:text-6xl lg:text-6xl uppercase font-semibold tracking-tight">
                        Projects
                    </h1>
                    <div className="w-1/3 h-1 bg-white"></div>
                </div>
                <div className="Project-wrapper max-w-screen-xl  mx-auto py-4 px-4 flex items-center justify-center">
                    <div className="heading w-full h-full mx-auto flex items-center  flex-col gap-4 py-10 px-1 md:py-10 md:px-8 lg:py-10 lg:px-12 ">
                        <div className="grid grid-cols-6 gap-4 w-full">
                            {projectsData.map((item) => (
                                <div key={item.id} className="col-span-6 md:col-span-3 lg:col-span-3 box rounded-2xl md:rounded-3xl lg:rounded-3xl bg-[#232323] p-[0.1rem]  flex items-start flex-col gap-8">
                                    <div className="in flex bg-[#232323] items-start flex-col gap-8  p-8 rounded-3xl">
                                        <img className='rounded-[1rem] mb-[1rem]' src={item.image} alt="" />
                                        <div className="flex items-center justify-between w-full">
                                            <h1>{item.title}</h1>
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                onMouseEnter={() => setIsHovered(item.id)}  // I'm using this becasus when you hover on one card button then it will animate all the button. so i use (item.id) to make it unique.
                                                onMouseLeave={() => setIsHovered(false)}
                                                className="primary-btn"
                                            >

                                                <motion.a
                                                    transition={{ ease: easeInOut }}
                                                    href={item.url}
                                                    target="_blank"           
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-10 bg-zinc-200 hover:bg-zinc-50 p-[0.1] px-3 md:p-1 md:px-5 lg:p-1 lg:px-5 text-zinc-800 font-semibold rounded-full"
                                                >
                                                    <span className="text-xl uppercase font-semibold">Live</span>
                                                    <motion.div
                                                        className="p-1"
                                                        animate={isHovered === item.id ? { x: "40%" } : { x: "0" }}
                                                    >
                                                        <i className="ri-arrow-right-line text-xl font-semibold"></i>
                                                    </motion.div>
                                                </motion.a>

                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Frequentlyque = () => {
  // State to track the open FAQ item
  const [openId, setOpenId] = useState(null);

  // FAQ data
  const faqData = [
    {
      id: "1",
      headtext: "What service do you offer?",
      info: "I provide services for the design and development of premium landing pages & websites. Supplementary services for design, animation and writing may also be provided based on project.",
    },
    {
      id: "2",
      headtext: "How much does a landing page cost?",
      info: `I charge based on a fixed price, starting at $3000 per project. Project Costs can depend on factors like number of pages, integrations & functions needed.`,
    },
    {
      id: "3",
      headtext: "What do you build your websites with?",
      info: "I use Figma for the design stage and exclusively use Framer for the development. Both are industry-leading platforms that can cater to the needs of your project.",
    },
    {
      id: "4",
      headtext: "How long does a project takes?",
      info: `Projects, understandably, vary in length. An average project (single landing page) can take 1 or 2 weeks accounting for ideation, revisions etc.`,
    },
    {
      id: "5",
      headtext: "What is the process for a project?",
      info: `My process involves:<br/>1. Ideation<br/>2. Mood board<br/>3. Wireframe<br/>4. Design<br/>5. Development`,
    },
  ];

  // Function to toggle FAQ item visibility
  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <div className="relative w-full h-[125vh] md:h-auto text-center py-14 overflow-hidden">
        {/* Heading */}
        <div className="heading max-w-screen-xl mx-auto flex items-center justify-center pb-12 px-4">
          <h1 className="text-4xl capitalize font-semibold tracking-tight">
            Frequently Asked Questions
          </h1>
        </div>

        {/* FAQ Wrapper */}
        <div className="FAQ-wrapper max-w-screen-xl  mx-auto py-5 px-4  flex items-center flex-col justify-between">
          <div className="FAQ-container w-full h-full flex items-center justify-between flex-row flex-wrap gap-8">
            {/* FAQ Items */}
            {faqData.map((item) => (
              <motion.div
                key={item.id}
                className="faq-content relative w-[100%] md:w-[80%] lg:w-[48%]"
                initial={{ height: "12vh" }}
                animate={{ height: openId === item.id ? "28vh" : "12vh" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {/* FAQ Question */}
                <motion.div
                  onClick={() => toggleFaq(item.id)}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="frq-que absolute left-0 z-[2] w-full h-[12vh] px-5 flex items-center gap-8 faq-bg rounded-xl"
                >
                  {/* Expand/Collapse Button */}
                  <motion.button
                    className="acton"
                    animate={{ rotate: openId === item.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="ri-add-line text-xl"></i>
                  </motion.button>

                  {/* FAQ Question Text */}
                  <h1 className="text-sm md:text-xl lg:text-xl">{item.headtext}</h1>
                </motion.div>

                {/* FAQ Answer */}
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      className="frq-para absolute left-0 w-full text-start py-10 gap-5 px-5 md:px-10 lg:px-20 faq-bg rounded-xl"
                      initial={{ opacity: 0, top: "0%" }}
                      animate={{ opacity: 1, top: "30%" }}
                      exit={{ opacity: 0, top: "0%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {/* Display answer text */}
                      <p
                        className="text-[2.5vw] md:text-[2vw] lg:text-[1.1vw] leading-tight"
                        dangerouslySetInnerHTML={{ __html: item.info }}
                      ></p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Frequentlyque;

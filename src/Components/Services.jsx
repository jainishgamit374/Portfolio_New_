import React from "react";

const Services = () => {
  const wd = Array(10).fill("Web Development");
  const ud = Array(10).fill("Ui/Ux Design");
  const ct = Array(10).fill("Consulting & Training");
  const pd = Array(10).fill("Product Designing");
  const so = Array(10).fill("Seo");

  return (
    <>
      <div className="relative w-full h-[70vh] md:h-[65vh] lg:h-fit  text-center py-14 overflow-hidden" id="#services">
        <div className="heading max-w-screen-xl mx-auto flex items-center justify-between pb-12 px-4">
          <h1 className="text-3xl md:text-6xl lg:text-6xl uppercase font-semibold tracking-tight">
            Services
          </h1>
          <div className="w-1/3 h-1 bg-white"></div>
        </div>
        <div className="service-wrapper max-w-screen-xl mx-auto  py-9 px-4 flex items-center flex-col justify-center ">
          <div className="service-cont">
            <div className="service-links">
              <h1 className="text-[5vw] md:text-[4.5vw] lg:text-[4vw] text-white uppercase font-semibold mix-blend-difference">web development</h1>
              <i className="ri-arrow-right-up-line"></i>
            </div>
            <div className="service-linksbefore flex items-center gap-[2vw] absolute h-full w-full opacity-0 -ml-[10px]">
              {wd.map((item, index) => (
                <div key={index} className="marquee-item">
                  <h1 className="text-[4vw] md:text-[4vw] lg:text-[3vw] capitilize w-[35vw] md:w-[40vw] lg:w-[30vw]">{item}</h1>
                  <i className="ri-arrow-right-up-line"></i>
                </div>
              ))}
            </div>
          </div>

          <div className="service-cont">
            <div className="service-links">
              <h1 className="text-[5vw] md:text-[4.5vw] lg:text-[4vw] text-white uppercase font-semibold mix-blend-difference">ui/ux Designe</h1>
              <i className="ri-arrow-right-up-line"></i>
            </div>
            <div className="service-linksbefore flex items-center gap-[2vw] absolute h-full w-full opacity-0 -ml-[10px]">
              {ud.map((item, index) => (
                <div key={index} className="marquee-item">
                  <h1 className="text-[4vw] md:text-[4vw] lg:text-[3vw] capitilize w-[35vw] md:w-[30vw] lg:w-[25vw]">{item}</h1>
                  <i className="ri-arrow-right-up-line"></i>
                </div>
              ))}
            </div>
          </div>

          <div className="service-cont">
            <div className="service-links">
              <h1 className="text-[5vw] md:text-[4.5vw] lg:text-[4vw] text-white uppercase font-semibold mix-blend-difference">consulting & Tranning</h1>
              <i className="ri-arrow-right-up-line"></i>
            </div>
            <div className="service-linksbefore flex items-center gap-[2vw] absolute h-full w-full opacity-0 -ml-[10px]">
              {ct.map((item, index) => (
                <div key={index} className="marquee-item">
                  <h1 className="text-[4vw] md:text-[4vw] lg:text-[3vw] capitilize w-[38vw] md:w-[40vw] lg:w-[30vw]">{item}</h1>
                  <i className="ri-arrow-right-up-line"></i>
                </div>
              ))}
            </div>
          </div>
  
          <div className="service-cont">
            <div className="service-links">
              <h1 className="text-[5vw] md:text-[4.5vw] lg:text-[4vw] text-white uppercase font-semibold mix-blend-difference">Product Designer</h1>
              <i className="ri-arrow-right-up-line"></i>
            </div>
            <div className="service-linksbefore flex items-center gap-[2vw] absolute h-full w-full opacity-0 -ml-[10px]">
              {pd.map((item, index) => (
                <div key={index} className="marquee-item">
                  <h1 className="text-[4vw] md:text-[4vw] lg:text-[3vw] capitilize w-[35vw] md:w-[40vw] lg:w-[30vw]">{item}</h1>
                  <i className="ri-arrow-right-up-line"></i>
                </div>
              ))}
            </div>
          </div>    

          <div className="service-cont">
            <div className="service-links">
              <h1 className="text-[5vw] md:text-[4.5vw] lg:text-[4vw] text-white uppercase font-semibold mix-blend-difference">Seo</h1>
              <i className="ri-arrow-right-up-line"></i>
            </div>
            <div className="service-linksbefore flex items-center gap-[2vw] absolute h-full w-full opacity-0 -ml-[10px]">
              {so.map((item, index) => (
                <div key={index} className="marquee-item">
                  <h1 className="text-[4vw] md:text-[4vw] lg:text-[3vw] uppercase w-[35vw] md:w-[20vw] lg:w-[10vw]">{item}</h1>
                  <i className="ri-arrow-right-up-line"></i>
                </div>
              ))}
            </div>
          </div>    

        </div>
      </div>
    </>
  );
};

export default Services;

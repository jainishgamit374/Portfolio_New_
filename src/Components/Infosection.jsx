import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { useRef } from "react";
import {infovid} from "../utils";

gsap.registerPlugin(ScrollTrigger);

const Infosection = () => {
  useGSAP(() => {
    const reveals = gsap.utils.toArray(".revel");
    const icon = document.querySelector(".icone");

    gsap.set(reveals, { y: 100, opacity: 0 });
    gsap.set(icon, { rotate: -190 });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".triggerTextFill",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    t1.to(reveals, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  });

  return (
    <>
      <div className="triggerTextFill w-full h-[40vh] md:h-[60vh] lg:h-[90vh] mx-auto py-14 overflow-hidden">
        <div className="inf-cont relative flex flex-col w-full h-full px-2 ">
          <h1 className="text-[10vw] flex items-center gap-5  h-[6vh] md:h-[8vh] lg:h-[20vh] leading-none font-semibold uppercase overflow-hidden">
            <span className="block revel">Elevate your</span>
            <span className="w-20 h-8 md:w-[20vw] md:h-[6vh] lg:h-[14vh] revel bg-red-400 rounded-full overflow-hidden ">
              <video autoPlay muted loop className="w-full h-full object-cover" src={infovid}></video>
            </span>
          </h1>
          <h1 className="text-[10vw] text-center h-[6vh] md:h-[8vh] lg:h-[20vh] leading-none font-semibold uppercase overflow-hidden">
            <span className="block revel">
              <span>Brand</span>
              <span className="p-4">
                <i className=" ri-arrow-right-up-line text-[8vw] border-2 rounded-full text-[#D6CC53]"></i>
              </span>
              <span>with my</span>
            </span>
          </h1>
          <h1 className="text-[10vw] flex items-center justify-end gap-2 text-end h-[6vh] md:h-[8vh] lg:h-[20vh] leading-none font-semibold uppercase overflow-hidden">
          <span className="w-14 h-8 md:w-[15vw] md:h-[6vh] lg:h-[14vh] revel rounded-full overflow-hidden ">
              <img
                className="w-full h-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1661962968508-94256ea69917?q=80&w=1519&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </span>
            <span className="block revel">creative magic</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Infosection;

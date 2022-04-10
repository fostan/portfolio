import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IoTCard from "../../portfolio-cards/IoTCard";
import CarbonvertCard from "../../portfolio-cards/CarbonvertCard";
import KettleCard from "../../portfolio-cards/KettleCard";
import ElectionEmailCard from "../../portfolio-cards/ElectionEmailCard";
import SmellBetterCard from "../../portfolio-cards/SmellBetterCard";

gsap.registerPlugin(ScrollTrigger);

const TabUX = () => {
  useEffect(() => {
    gsap.to("#carbonvert", {
      y: -25,
      opacity: "1",
      duration: 5,
      scrollTrigger: {
        trigger: "#carbonvert",
        markers: false,
        start: "top bottom",
        end: "top 83%",
        scrub: 1,
      },
    });
    gsap.to("#kettle", {
      y: -25,
      opacity: "1",
      duration: 5,
      scrollTrigger: {
        trigger: "#kettle",
        markers: false,
        start: "top bottom",
        end: "top 83%",
        scrub: 1,
      },
    });
    gsap.to("#smellbetter", {
      y: -25,
      opacity: "1",
      duration: 5,
      scrollTrigger: {
        trigger: "#smellbetter",
        markers: false,
        start: "top bottom",
        end: "top 83%",
        scrub: 1,
      },
    });
    gsap.to("#iot", {
      y: -25,
      opacity: "1",
      duration: 5,
      scrollTrigger: {
        trigger: "#iot",
        markers: false,
        start: "top bottom",
        end: "top 83%",
        scrub: 1,
      },
    });
    gsap.to("#electionEmails", {
      y: -25,
      opacity: "1",
      duration: 5,
      scrollTrigger: {
        trigger: "#electionEmails",
        markers: false,
        start: "top bottom",
        end: "top 83%",
        scrub: 1,
      },
    });
    // gsap.to("#dggt", {
    //   y: -25,
    //   opacity: "1",
    //   duration: 5,
    //   scrollTrigger: {
    //     trigger: "#dggt",
    //     markers: false,
    //     start: "top bottom",
    //     end: "top 83%",
    //     scrub: 1,
    //   },
    // });
  }, []);
  return (
    <div className="grid gap-x-3 md:gap-x-6 gap-y-4 grid-rows-11 grid-cols-2">
      <IoTCard />
      <ElectionEmailCard />
    </div>
  );
};

export default TabUX;

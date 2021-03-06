import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CarbonvertCard from "../../portfolio-cards/CarbonvertCard";
import ElectionEmailCard from "../../portfolio-cards/ElectionEmailCard";
import SmellBetterCard from "../../portfolio-cards/SmellBetterCard";

gsap.registerPlugin(ScrollTrigger);

const TabUI = () => {
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
  }, []);
  return (
    <div className="grid gap-x-3 md:gap-x-6 gap-y-4 grid-rows-8 grid-cols-2">
      <SmellBetterCard />
      <CarbonvertCard />
      <ElectionEmailCard />
    </div>
  );
};

export default TabUI;

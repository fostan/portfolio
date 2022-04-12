import React, { useEffect } from "react";
import { Link } from "gatsby";
import { HiArrowSmRight } from "react-icons/hi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmellBetterCard from "../../portfolio-cards/SmellBetterCard";
import ElectionEmailCard from "../../portfolio-cards/ElectionEmailCard";

gsap.registerPlugin(ScrollTrigger);

const RelatedProjects = () => {
  useEffect(() => {
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
    <section className="bg-gradient-to-tr from-dark  to-black py-20 text-white">
      <div className="container max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
        <div className="md:order-last col-span-2 md:col-span-1 flex justify-center h-full flex-col mb-20 md:mb-0">
          <h2 className="text-7xl font-serif text-white font-black">
            Related
            <br />
            Projects
          </h2>
          <Link
            to="/"
            className="tracking-widest w-fit text-lg group flex items-center gap-1 text-clay hover:text-white transition hover:opacity-75 mt-6"
          >
            Or view all work
            <HiArrowSmRight className="group-hover:translate-x-2 transition opacity-50 group-hover:opacity-100" />
          </Link>
        </div>
        <SmellBetterCard />
        <ElectionEmailCard />
      </div>
    </section>
  );
};

export default RelatedProjects;

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Zoom from "react-medium-image-zoom";
import { StaticImage } from "gatsby-plugin-image";
import "react-medium-image-zoom/dist/styles.css";

gsap.registerPlugin(ScrollTrigger);

const StickyImages = () => {
  useEffect(() => {
    gsap.to("#imageOne", {
      y: 0,
      opacity: "1",
      duration: 5,
      scrollTrigger: {
        trigger: "#imageOne",
        markers: false,
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
    });
    gsap.to("#imageTwo", {
      y: 0,
      opacity: "1",
      duration: 5,
      scrollTrigger: {
        trigger: "#imageTwo",
        markers: false,
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
    });
    gsap.to("#imageThree", {
      y: 0,
      opacity: "1",
      duration: 5,
      scrollTrigger: {
        trigger: "#imageThree",
        markers: false,
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
    });
  }, []);
  return (
    <>
      <section>
        <div className="container max-w-9xl mx-auto grid lg:grid-cols-12 gap-16 relative">
          <div className="bg-[#F5F4EE] w-1/2 h-[110%] absolute top-1/2 left-0 transform  -translate-y-1/2"></div>
          <div className="lg:col-span-5 lg:order-last">
            <div className="sticky top-8">
              <h2 className="mb-4">
                <span className="h3 font-sans">Searching the corpus</span>
                <br />
                <span className="h2">Leave no email unturned</span>
              </h2>
              <p>
                With nearly 1 million emails in the database we created a search
                experience to narrow down specific topics using conditional
                statements while preserving a simple and approachable search
                route for casual users. Using the corpus ourselves, we were also
                able to show trends based on political parties and individual
                senders at a glance.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 gap-8 md:gap-16 lg:gap-24 grid">
            <div className=" translate-y-16 opacity-0" id="imageOne">
              <Zoom>
                <StaticImage
                  placeholder="blurred"
                  src="../../../images/electionemails/screen-1.png"
                  className="mx-auto shadow-md"
                  alt="2020 Election Emails Results"
                  width={1200}
                  height={1050}
                />
              </Zoom>
            </div>
            <div className=" translate-y-16 opacity-0" id="imageTwo">
              <Zoom>
                <StaticImage
                  placeholder="blurred"
                  src="../../../images/electionemails/screen-2.png"
                  className="mx-auto shadow-md"
                  alt="2020 Election Emails detailed email view"
                  width={1200}
                  height={834}
                />
              </Zoom>
            </div>
            <div className=" translate-y-16 opacity-0" id="imageThree">
              <Zoom>
                <StaticImage
                  placeholder="blurred"
                  src="../../../images/electionemails/screen-3.png"
                  className="mx-auto shadow-md"
                  alt="2020 Election Emails Senders Page"
                  width={1200}
                  height={830}
                />
              </Zoom>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StickyImages;

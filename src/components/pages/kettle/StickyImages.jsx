import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { StaticImage } from "gatsby-plugin-image";

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
          <div className="bg-[#F8F8F8] w-1/2 h-[110%] absolute top-1/2 left-0 transform  -translate-y-1/2"></div>
          <div className="lg:col-span-5 lg:order-last">
            <div className="sticky top-8">
              <h2 className="mb-4">
                <span className="h3 font-sans font-sans">
                  Scroll based spritesheet animations
                </span>
                <br />
                <span className="h2">In sprite of it all</span>
              </h2>
              <p>
                The animation on the technology page is controlled in a slightly
                different manner. While still based on user scroll position, the
                animation playing is a frame by frame export of an animated
                video, compiled into a spritesheet and repositioned behind a
                canvas as a way to not only interact with the content, but
                minimize file size.
              </p>
              <p className="text-sm text-gray-500 tracking-wide">
                Design & Animation: Shelly Robinson & Fola Akinola
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 gap-8 md:gap-16 lg:gap-24 grid">
            <div className=" translate-y-16 opacity-0" id="imageOne">
              <Zoom>
                <StaticImage
                  src="../../../images/kettle/image-1.png"
                  className="mx-auto shadow-md"
                  alt="A screenshot of the Kettle website"
                  width="1206"
                  height="638"
                />
              </Zoom>
            </div>
            <div className="translate-y-16 opacity-0" id="imageTwo">
              <Zoom>
                <StaticImage
                  src="../../../images/kettle/image-2.png"
                  className="mx-auto shadow-md"
                  alt="A screenshot of the Kettle website"
                  width="1206"
                  height="616"
                />
              </Zoom>
            </div>
            <div className="translate-y-16 opacity-0" id="imageThree">
              <Zoom>
                <StaticImage
                  src="../../../images/kettle/image-3.png"
                  className="mx-auto shadow-md"
                  alt="A screenshot of the Kettle website"
                  width="1206"
                  height="612"
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

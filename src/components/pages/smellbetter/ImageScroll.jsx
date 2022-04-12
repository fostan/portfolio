import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

gsap.registerPlugin(ScrollTrigger);

const ImageScroll = () => {
  useEffect(() => {
    gsap.to("#imageOne", {
      y: 55,
      opacity: "1",
      duration: 5,
      scrollTrigger: {
        trigger: "#imageOne",
        markers: false,
        start: "top 90%",
        end: "bottom 10%",
        scrub: 1,
      },
    });
  }, []);
  return (
    <>
      <section>
        <div className="container max-w-6xl mx-auto flex justify-center flex-col relative">
          <div className="bg-[#EFF3F5] w-1/2 h-full absolute top-1/2 left-0 transform  -translate-y-1/2"></div>
          <div className="grid">
            <Zoom>
              <img
                src="/images/carbonvert/image-6.png"
                className="mx-auto shadow-md"
                alt="A collage of screenshots of the carbonvert website"
                id="imageOne"
                width="815"
                height="486"
              />
            </Zoom>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageScroll;

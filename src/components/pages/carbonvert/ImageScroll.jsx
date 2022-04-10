import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

gsap.registerPlugin(ScrollTrigger);

const ImageScroll = () => {
  useEffect(() => {
    gsap.to("#imageOne", {
      y: "100px",
      opacity: "1",
      duration: 5,
      scrollTrigger: {
        trigger: "#imageOne",
        markers: true,
        start: "top 90%",
        end: "bottom 10%",
        scrub: 1,
      },
    });
  }, []);
  return (
    <>
      <section className="py-20">
        <div className="container max-w-7xl mx-auto flex justify-center flex-col relative">
          <div className="bg-red-100 w-10/12 h-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <Zoom>
            <img
              src="/images/carbonvert/carbonvert-screens-1.webp"
              className="mx-auto"
              alt="A collage of screenshots of the carbonvert website"
              id="imageOne"
              width="1100"
              height="932"
            />
          </Zoom>
        </div>
      </section>
      <section>
        <img
          src="/images/carbonvert/carbonvert-screens-2.webp"
          className="mx-auto my-16 lg:my-28"
          alt="An illustration of a CO2 well and rock layers"
          width="698"
          height="581"
        />
        <img
          src="/images/carbonvert/carbonvert-screens-3.webp"
          className="mx-auto"
          alt="A collage of screenshots of the carbonvert website"
          width="1006"
          height="1046"
        />
      </section>
    </>
  );
};

export default ImageScroll;

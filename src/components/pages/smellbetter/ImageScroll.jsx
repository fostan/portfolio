import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { StaticImage } from "gatsby-plugin-image";

gsap.registerPlugin(ScrollTrigger);

const ImageScroll = () => {
  useEffect(() => {
    gsap.to("#imageOne", {
      y: 0,
      opacity: "1",
      duration: 5,
      scrollTrigger: {
        trigger: "#imageOne",
        markers: false,
        start: "top 90%",
        end: "top center",
        scrub: 1,
      },
    });
  }, []);
  return (
    <>
      <section>
        <div className="container max-w-6xl mx-auto flex justify-center flex-col relative">
          <div className="bg-[#EFF3F5] w-2/3 h-full absolute top-1/2 left-0 transform  -translate-y-1/2"></div>
          <div className="grid">
            <div
              className=" translate-y-16 opacity-0 md:ml-16 pt-16"
              id="imageOne"
            >
              <Zoom>
                <StaticImage
                  placeholder="blurred"
                  src="../../../images/smellbetter/image-1.png"
                  className="mx-auto"
                  alt="A collage of screenshots of the carbonvert website"
                  id="imageOne"
                  width={1906}
                  height={1258}
                />
              </Zoom>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageScroll;

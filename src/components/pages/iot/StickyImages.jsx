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
    gsap.to("#imageFour", {
      y: 0,
      opacity: "1",
      duration: 5,
      scrollTrigger: {
        trigger: "#imageFour",
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
          <div className="bg-[#F3F4F6] w-full lg:w-1/2 h-3/4 lg:h-[110%] absolute top-1/2 left-0 transform  -translate-y-1/2"></div>
          <div className="lg:col-span-5 lg:order-last">
            <div className="sticky top-8">
              <h2 className="mb-4">
                <span className="h3 font-sans">Research as a service</span>
                <br />
                <span className="h2">Thank you for sharing</span>
              </h2>
              <p>
                Most of the connections our smart devices make are obscured
                (because they’re not meant to be consumer facing). By scanning
                your own network and helping label your own devices, you
                contribute to an index of IoT smart devices users across the
                globe can use for their own privacy. Incentivizing users to
                share their data was achieved through color pattern
                reinforcement and an achievement system along with a robust
                onboarding process.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 gap-8 md:gap-16 lg:gap-24 grid">
            <div className=" translate-y-16 opacity-0" id="imageOne">
              <Zoom>
                <StaticImage
                  src="../../../images/iot/iot-screen-1.png"
                  className="mx-auto shadow-md w-full"
                  alt="Screen shots from the IoT Inspector"
                  width="1198"
                  height="666"
                />
              </Zoom>
            </div>
            <div className=" translate-y-16 opacity-0" id="imageTwo">
              <Zoom>
                <StaticImage
                  src="../../../images/iot/iot-screen-2.png"
                  className="mx-auto shadow-md"
                  alt="Screen shots from the IoT Inspector"
                  width="1198"
                  height="666"
                />
              </Zoom>
            </div>
            <div className=" translate-y-16 opacity-0" id="imageThree">
              <Zoom>
                <StaticImage
                  src="../../../images/iot/iot-screen-3.png"
                  className="mx-auto shadow-md"
                  alt="Screen shots from the IoT Inspector"
                  width="1198"
                  height="670"
                />
              </Zoom>
            </div>
            <div className=" translate-y-16 opacity-0" id="imageFour">
              <Zoom>
                <StaticImage
                  src="../../../images/iot/iot-screen-4.png"
                  className="mx-auto shadow-md"
                  alt="Screen shots from the IoT Inspector"
                  width="1198"
                  height="668"
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

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
    gsap.to("#imageTwo", {
      y: 0,
      opacity: "1",
      duration: 5,
      scrollTrigger: {
        trigger: "#imageTwo",
        markers: false,
        start: "top 90%",
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
        start: "top 90%",
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
        start: "top 90%",
        end: "top center",
        scrub: 1,
      },
    });
    gsap.to("#imageFive", {
      y: 0,
      opacity: "1",
      duration: 5,
      scrollTrigger: {
        trigger: "#imageFive",
        markers: false,
        start: "top 90%",
        end: "top center",
        scrub: 1,
      },
    });
    gsap.to("#imageSix", {
      y: 0,
      opacity: "1",
      duration: 5,
      scrollTrigger: {
        trigger: "#imageSix",
        markers: false,
        start: "top 90%",
        end: "top center",
        scrub: 1,
      },
    });
  }, []);
  return (
    <>
      <section className="py-20">
        <div className="container max-w-7xl mx-auto flex justify-center flex-col relative">
          <div className="bg-[#F5F5F5] w-10/12 h-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div
              className="flex justify-center translate-y-16 opacity-0"
              id="imageOne"
            >
              <Zoom>
                <StaticImage
                  placeholder="blurred"
                  src="../../../images/carbonvert/image-1.png"
                  className="mx-auto shadow-md"
                  alt="A collage of screenshots of the carbonvert website"
                  width={367}
                  height={787}
                />
              </Zoom>
            </div>
            <div className="translate-y-16 opacity-0" id="imageTwo">
              <Zoom>
                <StaticImage
                  placeholder="blurred"
                  src="../../../images/carbonvert/image-2.png"
                  className="mx-auto shadow-md md:mt-16"
                  alt="A collage of screenshots of the carbonvert website"
                  width={608}
                  height={734}
                />
              </Zoom>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className=" translate-y-16 opacity-0" id="imageThree">
            <Zoom>
              <StaticImage
                placeholder="blurred"
                src="../../../images/carbonvert/image-3.png"
                className="mx-auto shadow-md md:mt-16"
                alt="A collage of screenshots of the carbonvert website"
                width={319}
                height={492}
              />
            </Zoom>
          </div>
          <div className=" translate-y-16 opacity-0" id="imageFour">
            <Zoom>
              <StaticImage
                placeholder="blurred"
                src="../../../images/carbonvert/image-4.png"
                className="mx-auto shadow-md"
                alt="A collage of screenshots of the carbonvert website"
                width={319}
                height={492}
              />
            </Zoom>
          </div>
        </div>
      </section>
      <section>
        <div className="container max-w-7xl mx-auto flex justify-center flex-col relative">
          <div className="bg-[#F5F5F5] w-10/12 h-3/4  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-16">
            <div className="md:col-start-2 md:col-span-5 flex justify-center ">
              <div className=" translate-y-16 opacity-0" id="imageFive">
                <Zoom>
                  <StaticImage
                    placeholder="blurred"
                    src="../../../images/carbonvert/image-6.png"
                    className="mx-auto shadow-md"
                    alt="A collage of screenshots of the carbonvert website"
                    width={815}
                    height={486}
                  />
                </Zoom>
              </div>
            </div>
            <div className=" md:col-span-5 flex justify-center">
              <div className=" translate-y-16 opacity-0" id="imageSix">
                <Zoom>
                  <StaticImage
                    placeholder="blurred"
                    src="../../../images/carbonvert/image-5.png"
                    className="mx-auto shadow-md md:col-span-5"
                    alt="A collage of screenshots of the carbonvert website"
                    width={763}
                    height={497}
                  />
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageScroll;

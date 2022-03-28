import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { parse } from "postcss";
import parse from "html-react-parser";

gsap.registerPlugin(ScrollTrigger);

const WebMockupScroll = ({ content }) => {
  const {
    accentColor2,
    lightColor,
    folderString,
    webTitle,
    webHTML,
    webSubtitle,
  } = content;

  const canvasRef = useRef(null);

  useEffect(() => {
    const el = canvasRef.current;
    const context = el.getContext("2d");
    // maybe need to bring in slug and folder dir to set this dynamically
    const framesDir = `/images/${folderString}`;

    canvasRef.current.width = 700;
    // canvasRef.current.height = 900;
    const heightRatio = 0.5625;
    canvasRef.current.height = canvasRef.current.width * heightRatio;

    const frameCount = 104;
    const currentFrame = (index) =>
      `${framesDir}/${(index + 1).toString()}.webp`;

    const images = [];
    const screen = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    gsap.to(screen, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: "#canvasWrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 0,
      },
      onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
    });

    images[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvasRef.width, canvasRef.height);
      context.drawImage(images[screen.frame], 0, 0);
    }
  }, []);

  return (
    <section className={`py-20 md:py-0 bg-[${lightColor}]`}>
      <div className="container mx-auto max-w-7xl grid md:grid-cols-3 gap-8 relative">
        <div className="relative mb-[100px] md:mb-0">
          <div className="md:sticky top-0 md:h-screen min-h-fit">
            <div className="flex flex-col justify-center md:h-screen">
              <h2 className="mb-4">
                <span className="h3">{webSubtitle}</span>
                <br />
                <span className="h2">{webTitle}</span>
              </h2>
              {parse(webHTML)}
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          {/* set canvas wrapper height based on length of webpage scroll */}
          <div id="canvasWrapper" className="relative col-span-2">
            <div className="sticky top-1/4 md:top-0 flex flex-col justify-center md:h-screen min-h-fit">
              <div
                className={`bg-[${accentColor2}] -rotate-6 md:rotate-0 h-[295px] w-full md:h-5/6 md:w-5/6 lg:w-3/4 right-0 absolute rounded-sm shadow-100`}
              ></div>
              <div className={`device-mockup`}>
                <canvas ref={canvasRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebMockupScroll;

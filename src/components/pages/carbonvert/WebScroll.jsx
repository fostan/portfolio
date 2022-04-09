import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WebScroll = () => {
  const frames = 239;

  const canvasRef = useRef(null);

  useEffect(() => {
    const el = canvasRef.current;
    const context = el.getContext("2d");
    const framesDir = "/images/carbonvert/website";

    canvasRef.current.width = 800;
    const heightRatio = 0.5625;
    canvasRef.current.height = canvasRef.current.width * heightRatio;

    const frameCount = frames;
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
    <section className="py-20 md:py-0 bg-gradient-to-tl from-[#40CAD9] to-[#B7EDF3]">
      <div className="mx-auto max-w-9xl hidden md:grid md:grid-cols-7 gap-8 relative">
        <div className="col-span-4 order-last">
          <div id="canvasWrapper" className="relative col-span-2 ">
            <div className="sticky top-[50px] md:top-0  md:h-screen min-h-fit w-screen md:w-auto grid items-center justify-start ">
              <div className="device-mockup">
                <canvas ref={canvasRef} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 relative mb-[100px] md:mb-0  px-4">
          <div className="md:sticky top-0 md:h-screen min-h-fit lg:w-[350px] mx-auto">
            <div className="flex flex-col justify-center md:h-screen">
              <h2 className="mb-4">
                <span className="h3">Web Design Refresh</span>
                <br />
                <span className="h2">A carbon first</span>
              </h2>
              <p>
                The website was a perfect launching point to not only explore an
                expansion of the brand, but also revisit aspects that weren't
                delivering Carbonvert’s messaging. With a refreshed color
                pallet, type styles, and a custom set of icons and
                illustrations, the brand was ready to be applied to investment
                decks, presentations, and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebScroll;

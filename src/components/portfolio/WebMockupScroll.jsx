import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WebMockupScroll = ({ content }) => {
  const { accentColor2, lightColor } = content;

  const canvasRef = useRef(null);

  useEffect(() => {
    const el = canvasRef.current;
    const context = el.getContext("2d");
    // maybe need to bring in slug and folder dir to set this dynamically
    const framesDir = "/images/webScroll";

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
        <div className="relative">
          <div className="md:sticky top-0 md:h-screen min-h-fit">
            <div className="flex flex-col justify-center md:h-screen">
              <h2 className="mb-4">
                <span className="h3">Web design Refresh</span>
                <br />
                <span className="h2">The New Identity Politics</span>
              </h2>
              <p>
                In addition to improving the database UX, we refreshed the
                visual design site wide to a politically-inclusive palette with
                minimal distraction from the heart of our content. This refresh
                included the creation of different charts, data visualizations,
                and infographics.
              </p>
              <p>
                While the project scope did not include a brand identity
                creation, we developed a brand system to extend across other
                election years and research topics for the Princeton Team to
                continue their research.
              </p>
            </div>
          </div>
        </div>
        {/* before:-z-1  before:content-[''] before:absolute before:w-full before:md:w-1/2 before:h-full  before:bg-[${accentColor}] before:top-1/2 before:right-0 before:transform  before:-translate-y-1/2 */}
        {/* <div className="container bg-red-500 h-1/2 w-1/2  right-0 top-1/3 absolu"></div> */}
        <div className="md:col-span-2">
          {/* set canvas wrapper height based on length of webpage scroll */}
          <div id="canvasWrapper" className="relative col-span-2">
            <div className="sticky top-1/4 md:top-0 flex flex-col justify-center md:h-screen min-h-fit">
              <div
                className={`bg-[${accentColor2}] h-5/6 w-3/4 right-0 absolute rounded-sm shadow-100`}
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

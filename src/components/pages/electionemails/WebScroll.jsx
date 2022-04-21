import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image";
import { MdSwipe } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const WebScroll = () => {
  const frames = 126;

  const canvasRef = useRef(null);

  useEffect(() => {
    const el = canvasRef.current;
    const context = el.getContext("2d");
    const framesDir = "/images/election-emails/web";

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
    <section className="py-20 md:py-0 bg-gradient-to-tl from-[#CBC9BC] to-[#F5F4EE]">
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
                <span className="uppercase text-sm font-sans tracking-widest font-bold">
                  Web Design Refresh
                </span>
                <br />
                <span className="h2">The New Identity Politics</span>
              </h2>
              <p>
                While improving the database UX, we refreshed the visual design
                to a politically inclusive palette with minimal distraction from
                the heart of our content. This refresh included the creation of
                different charts, data visualizations, and infographics.{" "}
              </p>
              <p>
                A brand system was developed to extend across other election
                years and research topics for the Princeton Team to continue
                their research with.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden px-4">
        <div className="flex flex-col justify-center md:h-screen gap-8">
          <h2>
            <span className="h3 font-sans">Web Design Refresh</span>
            <br />
            <span className="h2">The New Identity Politics</span>
          </h2>
          <p className="w-10/12">
            While improving the database UX, we refreshed the visual design to a
            politically inclusive palette with minimal distraction from the
            heart of our content. This refresh included the creation of
            different charts, data visualizations, and infographics.{" "}
          </p>
          <p>
            A brand system was developed to extend across other election years
            and research topics for the Princeton Team to continue their
            research with.
          </p>
          <StaticImage
            placeholder="blurred"
            // TODO SWAP IMAGE
            src="../../../images/carbonvert/web-screen.png"
            className="w-full"
            alt="A screenshot of the website after it has been redesigned"
          />
          <div className="mx-auto flex flex-col items-center">
            <MdSwipe className="rotate-90 opacity-80" />
            <span className="text-sm text-center text-neutral-600">
              Scroll to see more
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebScroll;

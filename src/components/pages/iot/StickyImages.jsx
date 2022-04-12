import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
                <span className="h3">Research as a service</span>
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
                <img
                  src="/images/carbonvert/image-6.png"
                  className="mx-auto shadow-md"
                  alt="A collage of screenshots of the carbonvert website"
                  width="815"
                  height="486"
                />
              </Zoom>
            </div>
            <div className=" translate-y-16 opacity-0" id="imageTwo">
              <Zoom>
                <img
                  src="/images/carbonvert/image-6.png"
                  className="mx-auto shadow-md"
                  alt="A collage of screenshots of the carbonvert website"
                  width="815"
                  height="486"
                />
              </Zoom>
            </div>
            <div className=" translate-y-16 opacity-0" id="imageThree">
              <Zoom>
                <img
                  src="/images/carbonvert/image-6.png"
                  className="mx-auto shadow-md"
                  alt="A collage of screenshots of the carbonvert website"
                  width="815"
                  height="486"
                />
              </Zoom>
            </div>
            <div className=" translate-y-16 opacity-0" id="imageFour">
              <Zoom>
                <img
                  src="/images/carbonvert/image-6.png"
                  className="mx-auto shadow-md"
                  alt="A collage of screenshots of the carbonvert website"
                  width="815"
                  height="486"
                />
              </Zoom>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-20">
      <div className="container mx-auto max-w-9xl grid lg:grid-cols-12 gap-16 relative">
        <div className="lg:col-span-5 lg:order-last">
          <div className="sticky top-8">
            <h2 className="mb-4">
              <span className="h3">Searching the corpus</span>
              <br />
              <span className="h2">Leave no email unturned</span>
            </h2>
            <p>
              With nearly 1 million emails in the database we created a search
              experience to narrow down specific topics using conditional
              statements while preserving a simple and approachable search route
              for casual users. Using the corpus ourselves, we were also able to
              show trends based on political parties and individual senders at a
              glance.
            </p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <img
            src="images/election-emails/election-email-screens.webp"
            className="w-full h-auto"
            width="400px"
            height="1000px"
            alt="Additional website and application screens demonstrating features"
          />
        </div>
      </div>
    </section> */}
    </>
  );
};

export default StickyImages;

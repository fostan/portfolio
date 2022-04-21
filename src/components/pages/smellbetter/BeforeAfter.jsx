import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const BeforeAfter = () => {
  return (
    <section className="py-20 relative">
      <div
        className={`w-4 h-1/2 hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      ></div>
      <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-24 md:gap-8">
        <div className="flex flex-col items-center">
          <span className="text-neutral-800 text-5xl lg:text-7xl font-serif font-black">
            Before
          </span>
          <StaticImage
            placeholder="blurred"
            src="../../../images/smellbetter/smellbetter-before.png"
            className="w-full"
            alt="A screenshot of the website before it has been redesigned"
          />
        </div>

        <div className="flex flex-col items-center md:mt-40">
          <span className="text-neutral-800 text-5xl lg:text-7xl font-serif font-black">
            After
          </span>
          <StaticImage
            placeholder="blurred"
            src="../../../images/smellbetter/smellbetter-after.png"
            className="w-full"
            alt="A screenshot of the website after it has been redesigned"
          />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

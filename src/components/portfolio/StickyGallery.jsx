import React from "react";
import parse from "html-react-parser";

const StickyGallery = ({ images }) => {
  const {
    additionalScreens,
    additionalTitle,
    additionalSubTitle,
    additionalHTML,
  } = images;
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-9xl grid lg:grid-cols-12 gap-16 relative">
        <div className="lg:col-span-5 lg:order-last">
          <div className="sticky top-8">
            <h2 className="mb-4">
              <span className="h3 font-sans">{additionalTitle}</span>
              <br />
              <span className="h2">{additionalSubTitle}</span>
            </h2>
            {parse(additionalHTML)}
          </div>
        </div>
        <div className="lg:col-span-7">
          <img
            src={additionalScreens}
            className="w-full h-auto"
            width="400px"
            height="1000px"
            alt="Additional website and application screens demonstrating features"
          />
        </div>
      </div>
    </section>
  );
};

export default StickyGallery;

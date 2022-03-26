import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const StickyGallery = ({ images }) => {
  const { additionalScreens } = images;
  return (
    <section className="py-20">
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
              for casual users. Using the corpus ourselves, we are also able to
              show trends based on political parties and individual senders at a
              glance.
            </p>
          </div>
        </div>
        <div className="lg:col-span-7">
          {/* <StaticImage
            src={additionalScreens}
            className="w-full h-auto"
            alt="A dinosaur"
            width={200}
            height={200}
          /> */}
          <img src={additionalScreens} className="w-full h-auto" alt="" />
        </div>
      </div>
    </section>
  );
};

export default StickyGallery;

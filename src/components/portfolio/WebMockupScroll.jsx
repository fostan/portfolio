import React from "react";

const WebMockupScroll = () => {
  return (
    <section className="py-20 bg-[#F5F4EE] flex">
      <div className="container mx-auto max-w-7xl grid md:grid-cols-3">
        <div className="flex flex-col justify-center">
          <h2 className="mb-4">
            <span className="h3">Web design Refresh</span>
            <br />
            <span className="h2">The New Identity Politics</span>
          </h2>
          <p>
            In addition to improving the database UX, we refreshed the visual
            design site wide to a politically-inclusive palette with minimal
            distraction from the heart of our content. This refresh included the
            creation of different charts, data visualizations, and infographics.
          </p>
          <p>
            While the project scope did not include a brand identity creation,
            we developed a brand system to extend across other election years
            and research topics for the Princeton Team to continue their
            research.
          </p>
        </div>
        <div className="md:grid-span-2"></div>
      </div>
    </section>
  );
};

export default WebMockupScroll;

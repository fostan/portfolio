import React from "react";
import parse from "html-react-parser";

const VideoFeature = ({ content }) => {
  const {
    darkColor,
    accentColor,
    videoFeatureTitle,
    videoFeatureSubTitle,
    videoFeatureHTML,
  } = content;

  return (
    <section
      className={`bg-[${darkColor}] py-20 lg:py-40 border-t-8 border-[${accentColor}] flex`}
    >
      <div className="container mx-auto max-w-5xl gap-8 grid md:grid-cols-2 ">
        <div className="md:order-last flex flex-col justify-center text-gray-200">
          <h2 className="mb-4 ">
            <span className="h3">{videoFeatureTitle}</span>
            <br />
            <span className="h2 !text-white">{videoFeatureSubTitle}</span>
          </h2>
          {parse(videoFeatureHTML)}
        </div>
        <div className="flex justify-center">
          {/* <video src=""></video> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NpEaa2P7qZI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoFeature;

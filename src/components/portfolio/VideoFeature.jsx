import React from "react";

const VideoFeature = () => {
  return (
    <section className="bg-[#1F1D1D] py-20 border-t-8 border-[#AD3F31]  flex">
      <div className="container mx-auto max-w-7xl grid md:grid-cols-3">
        <div className="text-[#FFFFFF]  md:order-last flex flex-col justify-center">
          <h2 className="mb-4">
            <span className="h3">Manipulative Tactics</span>
            <br />
            <span className="h2">A vote for education</span>
          </h2>
          <p>
            The researchers discovered dark UX patterns present in nearly half
            of all emails they received throughout the 2020 election. These
            ranged from forged replies to fake counters, meant to trick users
            into responding and sending money to campaigns and other political
            entities. In addition to searching the database, it was also
            imperative to educate users on these manipulations and teach them
            how to spot these tactics themselves.
          </p>
        </div>
        <div className="md:col-span-2">
          <video src=""></video>
        </div>
      </div>
    </section>
  );
};

export default VideoFeature;

import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { RiExternalLinkFill } from "react-icons/ri";

const ProjectIntro = () => {
  return (
    <>
      <section className="bg-gradient-to-tl from-[#16262F] to-[#273B46]">
        <div className="max-w-6xl px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 mx-auto">
          <div className="flex gap-4 flex-col justify-center text-light">
            <h1 className="text-white">Heaven Scent</h1>
            <a
              href="https://smellbetterhawaii.com/"
              className="text-sm text-gray-300/80 flex gap-1 items-center hover:opacity-50 transition w-fit"
              target="_blank"
              rel="noreferrer"
            >
              SmellBetter Hawai'i
              <RiExternalLinkFill />
            </a>
            <hr />
            <dl className="grid grid-cols-2">
              <dt className="col-span-2 h4">Role</dt>
              <dd className="text-gray-300/80">U/I design</dd>
              <dd className="text-gray-300/80">Front-end development</dd>
            </dl>
            <dl className="grid grid-cols-2">
              <dt className="col-span-2 h4">Team</dt>
              <dd className="text-gray-300/80">Nick Krusik</dd>
              <dd className="text-gray-300/80">Micheal Nieling</dd>
            </dl>
          </div>
          <div className="-mb-[6rem] md:-mb-[16rem]">
            <StaticImage
              src="../../../images/smellbetter/feature.png"
              className="w:3/4 h:auto h-/4 md:w-full md:h-full shadow-md"
              alt=""
              role="presentation"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <h2>SmellBetter Hawai'i Website</h2>
          <p>
            Based in Hawaii, the SmellBetter Hawai’i team needed a new marketing
            site that properly communicated their story as they grew their scent
            branding business to Hawaiian luxury hotels and beyond. This
            required extending the SmellBetter design system beyond print and
            agile communication during SmellBetter’s quick pivot to sanitization
            services during the Covid-19 pandemic.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProjectIntro;

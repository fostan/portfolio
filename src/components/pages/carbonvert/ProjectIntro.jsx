import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ProjectIntro = () => {
  return (
    <>
      <section className="bg-gradient-to-tl from-[#151213] to-[#342F30]">
        <div className="max-w-6xl px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 mx-auto">
          <div className="flex gap-4 flex-col justify-center text-light">
            <h1 className="text-white">
              A down to
              <br />
              Earth solution
            </h1>
            <a
              href="https://carbonvert.com/"
              className="text-sm text-clay"
              target="_blank"
              rel="noreferrer"
            >
              Carbonvert
            </a>
            <hr />
            <dl className="grid grid-cols-2">
              <dt className="col-span-2 h4">Role</dt>
              <dd>U/I design</dd>
              <dd>Front-end development</dd>
            </dl>
            <dl className="grid grid-cols-2">
              <dt className="col-span-2 h4">Team</dt>
              <dd>Abby Ruminski</dd>
              <dd>Micheal Nieling</dd>
            </dl>
          </div>
          <div className="-mb-[6rem] md:-mb-[16rem]">
            <StaticImage
              src="../../../images/feature.jpg"
              className="w:3/4 h:auto h-/4 md:w-full md:h-full shadow-md"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <h2>Carbonvert Website</h2>
          <p>
            Carbonvert develops the world’s largest carbon capture & storage
            projects. With the announcement of the largest CO2 storage facility
            in the world, they were in need of a fresh update to their website.
            In addition to showcasing their expertise in carbon storage, the
            Carbonvert website needed to educate users on tax credits and create
            financial incentives for companies to invest in carbon
            sequestration.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProjectIntro;

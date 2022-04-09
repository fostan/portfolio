import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ProjectIntro = () => {
  return (
    <section className="">
      <div className="max-w-6xl px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 mx-auto">
        <div className="flex gap-4 flex-col justify-center">
          <h1>A down to Earth solution</h1>
          <a href="https://carbonvert.com/" target="_blank" rel="noreferrer">
            Carbonvert
          </a>
          <hr />
          <dl className="grid grid-cols-2">
            <dt className="col-span-2">Role</dt>
            <dd>U/I design</dd>
            <dd>Front-end development</dd>
          </dl>
          <dl className="grid grid-cols-2">
            <dt className="col-span-2">Team</dt>
            <dd>Abby Ruminski</dd>
            <dd>Micheal Nieling</dd>
          </dl>
        </div>
        <div className="-mb-[8rem]">
          <StaticImage
            src="../../images/icon.png"
            className="w-full h-full shadow-md"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;

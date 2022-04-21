import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { RiExternalLinkFill } from "react-icons/ri";

const ProjectIntro = () => {
  return (
    <>
      <section className="bg-gradient-to-tl from-[#A53D54] to-[#C24E67]">
        <div className="max-w-6xl px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 mx-auto">
          <div className="flex gap-4 flex-col justify-center text-light">
            <h1 className="text-white">A.I. Disaster Prevention</h1>
            <a
              href="https://ourkettle.com/"
              className="text-sm text-white-80 flex gap-1 items-center hover:opacity-50 transition w-fit"
              target="_blank"
              rel="noreferrer"
            >
              Kettle Reinsurance
              <RiExternalLinkFill />
            </a>
            <hr />
            <dl className="grid grid-cols-2">
              <dt className="col-span-2 h4">Role</dt>
              <dd className="text-white/60">Front-end development</dd>
            </dl>
            <dl className="grid grid-cols-2">
              <dt className="col-span-2 h4">Team</dt>
              <dd className="text-white/60">Shelly Robinson</dd>
              <dd className="text-white/60">Fola Akinola</dd>
              <dd className="text-white/60">Abby Ruminski</dd>
              <dd className="text-white/60">Tom Beck</dd>
            </dl>
          </div>
          <div className="-mb-[6rem] md:-mb-[16rem]">
            <StaticImage
              placeholder="blurred"
              src="../../../images/kettle/feature.png"
              className="w:3/4 h:auto h-/4 md:w-full md:h-full shadow-md"
              alt=""
              role="presentation"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <h2>Kettle Reinsurance</h2>
          <p>
            Kettle is a reinsurance tool utilizing machine learning to mitigate
            catastrophic risk in the midst of global warming. Their first
            product, Cat Strip, has an industry leading 89% prediction success
            rate predicting wildfire damages in the state of California and
            deserved an equally as impressive internet debut. The design team
            had an impressive vision highlighting Kettle’s impressive numbers
            with stunning visuals and animations that would certainly set Kettle
            apart.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProjectIntro;

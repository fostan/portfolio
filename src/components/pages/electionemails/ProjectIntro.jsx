import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { RiExternalLinkFill } from "react-icons/ri";

const ProjectIntro = () => {
  return (
    <>
      <section className="bg-gradient-to-tl from-[#1F1D1D] to-[#312E2E]">
        <div className="max-w-6xl px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 mx-auto">
          <div className="flex gap-4 flex-col justify-center text-light">
            <h1 className="text-white">A new look at the 2020 election</h1>
            <a
              className="text-sm text-gray-300/40 flex gap-1 items-center  transition w-fit"
              target="_blank"
              rel="noreferrer"
            >
              2020 Election Emails • Coming Soon
              {/* <RiExternalLinkFill /> */}
            </a>
            <hr />
            <dl className="grid grid-cols-2">
              <dt className="col-span-2 h4">Role</dt>
              <dd className="text-gray-300/80">U/I design</dd>
              <dd className="text-gray-300/80">User experience</dd>
              <dd className="text-gray-300/80">Front-end development</dd>
            </dl>
            <dl className="grid grid-cols-2">
              <dt className="col-span-2 h4">Team</dt>
              <dd className="text-gray-300/80">Abby Ruminski</dd>
              <dd className="text-gray-300/80">Tom Beck</dd>
              <dd className="text-gray-300/80">Cody Nicoll</dd>
            </dl>
          </div>
          <div className="-mb-[6rem] md:-mb-[16rem]">
            <StaticImage
              src="../../../images/electionemails/feature.png"
              className="w:3/4 h:auto h-/4 md:w-full md:h-full shadow-md"
              alt=""
              role="presentation"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <h2>2020 Election Emails</h2>
          <p>
            The teams at Princeton University and The Center for Information
            Technology Policy have amassed a corpus of nearly a million emails
            from candidates and organizations running for office in 2020. This
            catalog on its own is dense and difficult to parse through unless
            one knows specifically what they’re searching for.
          </p>
          <p>
            We set out to not only improve the email-hunting experience, but
            create added value in educating users about the findings as a whole
            with interactive data visualizations & infographics. In addition, we
            created an extendable design system to implement as research
            continues throughout other election cycles.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProjectIntro;

import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ProjectIntro = () => {
  return (
    <>
      <section className="bg-gradient-to-tl from-[#03030F] to-[#090926]">
        <div className="max-w-6xl px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 mx-auto">
          <div className="flex gap-4 flex-col justify-center text-light">
            <h1 className="text-white">Who are your devices talking to?</h1>
            <button
              className="text-sm text-gray-300/40 flex gap-1 items-center  transition w-fit"
              target="_blank"
              rel="noreferrer"
            >
              Consumer Reports IoT Inspector • Coming Soon
              {/* <RiExternalLinkFill /> */}
            </button>
            <hr />
            <dl className="grid grid-cols-2">
              <dt className="col-span-2 h4">Role</dt>
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
              placeholder="blurred"
              src="../../../images/iot/iot-feature.png"
              className="w:3/4 h:auto h-/4 md:w-full md:h-full shadow-md"
              alt=""
              role="presentation"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <h2>
            Consumer Reports'
            <br />
            'Internet of Things' Inspector
          </h2>
          <p>
            In a world where everything is connected to the internet, it’s
            becoming more and more difficult to control your own data. The
            Princeton/NYU & Consumer Reports teams needed a brand new front-end
            experience for their Internet of Things inspector app to put that
            power back in users’ hands. First, they needed to rethink their user
            experience, and with some exciting new features on the way, we
            introduced some brand new concepts to help collect user research.
          </p>
          <p>
            The IoT inspector allows users to actually see the location of
            connections their smart devices are making. Users will be able to
            monitor data usage, block specific connections, and contribute data
            to the global network, creating a more private ‘Internet of Things’
            for everyone.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProjectIntro;

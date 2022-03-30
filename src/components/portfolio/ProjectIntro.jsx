import React from "react";
import parse from "html-react-parser";

const ProjectIntro = ({ content }) => {
  const {
    darkColor,
    client,
    tagline,
    role,
    team,
    objectiveHTML,
    featuredImage,
    folderString,
  } = content;
  return (
    <>
      <section className={`pt-20 bg-[${darkColor}] relative`}>
        <div className="bg-white absolute bottom-0 h-20 w-full"></div>
        <div className="container max-w-4xl mx-auto text-[#FFFFFF]">
          <h1>{tagline}</h1>
          <hr className="my-4 opacity-10" />
          <div className="grid grid-cols-2 md:grid-cols-3 my-6 ">
            <div className="col-span-2 md:col-span-1 mb-4">
              <ul className="grid grid-cols-2 md:grid-cols-1 mb-4 md:mb-0">
                <li className="uppercase py-1 tracking-wider text-sm col-span-2 md:col-span-1">
                  Client
                </li>
                <li className="text-xs py-1 opacity-70">
                  {client.clientProject}
                </li>
                <li className="text-xs py-1 opacity-70">{client.clientName}</li>
              </ul>
            </div>
            <div className="md:flex md:flex-col md:items-center">
              <ul>
                <li className="uppercase py-1 tracking-wider text-sm">Role</li>
                {role.map((role, i) => (
                  <li key={role.label} className="text-xs py-1 opacity-70">
                    {role.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:flex md:flex-col md:items-end">
              <ul>
                <li className="uppercase py-1 tracking-wider text-sm">Team</li>
                {team.map((team, i) => (
                  <li key={team.member} className="text-xs py-1 opacity-70">
                    {team.member}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full h-72  relative rounded-sm">
            <div className="absolute inset-0"></div>
            <img
              src={`/images/${folderString}/${featuredImage}`}
              alt=""
              role="presentation"
              className="object-cover w-full h-full shadow-lg rounded-sm"
            />
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto max-w-4xl grid gap-8 lg:grid-cols-3">
          <div className="border-t border-gray-100 pt-6">
            <h2 className="h2">{client.clientProject}</h2>
          </div>
          <div className="lg:col-span-2">{parse(objectiveHTML)}</div>
        </div>
      </section>
    </>
  );
};

export default ProjectIntro;

import React from "react";
import { Link } from "gatsby";

const PortfolioCard = ({ project }) => {
  const { title, client, tags, image, page } = project;

  console.log(project);

  return (
    <>
      {/* {projects.map((link, index) => ( */}
      <div className={`relative group `}>
        {/* <div className={`relative group ${altLayout[index % altLayout.length]}`}> */}
        <div className="text-gray-200 uppercase transition-all tracking-wide mb-4 text-sm opacity-75 group-hover:opacity-100">
          {tags}
        </div>
        <Link to={page} className="">
          <div className="relative bg-black h-[455px]  rounded-lg overflow-hidden group-hover:scale-[97%] ease-out duration-300 transition">
            <div className="absolute inset-0">
              <img
                className="w-full h-full object-cover group-hover:scale-[120%] transition ease-out duration-500"
                src={image}
                alt=""
                role="presentation"
                width="336px"
                height="455px"
              />
              {/* <StaticImage
                  src={link.image}
                  className="w-full h-full object-cover group-hover:scale-[120%] transition ease-out duration-500"
                  alt=""
                /> */}

              <div
                className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
                aria-hidden="true"
              />
            </div>
            <div className="relative max-w-7xl p-6 h-full  flex flex-col justify-end">
              <p className="text-indigo-100">{client}</p>
              <h1 className="text-3xl font-black text-white mb-0">{title}</h1>
            </div>
          </div>
        </Link>
      </div>
      {/* ))} */}
    </>
  );
};

export default PortfolioCard;

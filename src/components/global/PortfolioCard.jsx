import React from "react";
import { Link } from "gatsby";
import { HiArrowSmRight } from "react-icons/hi";

const PortfolioCard = ({ project }) => {
  const { title, client, tags, image, page } = project;

  return (
    <>
      <div className={`relative group `}>
        <div className="text-sky-200 flex items-center gap-1 uppercase group transition-all tracking-widest mb-4 text-xs opacity-75 group-hover:opacity-100">
          {tags}
          <HiArrowSmRight className="group-hover:translate-x-2 h-4 w-4 transition opacity-0 group-hover:opacity-100" />
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
              <div
                className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"
                aria-hidden="true"
              />
            </div>
            <div className="relative max-w-7xl p-6 h-full  flex flex-col justify-end">
              <p className="text-sky-200 uppercase group-hover:text-white transition tracking-widest text-sm">
                {client}
              </p>
              <h1 className="text-3xl font-black text-gray-100 mb-0">
                {title}
              </h1>
            </div>
          </div>
        </Link>
      </div>
      {/* ))} */}
    </>
  );
};

export default PortfolioCard;

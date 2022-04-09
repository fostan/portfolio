import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import TagDev from "../global/TagDev";
import TagUI from "../global/TagUI";

const CarbonvertCard = () => {
  return (
    <div className="row-span-4 col-span-1 group" id="carbonvert">
      <Link to="/carbonvert" className="card h-[24rem] flex">
        <div className="relative bg-black h-full w-full rounded-lg overflow-hidden group-hover:scale-[97%] ease-out duration-300 transition">
          <div className="absolute inset-0">
            <StaticImage
              src="../../images/icon.png"
              className="w-full h-full object-cover group-hover:scale-[120%] transition ease-out duration-500"
              alt=""
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl p-3 sm:p-6 h-full  flex flex-col justify-end">
            <p className="text-light text-sm">Carbonvert</p>
            <h1 className="card-title">A down to Earth solution</h1>
          </div>
        </div>
      </Link>
      <ul className="tag-group">
        <TagUI />
        <TagDev />
      </ul>
    </div>
  );
};

export default CarbonvertCard;

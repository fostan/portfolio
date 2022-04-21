import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import TagDev from "../global/TagDev";
import TagUX from "../global/TagUX";

const IoTCard = () => {
  return (
    <div className="row-span-3 col-span-1 group bg-opacity-0" id="iot">
      <Link to="/iot-inspector" className="card h-[18rem] flex cursor-pointer">
        <div className="relative bg-black h-full w-full rounded-lg overflow-hidden group-hover:scale-[97%] ease-out duration-300 transition">
          <div className="absolute inset-0">
            <StaticImage
              placeholder="blurred"
              src="../../images/iot/iot-card.png"
              className="w-full h-full object-cover group-hover:scale-[120%] transition ease-out duration-500"
              alt=""
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl p-3 sm:p-6 h-full  flex flex-col justify-end">
            <p className="text-light text-sm">Consumer Reports IoT Inspector</p>
            <h1 className="card-title">Who are your devices talking to?</h1>
          </div>
        </div>
      </Link>
      <ul className="tag-group">
        <TagUX />
        <TagDev />
      </ul>
    </div>
  );
};

export default IoTCard;

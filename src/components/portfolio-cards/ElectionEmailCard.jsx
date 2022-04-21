import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import TagUI from "../global/TagUI";
import TagUX from "../global/TagUX";
import TagDev from "../global/TagDev";

const ElectionEmailCard = () => {
  return (
    <div className="row-span-4 col-span-1 group opacity-0" id="electionEmails">
      <Link
        to="/2020-us-election-emails"
        className="card h-[24rem] flex cursor-pointer"
      >
        <div className="relative bg-black h-full w-full rounded-lg overflow-hidden group-hover:scale-[97%] ease-out duration-300 transition">
          <div className="absolute inset-0">
            <StaticImage
              placeholder="blurred"
              src="../../images/electionemails/electionemails-card.png"
              className="w-full h-full object-cover group-hover:scale-[120%] transition ease-out duration-500"
              alt=""
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl p-3 sm:p-6 h-full  flex flex-col justify-end">
            <p className="text-light text-sm">2020 US Election Emails</p>
            <h1 className="card-title">A new look at the 2020 election</h1>
          </div>
        </div>
      </Link>
      <ul className="tag-group">
        <TagUI />
        <TagUX />
        <TagDev />
      </ul>
    </div>
  );
};

export default ElectionEmailCard;

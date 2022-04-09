import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const ElectionEmailCard = () => {
  return (
    <div className="row-span-4 col-span-1 group opacity-0" id="electionEmails">
      <Link to="/2020-us-election-emails" className="card h-[24rem] flex ">
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
          <div className="relative max-w-7xl p-6 h-full  flex flex-col justify-end">
            <p className="text-indigo-100">2020 US Election Emails</p>
            <h1 className="text-3xl font-black text-white mb-0">
              A new look at the 2020 election
            </h1>
          </div>
        </div>
      </Link>
      <ul className="tag-group">
        <li className="tag">U/I design</li>
        <li className="tag">User experience</li>
        <li className="tag">Front-end development</li>
      </ul>
    </div>
  );
};

export default ElectionEmailCard;
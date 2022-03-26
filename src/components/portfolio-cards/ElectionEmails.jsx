import React from "react";
import { Link } from "gatsby";

const projectDetails = [
  {
    title: "A new look at the 2020 election",
    client: "2020 US Election Emails",
    tags: "Dev • Design • UX",
    image: "/images/election-emails-card.jpg",
    page: "/2020-us-election-emails/",
  },
  {
    title: "Preventing Disaster with A.I.",
    client: "Kettle Reinsurance",
    tags: "Dev",
    image: "/images/election-emails-card.jpg",
    page: "/2020-us-election-emails/",
  },
];

const altLayout = ["md:mt-16", ""];

const ElectionEmails = () => {
  return (
    <>
      {projectDetails.map((link, index) => (
        <div
          key={link.title}
          className={`relative group ${altLayout[index % altLayout.length]}`}
        >
          <div className="text-gray-200 uppercase transition-all tracking-wide mb-4 text-sm opacity-75 group-hover:opacity-100">
            {link.tags}
          </div>
          <Link to={link.page} className="">
            <div className="relative bg-black h-[455px]  rounded-lg overflow-hidden group-hover:scale-[97%] transition">
              <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover group-hover:scale-[120%] transition ease-out duration-300"
                  src={link.image}
                  alt=""
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
                  aria-hidden="true"
                />
                {/* <div
                  className="absolute inset-0 bg-indigo-800 mix-blend-multiply"
                  aria-hidden="true"
                /> */}
              </div>
              <div className="relative max-w-7xl p-6 h-full  flex flex-col justify-end">
                <p className="text-indigo-100">{link.client}</p>
                <h1 className="text-3xl font-black text-white mb-0">
                  {link.title}
                </h1>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ElectionEmails;

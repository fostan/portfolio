import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { MdOutlineSwipe } from "react-icons/md";

const userStories = [
  {
    user: "Data enthusiast",
    story:
      "This is a user that is very interested in numbers and data. Understanding  and visualizing data usage through the Smart Home and IoT is important to them for reasons of passion for the knowledge.",
  },
  {
    user: "Conscious consumer",
    story:
      "This is a user that is super conscious of their data usage. Whether they have a limited plan or they want to reduce their carbon footprint - tracking data usage is important to them.",
  },
  {
    user: "Security specialist",
    story:
      "This is a user where privacy and security comes first. They want to be aware of any hackers, devices sending data when they are not supposed to, or unknown devices that could be in the area that could cause a threat.",
  },
  {
    user: "Ad averse",
    story:
      "This user wants to be aware if any of their data is being sent to companies for advertising purposes. They do not want to be targeted for those sorts of activities.",
  },
  {
    user: "Academic Researcher",
    story:
      "This is a user that works in the field of Iot or technology and has interest in the research endeavors that utilize this crowdsourced data.",
  },
];

const UserTabs = () => {
  return (
    <section className="pb-28 pt-8 px-4 md:px-0">
      <div className="shadow-sm md:shadow-none py-10 rounded-sm container max-w-5xl mx-auto md:w-10/12 relative before:-z-10 before:content-[''] before:absolute before:w-full before:md:w-3/4 before:h-full before:bg-[#F3F4F6] before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2">
        <div className="lg:order-last lg:mx-0 ">
          <h2 className="text-3xl mb-4 lg:text-7xl font-serif font-black lg:text-neutral-800">
            Users & Stories
          </h2>
        </div>
        <div className="z-20">
          {/* <div className="2xl:hidden"> */}
          <span className="text-xs text-neutral-500 uppercase font-black tracking-widest flex items-center gap-2 group">
            <MdOutlineSwipe className="h-4 w-4 group-hover:-rotate-[15deg] duration-300 transition" />
            Swipe to view users
          </span>
          {/* </div> */}
          <Tab.Group>
            <Tab.List className="flex mt-1 mb-5  max-w-3xl overflow-x-scroll">
              {userStories.map((user) => (
                <Tab as={Fragment} key={user.user}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "border-b-2 border-[#4B4CDC]  py-2 px-4 min-w-fit uppercase tracking-wider text-sm text-dark mr-4 my-2 backdrop-blur-md "
                          : "border-b-2 border-transparent text-neutral-700 py-2 px-4 uppercase tracking-wider text-sm hover:border-neutral-900 duration-500 min-w-fit mr-4  hover:text-neutral-900 my-2"
                      }
                    >
                      {user.user}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="rounded-sm bg-[#4B4CDC] w-full text-[#FFFFFF] max-w-3xl min-h-[300px] items-center flex shadow-lg">
              {userStories.map((user, i) => (
                <Tab.Panel key={user.story} className="p-6 mx-auto">
                  <h3 className="h3 ">{user.user}</h3>
                  <hr className="my-4 opacity-10" />
                  <p className="text-[#FFFFFF] max-w-xl leading-8">
                    {user.story}
                  </p>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default UserTabs;

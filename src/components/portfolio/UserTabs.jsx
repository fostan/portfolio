import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { MdOutlineSwipe } from "react-icons/md";

const UserTabs = ({ users }) => {
  const { userStories, accentColor, lightColor } = users;

  return (
    <section className="pb-28 pt-8 px-4 md:px-0">
      <div
        className={`shadow-lg md:shadow-none py-10 rounded-md container max-w-5xl mx-auto md:w-10/12 relative before:-z-10   before:content-[''] before:absolute before:w-full before:md:w-3/4 before:h-full before:bg-[${lightColor}] before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2`}
      >
        <div className="lg:order-last md:mx-16 lg:mx-0 ">
          <h2 className="text-3xl mb-4 lg:text-7xl font-serif font-black lg:text-neutral-800">
            Users & Stories
          </h2>
        </div>
        <div className="z-20">
          <div>
            <span className="text-xs text-neutral-500 uppercase font-black tracking-widest flex items-center gap-2 group">
              <MdOutlineSwipe className="h-4 w-4 group-hover:-rotate-[15deg] duration-300 transition" />
              Swipe to view users
            </span>
          </div>
          <Tab.Group vertical>
            <Tab.List className="flex mt-1 mb-5  max-w-3xl overflow-x-scroll bg-gradient-to-l from-neutral-200 via-transparent border-r-2 border-neutral-300">
              {userStories.map((user) => (
                <Tab as={Fragment} key={user.user}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "border-2 border-neutral-700  rounded-full py-2 px-4 min-w-fit uppercase tracking-wider text-sm text-sky-100 mr-4 my-2 backdrop-blur-md bg-neutral-900/90"
                          : "border-2 border-transparent bg-transparent text-neutral-900 py-2 px-4 uppercase tracking-wider text-sm hover:bg-neutral-300 duration-500 min-w-fit mr-4 rounded-full hover:text-neutral-700 my-2"
                      }
                    >
                      {user.user}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels
              className={` rounded-sm bg-[${accentColor}] w-full text-[#FFFFFF] max-w-3xl min-h-[300px] items-center flex shadow-2xl`}
            >
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

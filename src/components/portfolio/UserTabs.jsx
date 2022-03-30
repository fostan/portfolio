import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";

const UserTabs = ({ users }) => {
  const { userStories, accentColor, lightColor } = users;

  return (
    <section className="pb-28 pt-8 px-4 md:px-0">
      <div
        className={`shadow-lg md:shadow-none py-10 rounded-md container max-w-5xl mx-auto grid lg:grid-cols-3 relative before:-z-10   before:content-[''] before:absolute before:w-full before:md:w-3/4 before:h-full before:bg-[${lightColor}] before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2`}
      >
        <div className="lg:order-last md:mx-16 lg:mx-0 flex items-center justify-center">
          <h2 className="text-2xl lg:text-7xl font-serif font-black lg:text-gray-800">
            Users & Stories
          </h2>
        </div>
        <div className="lg:col-span-2 flex mt-4 items-center flex-col-reverse md:flex-row">
          <Tab.Group vertical>
            <Tab.List className="w-full md:w-fit flex md:flex-col justify-around md:justify-center border border-gray-100 shadow-inner items-center bg-white rounded-full p-2 h-fit my-4">
              {userStories.map((user) => (
                <Tab as={Fragment} key={user.user}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "bg-gray-900 h-6 w-6 rounded-full m-2 transition-all shadow-inner"
                          : "bg-gray-300 h-6 w-6 rounded-full m-2  hover:bg-gray-400 transition-all"
                      }
                    ></button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels
              className={` rounded-sm bg-[${accentColor}] w-full md:ml-3 mr-8 text-[#FFFFFF] justify-center min-h-[300px] items-center flex shadow-2xl`}
            >
              {userStories.map((user, i) => (
                <Tab.Panel key={user.story} className="p-8">
                  <h3 className="h3">{user.user}</h3>
                  <hr className="my-4 opacity-10" />
                  <p className="text-[#FFFFFF]">{user.story}</p>
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

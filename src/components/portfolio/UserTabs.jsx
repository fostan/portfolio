import React, { Fragment, useState } from "react";
import { Tab, Transition } from "@headlessui/react";

const UserTabs = ({ users }) => {
  const { userStories, accentColor } = users;
  // const [isShowing, setIsShowing] = useState(false);

  return (
    <section className="pb-28 pt-8">
      <div className="container max-w-4xl mx-auto grid lg:grid-cols-3">
        <div className="lg:order-last md:mx-16 lg:mx-0 flex items-center">
          <h2 className="text-2xl lg:text-7xl font-serif font-black lg:text-gray-800">
            Users & Stories
          </h2>
        </div>
        <div className="lg:col-span-2 md:flex mt-4 items-center">
          <Tab.Group vertical>
            <Tab.List className="flex md:flex-col justify-around md:justify-center border border-gray-100 shadow-inner items-center bg-white rounded-full p-2 h-fit my-4">
              {userStories.map((user, i) => (
                <Tab as={Fragment} key={i}>
                  {({ selected }) => (
                    <button
                      // onClick={() => setIsShowing((isShowing) => !isShowing)}
                      className={
                        selected
                          ? "bg-gray-900 h-6 w-6 rounded-full m-2 transition-all shadow-inner"
                          : "bg-gray-400 h-6 w-6 rounded-full m-2  hover:bg-gray-400 transition-all"
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
                // <Transition
                //   show={isShowing}
                //   enter="transition-opacity duration-75"
                //   enterFrom="opacity-0"
                //   enterTo="opacity-100"
                //   leave="transition-opacity duration-150"
                //   leaveFrom="opacity-100"
                //   leaveTo="opacity-0"
                // >
                <Tab.Panel key={i} className="p-8">
                  <h3 className="h3">{user.user}</h3>
                  <hr className="my-4 opacity-10" />
                  <p className="text-[#FFFFFF]">{user.story}</p>
                </Tab.Panel>
                // </Transition>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default UserTabs;

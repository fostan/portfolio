import React from "react";
import { Tab } from "@headlessui/react";
import TabAllWork from "./TabAllWork";

const ProjectTabs = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <Tab.Group>
        <div className="w-full md:w-10/12 mx-auto mb-16">
          <Tab.List className="flex justify-between w-full">
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-dark rounded-full border border-dark text-light transition py-1 px-5 text-sm tracking-wider"
                  : "rounded-full border border-gray-500 py-1 px-5 tracking-wider transition text-sm duration-700 hover:bg-dark/80 hover:text-light/80"
              }
            >
              All work
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-dark rounded-full border border-dark text-light transition py-1 px-5 text-sm tracking-wider"
                  : "rounded-full border border-gray-500 py-1 px-5 tracking-wider transition text-sm duration-700 hover:bg-dark/80 hover:text-light/80"
              }
            >
              U/I design
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-dark rounded-full border border-dark text-light transition py-1 px-5 text-sm tracking-wider"
                  : "rounded-full border border-gray-500 py-1 px-5 tracking-wider transition text-sm duration-700 hover:bg-dark/80 hover:text-light/80"
              }
            >
              User experience
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-dark rounded-full border border-dark text-light transition py-1 px-5 text-sm tracking-wider"
                  : "rounded-full border border-gray-500 py-1 px-5 tracking-wider transition text-sm duration-700 hover:bg-dark/80 hover:text-light/80"
              }
            >
              Front-end development
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <TabAllWork />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 4</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ProjectTabs;

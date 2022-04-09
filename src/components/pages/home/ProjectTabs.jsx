import React from "react";
import { Tab } from "@headlessui/react";
import TabAllWork from "./TabAllWork";
import TabUI from "./TabUI";
import TabUX from "./TabUX";
import TabDev from "./TabDev";

const ProjectTabs = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <Tab.Group>
        <div className="w-full md:w-10/12 mx-auto mb-12">
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
          <div className="pt-[25px]">
            <Tab.Panel>
              <TabAllWork />
            </Tab.Panel>
            <Tab.Panel>
              <TabUI />
            </Tab.Panel>
            <Tab.Panel>
              <TabUX />
            </Tab.Panel>
            <Tab.Panel>
              <TabDev />
            </Tab.Panel>
          </div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ProjectTabs;

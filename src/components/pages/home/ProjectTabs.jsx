import React from "react";
import { Tab } from "@headlessui/react";
import TabAllWork from "./TabAllWork";
import TabUI from "./TabUI";
import TabUX from "./TabUX";
import TabDev from "./TabDev";
import { BsFillCollectionFill } from "react-icons/Bs";
import { FaFileCode } from "react-icons/Fa";
import { MdTouchApp } from "react-icons/Md";
import { TiFlowSwitch } from "react-icons/Ti";

const ProjectTabs = () => {
  return (
    <div className="container mx-auto max-w-3xl">
      <Tab.Group>
        <div className="w-full md:w-10/12 mx-auto mb-4 lg:mb-12">
          <Tab.List className="project-filters px-6 sm:px-0">
            <Tab
              className={({ selected }) =>
                selected
                  ? "project-filter-pill project-filter-pill-active"
                  : "project-filter-pill "
              }
            >
              <BsFillCollectionFill className="sm:hidden" />
              <span className="block sm:hidden">All</span>
              <span className="hidden sm:block">All work</span>
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "project-filter-pill project-filter-pill-active"
                  : "project-filter-pill"
              }
            >
              <MdTouchApp className="sm:hidden" />
              <span className="block sm:hidden">U/I</span>
              <span className="hidden sm:block">U/I design</span>
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "project-filter-pill project-filter-pill-active"
                  : "project-filter-pill"
              }
            >
              <TiFlowSwitch className="sm:hidden" />
              <span className="block sm:hidden">U/X</span>
              <span className="hidden sm:block">User experience</span>
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "project-filter-pill  project-filter-pill-active"
                  : "project-filter-pill"
              }
            >
              <FaFileCode className="sm:hidden" />
              <span className="block sm:hidden">Dev</span>
              <span className="hidden sm:block">Front-end development</span>
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
          <div className="md:pt-[25px]">
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

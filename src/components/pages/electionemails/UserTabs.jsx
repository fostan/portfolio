import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { MdOutlineSwipe } from "react-icons/md";

const userStories = [
  {
    user: "Political journalist",
    story:
      "Journalists need to be able to search the database using complex and/or logic statements. They may also find benefit in searching through metadata and other methods that create easy benchmarks to compare findings.",
  },
  {
    user: "Politically interested",
    story:
      "This user is less search inclined and isn’t likely to comb through the database. They’re takeaways are interesting findings from the research team and engaging data visualizations.",
  },
  {
    user: "Academic Researcher",
    story:
      "Researchers will have a higher interest in reading through the team’s own research paper on their findings. They may require an easy to use route to search the database to get a scope of the data but would also like to find comparisons among the population. ",
  },
];

const UserTabs = () => {
  return (
    <section className="pb-28 pt-8 px-4 md:px-0">
      <div className="shadow-sm md:shadow-none py-10 rounded-sm container max-w-5xl mx-auto md:w-10/12 relative before:-z-10   before:content-[''] before:absolute before:w-full before:md:w-3/4 before:h-full before:bg-[#F5F4EE] before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2">
        <div className="lg:order-last lg:mx-0 ">
          <h2 className="text-3xl mb-4 lg:text-7xl font-serif font-black lg:text-neutral-800">
            Users & Stories
          </h2>
        </div>
        <div className="z-20">
          <div className="md:hidden">
            <span className="text-xs text-neutral-500 uppercase font-black tracking-widest flex items-center gap-2 group">
              <MdOutlineSwipe className="h-4 w-4 group-hover:-rotate-[15deg] duration-300 transition" />
              Swipe to view users
            </span>
          </div>
          <Tab.Group>
            <Tab.List className="flex mt-1 mb-5  max-w-3xl overflow-x-scroll">
              {userStories.map((user) => (
                <Tab as={Fragment} key={user.user}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "border-b-2 border-[#AD3F31]  py-2 px-4 min-w-fit uppercase tracking-wider text-sm text-dark mr-4 my-2 backdrop-blur-md "
                          : "border-b-2 border-transparent text-neutral-700 py-2 px-4 uppercase tracking-wider text-sm hover:border-neutral-900 duration-500 min-w-fit mr-4  hover:text-neutral-900 my-2"
                      }
                    >
                      {user.user}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="rounded-sm bg-[#AD3F31] w-full text-[#FFFFFF] max-w-3xl min-h-[300px] items-center flex shadow-lg">
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

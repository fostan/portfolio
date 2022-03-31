import * as React from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import PortfolioCard from "../components/global/PortfolioCard";
import { FaLightbulb, FaRocket, FaHighlighter } from "react-icons/fa";

const FeaturedProjects = [
  {
    title: "Who are your devices talking to?",
    client: "IoT Inspector",
    tags: "Development • UX",
    image: "/images/iot-inspector/iot-inspector-card.webp",
    page: "/iot-inspector/",
  },
  {
    title: "A new look at the 2020 election",
    client: "2020 US Election Emails",
    tags: "Development • Design • UX",
    image: "/images/election-emails/election-emails-card.webp",
    page: "/2020-us-election-emails/",
  },
  // {
  //   title: "Table top magic",
  //   client: "Damn Good Game tools",
  //   tags: "Development • UX",
  //   image: "/images/dggt/dggt-card.png",
  //   page: "/damn-good-game-tools/",
  // },
  {
    title: "A down to Earth solution",
    client: "Carbonvert",
    tags: "Development • Design",
    image: "/images/carbonvert/carbonvert-card.webp",
    page: "/carbonvert/",
  },
  {
    title: "Heaven Scent",
    client: "Smellbetter",
    tags: "Development • Design",
    image: "/images/smellbetter/smellbetter-card.webp",
    page: "/smellbetter/",
  },
  {
    title: "A.I. Disaster Prevention",
    client: "Kettle",
    tags: "Development",
    image: "/images/kettle/kettle-card.webp",
    page: "/kettle/",
  },
];

const altLayout = ["md:mt-16 lg:mt-0", "mb-16 lg:mb-0"];

const IndexPage = () => {
  return (
    <HomeLayout>
      <GatsbySeo
        title="Fostan"
        description="Front-End Development & UX/UI Design"
      />
      <section className="pt-12 md:pt-40 pb-20">
        <div className="px-4">
          <h1 className="text-white text-center text-7xl lg:text-9xl uppercase tracking-widest mt-8 md:order-last">
            Fostan
          </h1>
          <p className="text-center text-gray-200 uppercase tracking-widest text-xs">
            User Experience design • Front-end web development •  User Interface
            design
          </p>
        </div>
      </section>

      <div className="grid max-w-3xl py-16 mx-auto md:grid-cols-2 lg:max-w-6xl lg:grid-cols-3 gap-16 px-4 overflow-x-hidden">
        {/* <div className="flex flex-col py-4 md:py-10 md:col-span-2 relative">
          <BioText />
          <div className="absolute -bottom-[90px] -right-[175px] md:-top-1/2 md:right-0">
            <Filters />
          </div>
          <div className="absolute -bottom-[90px] -right-[175px] md:-top-1/2 md:right-0">
            <img
              src="/images/header-glow.png"
              className="object-fit inset-0 max-w-[400px] scale-150"
              role="presentation"
              width="400px"
              height="480px"
            />
          </div>
        </div> */}
        {/* <div className="p-4 text-white">
          <Filters />
        </div> */}
        {FeaturedProjects.map((project, index) => (
          <div key={index} className={`${altLayout[index % altLayout.length]}`}>
            <PortfolioCard project={project} />
          </div>
        ))}
      </div>
    </HomeLayout>
  );
};

export default IndexPage;

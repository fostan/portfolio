import * as React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import HomeLayout from "../components/layouts/HomeLayout";
import BioText from "../components/ui/BioText";
import Filters from "../components/ui/Filters";
import ElectionEmails from "../components/portfolio-cards/ElectionEmails";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import PortfolioCard from "../components/global/PortfolioCard";

const FeaturedProjects = [
  {
    title: "A new look at the 2020 election",
    client: "2020 US Election Emails",
    tags: "Development • Design • UX",
    image: "/images/election-emails/election-emails-card.webp",
    page: "/2020-us-election-emails/",
  },
  {
    title: "Who are your devices talking to?",
    client: "IoT Inspector",
    tags: "Development • UX",
    image: "/images/iot-inspector/iot-inspector-card.png",
    page: "/carbonvert/",
  },
  {
    title: "Table top magic",
    client: "Damn Good Game tools",
    tags: "Development • UX",
    image: "/images/dggt/dggt-card.png",
    page: "/carbonvert/",
  },
  {
    title: "A down to Earth solution",
    client: "Carbonvert",
    tags: "Development • Design",
    image: "/images/carbonvert/carbonvert-card.png",
    page: "/carbonvert/",
  },

  {
    title: "Preventing Disaster with A.I.",
    client: "Kettle",
    tags: "Development",
    image: "/images/kettle/kettle-card.png",
    page: "/carbonvert/",
  },
  {
    title: "Heaven Scent",
    client: "Smellbetter",
    tags: "Development • Design",
    image: "/images/smellbetter/smellbetter-card.png",
    page: "/carbonvert/",
  },
];

const altLayout = ["md:mt-16", "mb-16"];

// markup
const IndexPage = () => {
  return (
    <HomeLayout>
      <GatsbySeo
        title="Fostan"
        description="Front-End Development & UX/UI Design"
      />
      <section className="pt-40 pb-20">
        <div className="max-w-9xl mx-auto px-4">
          <h1 className="text-white text-center text-7xl lg:text-9xl uppercase tracking-widest mb-8">
            Fostan
          </h1>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <p className="text-center text-sm uppercase text-primary tracking-widest flex justify-center opacity-70">
              User Experience design
            </p>
            <p className="text-center text-sm uppercase text-primary tracking-widest flex justify-center">
              Front-end web development
            </p>
            <p className="text-center text-sm uppercase text-primary tracking-widest flex justify-center">
              User Interface design
            </p>
          </div>
        </div>
      </section>

      <div className="grid max-w-3xl py-16 mx-auto md:grid-cols-2 gap-16 px-4 overflow-x-hidden">
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

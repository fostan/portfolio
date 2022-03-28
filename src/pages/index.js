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
    tags: "Dev • Design • UX",
    image: "/images/election-emails-card.jpg",
    page: "/2020-us-election-emails/",
  },
  {
    title: "Preventing Disaster with A.I.",
    client: "Kettle Reinsurance",
    tags: "Dev",
    image: "/images/election-emails-card.jpg",
    page: "/2020-us-election-emails/",
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
      <div className="grid max-w-3xl py-16 mx-auto md:grid-cols-2 gap-16 px-4 overflow-x-hidden">
        <div className="flex flex-col py-4 md:py-10 md:col-span-2 relative">
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
        </div>
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

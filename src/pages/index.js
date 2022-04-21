import * as React from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import ProjectTabs from "../components/pages/home/ProjectTabs";

const IndexPage = () => {
  return (
    <HomeLayout>
      <GatsbySeo
        title="Fostan • Digital Interface Foundry"
        description="Front-End Development & UX/UI Design"
        openGraph={{
          url: "https://www.fostan.xyz",
          title: "Fostan",
          description: "Front-End Development & UX/UI Design",
          images: [
            {
              url: "/images/social.png",
              width: 800,
              height: 600,
              alt: "Front-End Development & UX/UI Design by Fostan",
            },
          ],
        }}
      />
      <div className="h-3 w-full bg-dark"></div>
      <section className="pt-20  md:pt-28 pb-12">
        <div className="container max-w-2xl mx-auto text-center">
          <div>
            <h1 className="text-hero mb-2">Fostan.</h1>
            <p className="opacity-50">
              Just a kid who wanted the coolest Myspace page.
            </p>
          </div>
          <ul></ul>
        </div>
      </section>
      <section className="py-0 md:pt-auto">
        <ProjectTabs />
      </section>

      {/* <section className="pt-12 md:pt-40 pb-20">
        <div className="px-4 mx-auto container">
          <h1 className="text-white text-center text-xl lg:text-9xl uppercase tracking-widest mt-8 md:order-last">
            Fostan
          </h1>
          <ul className="flex mx-auto justify-center gap-4 md:gap-16 flex-col md:flex-row">
            <li className="text-sky-100 uppercase tracking-[.27em] text-xs opacity-50 text-center">
              User Experience design
            </li>
            <li className="text-sky-100 uppercase tracking-[.27em] text-xs opacity-50 text-center">
              Front-end web development
            </li>
            <li className="text-sky-100 uppercase tracking-[.27em] text-xs opacity-50 text-center">
              User Interface design
            </li>
          </ul>
        </div>
      </section>

      <div className="grid max-w-3xl py-16 mx-auto md:grid-cols-2 lg:max-w-6xl lg:grid-cols-3 gap-16 px-4 overflow-x-hidden">
        {FeaturedProjects.map((project, index) => (
          <div key={index} className={`${altLayout[index % altLayout.length]}`}>
            <PortfolioCard project={project} />
          </div>
        ))}
      </div> */}
    </HomeLayout>
  );
};

export default IndexPage;

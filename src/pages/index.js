import * as React from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import ProjectTabs from "../components/pages/home/ProjectTabs";
import Navigation from "../components/global/Navigation";

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
      <section className="pt-0 pb-96">
        <div className="md:w-11/12 py-4 px-8 mx-auto text-white bg-dark">
          <div className="container md:pb-48 pb-24">
            <Navigation />
            <div className="grid gap-5">
              <h1 className="text-hero mb-2 text-white order-2">
                Fostan is a user interface & UX designer with years of front-end
                development experience.
              </h1>
              <div className="flex items-center gap-3 opacity-50">
                <span className="text-xs uppercase">Fostan</span>
                <div className="w-full h-[1px] bg-white"></div>
                <span className="text-xs uppercase">xyz</span>
              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-2 -mb-96">
            <div className="bg-green-500 rounded-xl w-10/12 h-[600px] mx-auto mt-16"></div>
            <div className="bg-green-500 rounded-xl w-10/12 h-[600px] mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="py-0 md:pt-auto">
        <ProjectTabs />
      </section>
      {/* <section className="pt-10">
        <div className="container mx-auto text-center max-w-xl">
          <h2 className="w-full border-b-2 py-2 border-black/50 bg-zinc-900/30 text-zinc-900">
            Todo List
          </h2>
        </div>
      </section> */}
    </HomeLayout>
  );
};

export default IndexPage;

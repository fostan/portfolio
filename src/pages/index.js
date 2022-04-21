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
      <section className="pt-10">
        <div className="container mx-auto text-center max-w-xl">
          <h2 className="w-full border-b-2 py-2 border-black/50 bg-zinc-900/30 text-zinc-900">
            Todo List
          </h2>
        </div>
      </section>
    </HomeLayout>
  );
};

export default IndexPage;

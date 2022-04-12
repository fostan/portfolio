import * as React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import DefaultLayout from "../components/layouts/DefaultLayout";
import ProjectIntro from "../components/pages/electionemails/ProjectIntro";
import BeforeAfter from "../components/pages/electionemails/BeforeAfter";
import WebScroll from "../components/pages/electionemails/WebScroll";
import StickyImages from "../components/pages/electionemails/StickyImages";
import RelatedProjects from "../components/pages/electionemails/RelatedProjects";
import UserTabs from "../components/pages/electionemails/UserTabs";

const ElectionEmailPage = () => {
  return (
    <DefaultLayout>
      <GatsbySeo
        title="Fostan • 2020 US Election Emails"
        description="This Case Study: A refreshed look and search experience exploring a database of nearly every 2020 US eleciton email. Featuring front-end development, website design, and UX design."
      />
      <ProjectIntro />
      <UserTabs />
      <WebScroll />
      <BeforeAfter />
      <section className="bg-[#1F1D1D] py-20 lg:py-40 flex">
        <div className="container mx-auto max-w-6xl gap-8 lg:gap-16 grid lg:grid-cols-3 ">
          <div className="flex flex-col justify-center text-gray-200">
            <h2 className="mb-4 ">
              <span className="h3 text-white">Manipulative Tactics</span>
              <br />
              <span className="h2 !text-white">A vote for education</span>
            </h2>
            <p className="text-white/80">
              The researchers discovered dark UX patterns present in nearly half
              of all emails they received throughout the 2020 election. These
              ranged from forged replies to fake counters, meant to trick users
              into responding and sending money to campaigns and other political
              entities. In addition to searching the database, it was also
              imperative to educate users on these manipulations and teach them
              how to spot these tactics themselves.
            </p>
          </div>
          <div className="flex justify-center lg:col-span-2">
            <video width="100%" autoPlay loop muted playsInline height="auto">
              <source
                src="/images/election-emails/election-emails-scroll.webm"
                type="video/webm"
              ></source>
            </video>
          </div>
        </div>
      </section>
      <StickyImages />
      <RelatedProjects />
    </DefaultLayout>
  );
};

export default ElectionEmailPage;

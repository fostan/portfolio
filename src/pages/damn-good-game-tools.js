import * as React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import DefaultLayout from "../components/layouts/DefaultLayout";
import ProjectIntro from "../components/portfolio/ProjectIntro";
import UserTabs from "../components/portfolio/UserTabs";
import WebMockupScroll from "../components/portfolio/WebMockupScroll";
import BeforeAfter from "../components/portfolio/BeforeAfter";
import VideoFeature from "../components/portfolio/VideoFeature";
import StickyGallery from "../components/portfolio/StickyGallery";
import RelatedProjects from "../components/portfolio/RelatedProjects";

const PageContent = {
  darkColor: "#13252E",
  lightColor: "#F5F5F5",
  accentColor: "#F4C22C",
  accentColor2: "#F4C22C",
  tagline: "Table top magic",
  client: {
    clientName: "Mad Cactus Labs",
    clientProject: "Damn Good Game Tools",
  },
  role: [{ label: "UX Design" }, { label: "Web Development" }],
  team: [
    { member: "Jenny Vanderheiden" },
    { member: "Abby Ruminski" },
    { member: "Tom Beck" },
    { member: "Cody Nicoll" },
  ],
  featuredImage: "dggt-featured.png",
  objectiveHTML: "<p>lipsum</p>",
  beforeScreens: "/images/dggt/dggt-before.png",
  afterScreens: "/images/dggt/dggt-after.png",
  additionalTitle: "A damn good set of game creation tools",
  additionalSubTitle: "Tool's Gold",
  additionalHTML: "<p>lipsum</p>",
  additionalScreens: "/images/dggt/dggt-screens.png",
  folderString: "dggt",
};

const FeaturedProjects = [
  {
    title: "A new look at the 2020 election",
    client: "2020 US Election Emails",
    tags: "Dev • Design • UX",
    image: "/images/election-emails/election-emails-card.webp",
    page: "/2020-us-election-emails/",
  },
  {
    title: "Downsizing our carbon footprint",
    client: "Carbonvert",
    tags: "Dev • Design",
    image: "/images/carbonvert/carbonvert-card.png",
    page: "/carbonvert/",
  },
];

const DggtPage = () => {
  return (
    <DefaultLayout>
      <GatsbySeo title="Fostan • " description="This Case Study: " />
      <div className="h-full w-full before:bg-[#13252E] bg-[#13252E]"> </div>
      <div className="hidden before:bg-[#F5F5F5] bg-[#F5F5F5] border-[#F5F5F5]"></div>
      <div className="hidden before:bg-[#F4C22C] bg-[#F4C22C]"></div>
      <ProjectIntro content={PageContent} />
      <section className="py-20 bg-[#F5F5F5]">
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-[#F4C22C] h-[120%] w-3/4 right-0 absolute top-1/2 transform -translate-y-1/2 rounded-sm shadow-100 "></div>
          <div className="relative">
            <img
              src="/images/carbonvert/carbonvert-screens-3.png"
              alt=""
              className="h-auto w-5/6"
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#F5F5F5]">
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-[#F4C22C] h-[120%] w-3/4 left-0 absolute top-1/2 transform -translate-y-1/2 rounded-sm shadow-100 "></div>
          <div className="relative flex justify-end">
            <img
              src="/images/carbonvert/carbonvert-screens-3.png"
              alt=""
              className="h-auto w-5/6"
            />
          </div>
        </div>
      </section>
      <BeforeAfter images={PageContent} />
      <StickyGallery images={PageContent} />
      <RelatedProjects projects={FeaturedProjects} />
    </DefaultLayout>
  );
};

export default DggtPage;

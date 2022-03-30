import * as React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import DefaultLayout from "../components/layouts/DefaultLayout";
import ProjectIntro from "../components/portfolio/ProjectIntro";
import WebMockupScroll from "../components/portfolio/WebMockupScroll";
import StickyGallery from "../components/portfolio/StickyGallery";
import RelatedProjects from "../components/portfolio/RelatedProjects";

const PageContent = {
  darkColor: "#C24E67",
  lightColor: "#F8F8F8",
  accentColor: "#C24E67",
  accentColor2: "#F9D055",
  tagline: "A.I. Disaster Prevention",
  client: {
    clientName: "Kettle Reinsurance",
    clientProject: "OurKettle Website",
  },
  role: [{ label: "UI Design" }, { label: "Web Development" }],
  team: [
    { member: "Shelly Robinson" },
    { member: "Fola Akinola" },
    { member: "Abby Ruminski" },
    { member: "Tom Beck" },
  ],
  featuredImage: "kettle-featured.png",
  objectiveHTML: "<p></p>",
  webTitle: "Out for a scroll",
  webSubtitle: "Web design Refresh",
  webHTML: "<p></p>",
  folderString: "kettle",
  additionalTitle: "Scroll based spritesheet animations",
  additionalSubTitle: "In sprite of it all",
  additionalHTML: "<p></p>",
  additionalScreens: "/images/kettle/kettle-screens.png",
  frameCount: 221,
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

const KettlePage = () => {
  return (
    <DefaultLayout>
      <GatsbySeo
        title="Fostan • A down to Earth solution"
        description="This Case Study: This web design project featured front-end development and a fresh design system revamp for Carbonvert."
      />
      <div className="h-full w-full before:bg-[#C24E67] bg-[#C24E67]"> </div>
      <div className="h-full w-full before:bg-[#F8F8F8] bg-[#F8F8F8]"> </div>
      <div className="hidden before:bg-[#F9D055] bg-[#F9D055] border-[#F9D055]"></div>

      <ProjectIntro content={PageContent} />
      <WebMockupScroll content={PageContent} />
      <StickyGallery images={PageContent} />

      <section className="py-20 bg-[#F5F5F5]0">
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-[#C24E67] h-[120%] w-3/4 right-0 absolute top-1/2 transform -translate-y-1/2 rounded-sm shadow-100 "></div>
          <div className="relative">
            <video width="80%" autoPlay loop muted height="auto">
              <source
                src="/images/kettle/kettle-video-2.webm"
                type="video/webm"
              ></source>
            </video>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#F5F5F5]0">
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-[#C24E67] h-[120%] w-3/4 left-0 absolute top-1/2 transform -translate-y-1/2 rounded-sm shadow-100 "></div>
          <div className="relative flex justify-end">
            <video width="80%" autoPlay loop muted height="auto">
              <source
                src="/images/kettle/kettle-video-1.webm"
                type="video/webm"
              ></source>
            </video>
          </div>
        </div>
      </section>
      <RelatedProjects projects={FeaturedProjects} />
    </DefaultLayout>
  );
};

export default KettlePage;

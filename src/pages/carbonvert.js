import * as React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import DefaultLayout from "../components/layouts/DefaultLayout";
import ProjectIntro from "../components/portfolio/ProjectIntro";
import WebMockupScroll from "../components/portfolio/WebMockupScroll";
import BeforeAfter from "../components/portfolio/BeforeAfter";
import VideoFeature from "../components/portfolio/VideoFeature";
import StickyGallery from "../components/portfolio/StickyGallery";
import RelatedProjects from "../components/portfolio/RelatedProjects";

const PageContent = {
  darkColor: "#2F2A2B",
  lightColor: "#F5F5F5",
  accentColor: "#99EEF3",
  accentColor2: "#99EEF3",
  tagline: "A down to Earth solution",
  client: {
    clientName: "Carbonvert",
    clientProject: "Carbonvert Website",
  },
  role: [{ label: "UI Design" }, { label: "Web Development" }],
  team: [{ member: "Abby Ruminski" }, { member: "Micheal Nieling" }],
  featuredImage: "carbonvert-featured.png",
  objectiveHTML:
    "<p>Carbonvert develops the world’s largest carbon capture & storage projects. With the announcement of the largest CO2 storage facility in the world, they were in need of a fresh update to their website. In addition to showcasing their expertise in carbon storage, the Carbonvert website needed to educate users on tax credits and create financial incentives for companies to invest in carbon sequestration.</p>",
  webTitle: "A carbon first",
  webSubtitle: "Web design Refresh",
  webHTML:
    "<p>The website was a perfect launching point to not only explore an expansion of the brand, but also revisit aspects that weren't delivering Carbonvert’s messaging. With a refreshed color pallet, type styles, and a custom set of icons and illustrations, the brand was ready to extend to investment decks and beyond.</p>",
  beforeScreens: "/images/carbonvert/carbonvert-before.png",
  afterScreens: "/images/carbonvert/carbonvert-after.png",
  folderString: "carbonvert",
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

const CarbonvertPage = () => {
  return (
    <DefaultLayout>
      <GatsbySeo
        title="Fostan • A down to Earth solution"
        description="This Case Study: This web design project featured front-end development and a fresh design system revamp for Carbonvert."
      />
      <div className="h-full w-full before:bg-[#F5F4EE] bg-[#F5F4EE]"> </div>
      <div className="h-full w-full before:bg-[#2F2A2B] bg-[#2F2A2B]"> </div>
      <div className="hidden before:bg-[#F5F5F5] bg-[#F5F5F5] border-[#F5F5F5]"></div>
      <div className="hidden before:bg-[#99EEF3] bg-[#99EEF3] border-[#99EEF3]"></div>

      <ProjectIntro content={PageContent} />
      <WebMockupScroll content={PageContent} />
      <BeforeAfter images={PageContent} />
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container max-w-8xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto">
          <img
            src="/images/carbonvert/icon-1.svg"
            alt="Development & construction"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
          <img
            src="/images/carbonvert/icon-2.svg"
            alt="Profit financing"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
          <img
            src="/images/carbonvert/icon-3.svg"
            alt="CO2 storage & sequestration"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
          <img
            src="/images/carbonvert/icon-4.svg"
            alt="Carbon capture"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
          <img
            src="/images/carbonvert/icon-5.svg"
            alt="Identification & design"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
          <img
            src="/images/carbonvert/icon-6.svg"
            alt="Carbon Transport"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
        </div>
      </section>
      <section className="py-20">
        <div className="container max-w-7xl mx-auto">
          <img
            src="/images/carbonvert/carbonvert-screens-1.png"
            className="mx-auto"
            alt="A collage of screenshots of the carbonvert website"
            width="1100"
            height="932"
          />
          <img
            src="/images/carbonvert/carbonvert-screens-2.png"
            className="mx-auto my-16 lg:my-28"
            alt="An illustration of a CO2 well and rock layers"
            width="698"
            height="581"
          />
          <img
            src="/images/carbonvert/carbonvert-screens-3.png"
            className="mx-auto"
            alt="A collage of screenshots of the carbonvert website"
            width="1006"
            height="1046"
          />
        </div>
      </section>
      <RelatedProjects projects={FeaturedProjects} />
    </DefaultLayout>
  );
};

export default CarbonvertPage;

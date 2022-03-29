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
  darkColor: "#16262F",
  lightColor: "#EFF3F5",
  accentColor: "#3D99D0",
  accentColor2: "#F37F55",
  tagline: "Heaven Scent",
  client: {
    clientName: "SmellBetter Hawaii",
    clientProject: "SmellBetter Website",
  },
  role: [{ label: "UI Design" }, { label: "Web Development" }],
  team: [{ member: "Nick Krusik" }, { member: "Micheal Nieling" }],
  featuredImage: "smellbetter-featured.png",
  objectiveHTML:
    "<p>Based in Hawaii, the Smell Better team needed a marketing site to collect leads and gain awareness as they expanded their scent branding business to luxury hotels and beyond. This required extending the Smell Better design system beyond print and nimble refactoring and  communication with a pivot during the Covid-19 pandemic.</p>",
  webTitle: "What does your website smell like?",
  webSubtitle: "Web design Refresh",
  webHTML: "<p></p>",
  beforeScreens: "/images/smellbetter/smellbetter-before.png",
  afterScreens: "/images/smellbetter/smellbetter-after.png",
  folderString: "smellbetter",
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

const SmellbetterPage = () => {
  return (
    <DefaultLayout>
      <GatsbySeo
        title="Fostan • A down to Earth solution"
        description="This Case Study: This web design project featured front-end development and a fresh design system revamp for Carbonvert."
      />
      <div className="h-full w-full before:bg-[#EFF3F5] bg-[#EFF3F5]"> </div>
      <div className="h-full w-full bg-[#16262F]"> </div>
      <div className="hidden before:bg-[#3D99D0] bg-[#3D99D0] border-[#3D99D0]"></div>
      <div className="hidden before:bg-[#F37F55] bg-[#F37F55] border-[#F37F55]"></div>
      <ProjectIntro content={PageContent} />
      <WebMockupScroll content={PageContent} />
      <section className="py-20 bg-[#3D99D0]">
        <div className="container max-w-8xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto">
          <img
            src="/images/smellbetter/icon-1.svg"
            alt="Clean Cotton"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
          <img
            src="/images/smellbetter/icon-2.svg"
            alt="Vanilla"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
          <img
            src="/images/smellbetter/icon-3.svg"
            alt="Golden Hour"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
          <img
            src="/images/smellbetter/icon-4.svg"
            alt="Hibiscus"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
          <img
            src="/images/smellbetter/icon-5.svg"
            alt="Asian Garden"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
          <img
            src="/images/smellbetter/icon-6.svg"
            alt="Caramel"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
        </div>
      </section>
      <BeforeAfter images={PageContent} />{" "}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto">
          <img
            src="/images/smellbetter/smellbetter-screens.png"
            className="mx-auto"
            alt="A collage of screenshots of the smellbetter website"
            width="1100"
            height="932"
          />
        </div>
      </section>
      <section className="py-20 bg-[#F37F55]">
        <div className="container max-w-8xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto">
          <img
            src="/images/smellbetter/icon-7.svg"
            alt="Huckleberry"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
          <img
            src="/images/smellbetter/icon-8.svg"
            alt="Hawaiian Sunset"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
          <img
            src="/images/smellbetter/icon-9.svg"
            alt="Golden Hour"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
          <img
            src="/images/smellbetter/icon-10.svg"
            alt="Reach for the stars"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
          <img
            src="/images/smellbetter/icon-11.svg"
            alt="White Tea and Fig"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
          <img
            src="/images/smellbetter/icon-12.svg"
            alt="Green Tea Lemongrass"
            className="justify-self-center"
            width="100px"
            height="100px"
          />
        </div>
      </section>
      <RelatedProjects projects={FeaturedProjects} />
    </DefaultLayout>
  );
};

export default SmellbetterPage;

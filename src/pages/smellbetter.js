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
    clientName: "SmellBetter Hawai'i",
    clientProject: "SmellBetter Website",
  },
  role: [{ label: "UI Design" }, { label: "Web Development" }],
  team: [{ member: "Nick Krusik" }, { member: "Micheal Nieling" }],
  featuredImage: "smellbetter-featured.webp",
  objectiveHTML:
    "<p>Based in Hawaii, the SmellBetter Hawai’i team needed a new marketing site that properly communicated their story as they grew their scent branding business to Hawaiian luxury hotels and beyond. This required extending the SmellBetter design system beyond print and agile communication during SmellBetter’s quick pivot to sanitization services during the Covid-19 pandemic.</p>",
  webTitle: "What does your website smell like?",
  webSubtitle: "Web design Refresh",
  webHTML:
    "<p>After a swimmingly successful rebranding, refreshing the SmellBetter Hawai’i marketing website allowed us to think on a more experiential canvas. We created some wavy animations with a custom set of icons and imagery for their scents & services for you to smell through your browser.</p>",
  beforeScreens: "/images/smellbetter/smellbetter-before.webp",
  afterScreens: "/images/smellbetter/smellbetter-after.webp",
  folderString: "smellbetter",
  frameCount: 284,
};

const FeaturedProjects = [
  {
    title: "A down to Earth solution",
    client: "Carbonvert",
    tags: "Development • Design",
    image: "/images/carbonvert/carbonvert-card.webp",
    page: "/carbonvert/",
  },
  {
    title: "Who are your devices talking to?",
    client: "IoT Inspector",
    tags: "Development • UX",
    image: "/images/iot-inspector/iot-inspector-card.webp",
    page: "/iot-inspector/",
  },
];

const SmellbetterPage = () => {
  return (
    <DefaultLayout>
      <GatsbySeo
        title="Fostan • Heaven Scent"
        description="This Case Study: The SmellBetter Hawai'i marketing site refresh featured a new UI design & front-end development."
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
            src="/images/smellbetter/smellbetter-screens.webp"
            className="mx-auto"
            alt="A collage of screenshots of the smellbetter website"
            width="1100"
            height="932"
          />
        </div>
      </section>
      <section className="py-20 bg-[#F37F55]">
        <div className="container max-w-8xl grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto">
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

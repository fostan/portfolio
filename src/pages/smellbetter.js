import * as React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import DefaultLayout from "../components/layouts/DefaultLayout";
// import ProjectIntro from "../components/portfolio/ProjectIntro";
// import WebMockupScroll from "../components/portfolio/WebMockupScroll";
// import BeforeAfter from "../components/portfolio/BeforeAfter";
// import RelatedProjects from "../components/portfolio/RelatedProjects";

import ProjectIntro from "../components/pages/smellbetter/ProjectIntro";
import WebScroll from "../components/pages/smellbetter/WebScroll";
import BeforeAfter from "../components/pages/smellbetter/BeforeAfter";
import RelatedProjects from "../components/pages/smellbetter/RelatedProjects";
import IconRowOne from "../components/pages/smellbetter/IconRowOne";
import IconRowTwo from "../components/pages/smellbetter/IconRowTwo";
import ImageScroll from "../components/pages/smellbetter/ImageScroll";

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
      <ProjectIntro />
      <WebScroll />
      <IconRowOne />
      <BeforeAfter />
      {/* <section className="py-20">
        <div className="container max-w-7xl mx-auto">
          <img
            src="/images/smellbetter/smellbetter-screens.webp"
            className="mx-auto"
            alt="A collage of screenshots of the smellbetter website"
            width="1100"
            height="932"
          />
        </div>
      </section> */}
      <ImageScroll />
      <IconRowTwo />
      <RelatedProjects projects={FeaturedProjects} />
    </DefaultLayout>
  );
};

export default SmellbetterPage;

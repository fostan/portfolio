import * as React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import DefaultLayout from "../components/layouts/DefaultLayout";
import ProjectIntro from "../components/pages/smellbetter/ProjectIntro";
import WebScroll from "../components/pages/smellbetter/WebScroll";
import BeforeAfter from "../components/pages/smellbetter/BeforeAfter";
import RelatedProjects from "../components/pages/smellbetter/RelatedProjects";
import IconRowOne from "../components/pages/smellbetter/IconRowOne";
import IconRowTwo from "../components/pages/smellbetter/IconRowTwo";
import ImageScroll from "../components/pages/smellbetter/ImageScroll";

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
      <ImageScroll />
      <IconRowTwo />
      <RelatedProjects projects={FeaturedProjects} />
    </DefaultLayout>
  );
};

export default SmellbetterPage;

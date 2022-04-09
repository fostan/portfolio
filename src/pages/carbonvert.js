import * as React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import DefaultLayout from "../components/layouts/DefaultLayout";
// import ProjectIntro from "../components/portfolio/ProjectIntro";
import WebMockupScroll from "../components/portfolio/WebMockupScroll";
import VideoFeature from "../components/portfolio/VideoFeature";
import StickyGallery from "../components/portfolio/StickyGallery";
import RelatedProjects from "../components/portfolio/RelatedProjects";
import ProjectIntro from "../components/pages/carbonvert/ProjectIntro";
import WebScroll from "../components/pages/carbonvert/WebScroll";
import BeforeAfter from "../components/pages/carbonvert/BeforeAfter";
import IconContainer from "../components/pages/carbonvert/IconContainer";
import ImageScroll from "../components/pages/carbonvert/ImageScroll";

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
  featuredImage: "carbonvert-featured.webp",
  objectiveHTML:
    "<p>Carbonvert develops the world’s largest carbon capture & storage projects. With the announcement of the largest CO2 storage facility in the world, they were in need of a fresh update to their website. In addition to showcasing their expertise in carbon storage, the Carbonvert website needed to educate users on tax credits and create financial incentives for companies to invest in carbon sequestration.</p>",
  webTitle: "A carbon first",
  webSubtitle: "Web design Refresh",
  webHTML:
    "<p>The website was a perfect launching point to not only explore an expansion of the brand, but also revisit aspects that weren't delivering Carbonvert’s messaging. With a refreshed color pallet, type styles, and a custom set of icons and illustrations, the brand was ready to be applied to investment decks, presentations, and beyond.</p>",
  beforeScreens: "/images/carbonvert/carbonvert-before.webp",
  afterScreens: "/images/carbonvert/carbonvert-after.webp",
  folderString: "carbonvert",
  frameCount: 239,
};

const FeaturedProjects = [
  {
    title: "A.I. Disaster Prevention",
    client: "Kettle",
    tags: "Development",
    image: "/images/kettle/kettle-card.webp",
    page: "/kettle/",
  },
  {
    title: "Heaven Scent",
    client: "Smellbetter",
    tags: "Development • Design",
    image: "/images/smellbetter/smellbetter-card.webp",
    page: "/smellbetter/",
  },
];

const CarbonvertPage = () => {
  return (
    <DefaultLayout>
      <GatsbySeo
        title="Fostan • A down to Earth solution"
        description="This Case Study: This web design project featured front-end development and a fresh design system revamp for Carbonvert."
      />
      <ProjectIntro />
      <WebScroll />
      <BeforeAfter />
      <IconContainer />
      <ImageScroll />

      <RelatedProjects projects={FeaturedProjects} />
    </DefaultLayout>
  );
};

export default CarbonvertPage;

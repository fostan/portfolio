import * as React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import DefaultLayout from "../components/layouts/DefaultLayout";
import ProjectIntro from "../components/pages/carbonvert/ProjectIntro";
import WebScroll from "../components/pages/carbonvert/WebScroll";
import BeforeAfter from "../components/pages/carbonvert/BeforeAfter";
import IconContainer from "../components/pages/carbonvert/IconContainer";
import ImageScroll from "../components/pages/carbonvert/ImageScroll";
import RelatedProjects from "../components/pages/carbonvert/RelatedProjects";

const CarbonvertPage = () => {
  return (
    <DefaultLayout>
      <GatsbySeo
        title="Fostan • A down to Earth CO2 solution"
        description="This Case Study: This web design project featured front-end development and a fresh design system revamp for Carbonvert."
      />
      <ProjectIntro />
      <WebScroll />
      <BeforeAfter />
      <IconContainer />
      <ImageScroll />
      <RelatedProjects />
    </DefaultLayout>
  );
};

export default CarbonvertPage;

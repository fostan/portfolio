import * as React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import DefaultLayout from "../components/layouts/DefaultLayout";
import ProjectIntro from "../components/pages/iot/ProjectIntro";
import UserTabs from "../components/pages/iot/UserTabs";
import BeforeAfter from "../components/pages/iot/BeforeAfter";
import StickyImages from "../components/pages/iot/StickyImages";
import RelatedProjects from "../components/pages/iot/RelatedProjects";

const IotInspectorPage = () => {
  return (
    <DefaultLayout>
      <GatsbySeo
        title="Fostan • Who are your devices talking to?"
        description="This Case Study: Front-end development and UX overhaul, complete with new features for Consumer Reports' 'internet of things' inspector."
      />
      <ProjectIntro />
      <UserTabs />
      <BeforeAfter />
      <StickyImages />
      <RelatedProjects />
    </DefaultLayout>
  );
};

export default IotInspectorPage;

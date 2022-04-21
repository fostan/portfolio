import * as React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import DefaultLayout from "../components/layouts/DefaultLayout";
import ProjectIntro from "../components/pages/kettle/ProjectIntro";
import WebScroll from "../components/pages/kettle/WebScroll";
import StickyImages from "../components/pages/kettle/StickyImages";
import RelatedProjects from "../components/pages/kettle/RelatedProjects";
// import { Player } from "video-react";

const KettlePage = () => {
  return (
    <DefaultLayout>
      <GatsbySeo
        title="Fostan • A.I. Disaster Prevention"
        description="This Case Study: This web design project featured front-end development for Kettle Reinsurance"
      />
      <div className="h-full w-full before:bg-[#C24E67] bg-[#C24E67]"> </div>
      <div className="h-full w-full before:bg-[#F8F8F8] bg-[#F8F8F8]"> </div>
      <div className="hidden before:bg-[#F9D055] bg-[#F9D055] border-[#F9D055]"></div>

      <ProjectIntro />
      <WebScroll />
      <StickyImages />

      <section className="py-20 bg-[#F5F5F5]0">
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-[#C24E67] h-[120%] w-3/4 right-0 absolute top-1/2 transform -translate-y-1/2 rounded-sm shadow-100 "></div>
          <div className="relative">
            <video width="80%" autoPlay loop muted playsInline height="auto">
              {/* <Player width="80%" muted playsInline autoPlay> */}
              <source
                src="/images/kettle/kettle-video-2.webm"
                type="video/webm"
              ></source>
              {/* </Player> */}
            </video>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#F5F5F5]0">
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-[#C24E67] h-[120%] w-3/4 left-0 absolute top-1/2 transform -translate-y-1/2 rounded-sm shadow-100 "></div>
          <div className="relative flex justify-end">
            <video width="80%" autoPlay loop muted playsInline height="auto">
              <source
                src="/images/kettle/kettle-video-1.webm"
                type="video/webm"
              ></source>
            </video>
          </div>
        </div>
      </section>
      <RelatedProjects />
    </DefaultLayout>
  );
};

export default KettlePage;

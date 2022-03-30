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
  featuredImage: "kettle-featured.webp",
  objectiveHTML:
    "<p>Kettle is a reinsurance tool utilizing machine learning to mitigate catastrophic risk in the midst of global warming. Their first product, Cat Strip, has an industry leading 89% prediction success rate predicting wildfire damages in the state of California and deserved an equally as impressive internet debut. The design team had an impressive vision highlighting Kettle’s impressive numbers with stunning visuals and animations that would certainly set Kettle apart. </p>",
  webTitle: "Out for a scroll",
  webSubtitle: "Web design Refresh",
  webHTML:
    "<p>Close attention and communication with both designers and animators allowed us to create a variety of page based animations triggered by the user's scroll position. Included is a small demo showing Kettle’s impressive wildfire prediction from 2020.</p>",
  folderString: "kettle",
  additionalTitle: "Scroll based spritesheet animations",
  additionalSubTitle: "In sprite of it all",
  additionalHTML:
    "<p>The animation on the technology page is controlled in a slightly different manner. While still based on user scroll position, the animation playing is a frame by frame export of an animated video, compiled into a spritesheet and repositioned behind a canvas as a way to not only interact with the content, but minimize file size.</p>",
  additionalScreens: "/images/kettle/kettle-screens.webp",
  frameCount: 221,
};

const FeaturedProjects = [
  {
    title: "A new look at the 2020 election",
    client: "2020 US Election Emails",
    tags: "Development • Design • UX",
    image: "/images/election-emails/election-emails-card.webp",
    page: "/2020-us-election-emails/",
  },
  {
    title: "Heaven Scent",
    client: "Smellbetter",
    tags: "Development • Design",
    image: "/images/smellbetter/smellbetter-card.webp",
    page: "/smellbetter/",
  },
];

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

import * as React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import DefaultLayout from "../components/layouts/DefaultLayout";
import ProjectIntro from "../components/portfolio/ProjectIntro";
import UserTabs from "../components/portfolio/UserTabs";
import BeforeAfter from "../components/portfolio/BeforeAfter";
import StickyGallery from "../components/portfolio/StickyGallery";
import RelatedProjects from "../components/portfolio/RelatedProjects";

const PageContent = {
  darkColor: "#0D0D29",
  lightColor: "#F3F4F6",
  accentColor: "#4B4CDC",
  accentColor2: "#4B4CDC",
  tagline: "Who are your devices talking to?",
  client: {
    clientName: "Consumer Reports",
    clientProject: "IoT Inspector",
  },
  role: [{ label: "UX Design" }, { label: "Web Development" }],
  team: [
    { member: "Jenny Vanderheiden" },
    { member: "Abby Ruminski" },
    { member: "Tom Beck" },
    { member: "Cody Nicoll" },
  ],
  featuredImage: "iot-featured.webp",
  objectiveHTML:
    "<p>In a world where everything is connected to the internet, it’s becoming more and more difficult to control your own data. The Princeton/NYU & Consumer Reports teams needed a brand new front-end experience for their Internet of Things inspector app to put that power back in users’ hands. First, they needed to rethink their user experience, and with some exciting new features on the way, we introduced some brand new concepts to help collect user research.</p><p>The IoT inspector allows users to actually see the location of connections their smart devices are making. Users will be able to monitor data usage, block specific connections, and contribute data to the global network, creating a more private ‘Internet of Things’ for everyone.</p>",
  userStories: [
    {
      user: "Data enthusiast",
      story:
        "This is a user that is very interested in numbers and data. Understanding  and visualizing data usage through the Smart Home and IoT is important to them for reasons of passion for the knowledge.",
    },
    {
      user: "Conscious consumer",
      story:
        "This is a user that is super conscious of their data usage. Whether they have a limited plan or they want to reduce their carbon footprint - tracking data usage is important to them.",
    },
    {
      user: "Security specialist",
      story:
        "This is a user where privacy and security comes first. They want to be aware of any hackers, devices sending data when they are not supposed to, or unknown devices that could be in the area that could cause a threat.",
    },
    {
      user: "Ad averse",
      story:
        "This user wants to be aware if any of their data is being sent to companies for advertising purposes. They do not want to be targeted for those sorts of activities.",
    },
    {
      user: "Academic Researcher",
      story:
        "This is a user that works in the field of Iot or technology and has interest in the research endeavors that utilize this crowdsourced data.",
    },
  ],
  beforeScreens: "/images/iot-inspector/iot-before.webp",
  afterScreens: "/images/iot-inspector/iot-after.webp",
  additionalTitle: "Research as a service",
  additionalSubTitle: "Thank you for sharing",
  additionalHTML:
    "<p>Most of the connections our smart devices make are obscured (because they’re not meant to be consumer facing). By scanning your own network and helping label your own devices, you contribute to an index of IoT smart devices users across the globe can use for their own privacy. Incentivizing users to share their data was achieved through color pattern reinforcement and an achievement system along with a robust onboarding process. </p>",
  additionalScreens: "/images/iot-inspector/iot-screens.webp",
  folderString: "iot-inspector",
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

const IotInspectorPage = () => {
  return (
    <DefaultLayout>
      <GatsbySeo
        title="Fostan • Who are your devices talking to?"
        description="This Case Study: Front-end development and UX overhaul, complete with new features for Consumer Reports' 'internet of things' inspector."
      />
      <div className="h-full w-full before:bg-[#0D0D29] bg-[#0D0D29]"> </div>
      <div className="hidden before:bg-[#4B4CDC] bg-[#4B4CDC] border-[#4B4CDC]"></div>
      <div className="hidden before:bg-[#F3F4F6] bg-[#F3F4F6]"></div>
      <ProjectIntro content={PageContent} />
      <UserTabs users={PageContent} />
      <BeforeAfter images={PageContent} />
      <StickyGallery images={PageContent} />
      <RelatedProjects projects={FeaturedProjects} />
    </DefaultLayout>
  );
};

export default IotInspectorPage;

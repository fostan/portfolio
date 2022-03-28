import * as React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import DefaultLayout from "../components/layouts/DefaultLayout";
import ProjectIntro from "../components/portfolio/ProjectIntro";
import UserTabs from "../components/portfolio/UserTabs";
import WebMockupScroll from "../components/portfolio/WebMockupScroll";
import BeforeAfter from "../components/portfolio/BeforeAfter";
import VideoFeature from "../components/portfolio/VideoFeature";
import StickyGallery from "../components/portfolio/StickyGallery";
import RelatedProjects from "../components/portfolio/RelatedProjects";

const PageContent = {
  darkColor: "#1F1D1D",
  lightColor: "#F5F4EE",
  accentColor: "#AD3F31",
  accentColor2: "#376996",
  tagline: "A new look at the 2020 election",
  client: {
    clientName: "Princeton University",
    clientProject: "2020 Election Emails",
  },
  role: [
    { label: "UX Design" },
    { label: "UI Design" },
    { label: "Web Development" },
  ],
  team: [
    { member: "Abby Ruminski" },
    { member: "Tom Beck" },
    { member: "Cody Nicoll" },
  ],
  featuredImage: "",
  objectiveHTML:
    "<p>The teams at Princeton University and The Center for Information Technology Policy have amassed a corpus of nearly a million emails from candidates and organizations running for office in 2020. The catalog on its own is dense and difficult to parse through unless one knows specifically what they’re searching for.</p><p>We set out to not only improve the email-treasure-hunting experience, but create added value in educating users about the findings as a whole with interactive data visualizations & infographics. In addition, we created an extendable design system to implement as research continues throughout other election cycles.</p>",
  userStories: [
    {
      user: "Political journalist",
      story:
        "Journalists need to be able to search the database using complex and/or logic statements. They may also find benefit in searching through metadata and other methods that create easy benchmarks to compare findings",
    },
    {
      user: "Politically interested",
      story:
        "This user is less search inclined and isn’t likely to comb through the database. They’re takeaways are interesting findings from the research team and engaging data visualizations.",
    },
    {
      user: "Academic Researcher",
      story:
        "Researchers will have a higher interest in reading through the team’s own research paper on their findings. They may require an easy to use route to search the database to get a scope of the data but would also like to find comparisons among the population. ",
    },
  ],
  beforeScreens: "/images/election-emails/election-emails-before.webp",
  afterScreens: "/images/election-emails/election-emails-after.webp",
  additionalScreens: "/images/election-emails/election-email-screens.webp",
};

const FeaturedProjects = [
  {
    title: "A new look at the 2020 election",
    client: "2020 US Election Emails",
    tags: "Dev • Design • UX",
    image: "/images/election-emails-card.jpg",
    page: "/2020-us-election-emails/",
  },
  {
    title: "Preventing Disaster with A.I.",
    client: "Kettle Reinsurance",
    tags: "Dev",
    image: "/images/election-emails-card.jpg",
    page: "/2020-us-election-emails/",
  },
];

const IndexPage = () => {
  return (
    <DefaultLayout>
      <GatsbySeo
        title="2020 US Election Emails"
        description="A new look at the 2020 election"
      />
      <div className="h-full w-full before:bg-[#F5F4EE] bg-[#F5F4EE]"> </div>
      <div className="hidden before:bg-[#AD3F31] bg-[#AD3F31]"></div>
      <div className="hidden before:bg-[#376996] bg-[#376996]"></div>
      <ProjectIntro content={PageContent} />
      <UserTabs users={PageContent} />
      <WebMockupScroll content={PageContent} />
      <BeforeAfter images={PageContent} />
      <VideoFeature />
      <StickyGallery images={PageContent} />
      <RelatedProjects projects={FeaturedProjects} />
    </DefaultLayout>
  );
};

export default IndexPage;

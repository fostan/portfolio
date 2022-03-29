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
  featuredImage: "election-email-featured.webp",
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
  webTitle: "The New Identity Politics",
  webSubtitle: "Web design Refresh",
  webHTML:
    "<p>In addition to improving the database UX, we refreshed the visual design site wide to a politically-inclusive palette with minimal distraction from the heart of our content. This refresh included the creation of different charts, data visualizations, and infographics.</p><p>While the project scope did not include a brand identity creation, we developed a brand system to extend across other election years and research topics for the Princeton Team to continue their research.</p>",
  beforeScreens: "/images/election-emails/election-emails-before.webp",
  afterScreens: "/images/election-emails/election-emails-after.webp",
  videoFeatureTitle: "Manipulative Tactics",
  videoFeatureSubTitle: "A vote for education",
  videoFeatureHTML:
    "<p>The researchers discovered dark UX patterns present in nearly half of all emails they received throughout the 2020 election. These ranged from forged replies to fake counters, meant to trick users into responding and sending money to campaigns and other political entities. In addition to searching the database, it was also imperative to educate users on these manipulations and teach them how to spot these tactics themselves.</p>",
  additionalTitle: "Searching the corpus",
  additionalSubTitle: "Leave no email unturned",
  additionalHTML:
    "<p>With nearly 1 million emails in the database we created a search experience to narrow down specific topics using conditional statements while preserving a simple and approachable search route for casual users. Using the corpus ourselves, we are also able to show trends based on political parties and individual senders at a glance.</p>",
  additionalScreens: "/images/election-emails/election-email-screens.webp",
  folderString: "election-emails",
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

const ElectionEmailPage = () => {
  return (
    <DefaultLayout>
      <GatsbySeo
        title="Fostan • 2020 US Election Emails"
        description="This Case Study: A refreshed look and search experience exploring a database of nearly every 2020 US eleciton email. Featuring front-end development, website design, and UX design."
      />
      <div className="h-full w-full before:bg-[#F5F4EE] bg-[#F5F4EE]"> </div>
      <div className="hidden before:bg-[#AD3F31] bg-[#AD3F31] border-[#AD3F31]"></div>
      <div className="hidden before:bg-[#376996] bg-[#376996]"></div>
      <ProjectIntro content={PageContent} />
      <UserTabs users={PageContent} />
      <WebMockupScroll content={PageContent} />
      <BeforeAfter images={PageContent} />
      <VideoFeature content={PageContent} />
      <StickyGallery images={PageContent} />
      <RelatedProjects projects={FeaturedProjects} />
    </DefaultLayout>
  );
};

export default ElectionEmailPage;

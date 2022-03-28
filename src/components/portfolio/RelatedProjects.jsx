import React from "react";

const projectDetails = [
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

const altLayout = ["md:mt-16", ""];

const RelatedProjects = () => {
  return (
    <section className="bg-gradient-to-tr from-gray-800 via-gray-900 to-black py-20 text-white">
      <div className="container max-w-4xl mx-auto grid md:grid-cols-3">
        <div className="md:order-last">
          <h2 className="text-7xl font-serif font-black">
            Other
            <br />
            Projects
          </h2>
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;

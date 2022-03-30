import React from "react";
import PortfolioCard from "../global/PortfolioCard";
import { Link } from "gatsby";

const altLayout = ["md:mt-16", ""];

const RelatedProjects = ({ projects }) => {
  return (
    <section className="bg-gradient-to-t from-gray-800 via-gray-900 to-black py-20 text-white">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-3 gap-8 lg:gap-16">
        <div className="md:order-last flex justify-center h-full flex-col mb-20 md:mb-0">
          <h2 className="text-7xl font-serif font-black">
            Related
            <br />
            Projects
          </h2>
          <Link
            to="/"
            className="underline text-primary hover:text-white hover:opacity-75 mt-6"
          >
            Or view all work
          </Link>
        </div>
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`${altLayout[index % altLayout.length]}`}
          >
            <PortfolioCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProjects;

import * as React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import HomeLayout from "../components/layouts/HomeLayout";
import BioText from "../components/ui/BioText";
import Filters from "../components/ui/Filters";
import ElectionEmails from "../components/portfolio-cards/ElectionEmails";

// markup
const IndexPage = () => {
  return (
    <HomeLayout>
      <div className="grid max-w-3xl py-16 mx-auto md:grid-cols-2 gap-16 px-4 overflow-x-hidden">
        <div
          className="flex flex-col py-4 md:py-10 md:col-span-2
        relative"
        >
          <BioText />
          <div className="absolute -bottom-[90px] -right-[175px] md:-top-1/2 md:right-0">
            <Filters />
          </div>
          <div className="absolute -bottom-[90px] -right-[175px] md:-top-1/2 md:right-0">
            <img
              src="/images/header-glow.png"
              className="object-fit inset-0 max-w-[400px] scale-150"
              alt=""
            />
          </div>
        </div>
        {/* <div className="p-4 text-white">
          <Filters />
        </div> */}
        <ElectionEmails />
        <ElectionEmails />
        <ElectionEmails />
        <ElectionEmails />
      </div>
    </HomeLayout>
  );
};

export default IndexPage;

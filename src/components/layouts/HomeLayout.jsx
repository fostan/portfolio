import React from "react";
import { Helmet } from "react-helmet";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en-US" }} />
      <main className="relative w-2.5bg-gradient-to-tr from-[#DEDCDB]  to-[#F2EBEA] min-h-screen">
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;

import React, { Children } from "react";

const DefaultLayout = ({ title, children }) => {
  return (
    <>
      <main className="relative w-2.5bg-gradient-to-tr from-[#DEDCDB]  to-[#F2EBEA] min-h-screen">
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;

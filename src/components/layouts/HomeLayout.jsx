import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <main className="relative w-2.5bg-gradient-to-tr from-[#DEDCDB]  to-[#F2EBEA] min-h-screen">
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;

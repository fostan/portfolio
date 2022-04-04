import React, { Children } from "react";

const DefaultLayout = ({ title, children }) => {
  return (
    <>
      <main className="bg-gradient-to-t from-gray-700  to-neutral-800">
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;

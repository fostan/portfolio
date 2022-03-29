import React, { Children } from "react";

const DefaultLayout = ({ title, children }) => {
  return (
    <>
      <main className="bg-gradient-to-t from-gray-800  to-black">
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;

import React from "react";
import Navigation from "../global/Navigation";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;

import React, { Children } from "react";
import Navigation from "../global/Navigation";

const DefaultLayout = ({ title, children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;

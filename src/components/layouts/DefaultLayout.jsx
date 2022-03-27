import React, { Children } from "react";
import Navigation from "../global/Navigation";
import { Helmet } from "react-helmet";

const DefaultLayout = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fostan</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;

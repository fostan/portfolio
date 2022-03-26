import React from "react";
import { MailIcon } from "@heroicons/react/outline";

const BioText = () => {
  return (
    <>
      <h1 className="text-white text-hero">Fostan</h1>
      <p className="text-primary">
        Front end development & design&nbsp;
        <a
          href="https://ocupop.com/"
          className="underline hover:opacity-75 hover:text-white transition"
          target="_blank"
          rel="noreferrer"
        >
          @ocupop
        </a>
      </p>
      <p className="text-primary hover:text-white   flex items-center">
        <a
          href="mailto: nathanielfostan@gmail.com"
          className="underline hover:opacity-75 transition flex"
        >
          <MailIcon className="w-5 mr-2" />
          Send a message
        </a>
      </p>
    </>
  );
};

export default BioText;

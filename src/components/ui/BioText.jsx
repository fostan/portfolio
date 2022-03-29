import React from "react";
import { MailIcon } from "@heroicons/react/outline";

const BioText = () => {
  return (
    <>
      <h1 className="text-white mx-auto text-7xl lg:text-9xl uppercase tracking-widest">
        Fostan
      </h1>
      <div className="max-w-9xl grid md:grid-cols-3 gap-8">
        <p className="text-md uppercase text-gray-600">
          User Experience design
        </p>
        <p className="text-md uppercase text-gray-600">
          User Experience design
        </p>
        <p className="text-md uppercase text-gray-600">
          User Experience design
        </p>
      </div>
      {/* <p className="text-primary">
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
      </p> */}
    </>
  );
};

export default BioText;

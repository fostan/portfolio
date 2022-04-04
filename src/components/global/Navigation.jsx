import React from "react";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <header className="bg-gray-900 border-b-2 border-gray-800">
      <div className="container max-w-6xl flex justify-center text-sky-100 hover:text-white mx-auto ">
        <Link
          to="/"
          className="-mb-[2px]	p-3 font-serif text-sm uppercase tracking-widest font-black border-b-2 opacity-50 border-transparent hover:border-neutral-400 hover:opacity-100 transition-all"
        >
          Fostan
        </Link>
      </div>
    </header>
  );
};

export default Navigation;

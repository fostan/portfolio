import React from "react";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <header className="bg-gray-900 border-b-2 border-gray-800">
      <div className="container max-w-6xl flex justify-center text-white mx-auto ">
        <Link
          to="/"
          className="-mb-[2px]	p-3 font-serif text-xl font-black tracking-wide border-b-2 opacity-50 border-transparent hover:border-primary hover:opacity-100 transition-all"
        >
          Fostan
        </Link>
      </div>
    </header>
  );
};

export default Navigation;

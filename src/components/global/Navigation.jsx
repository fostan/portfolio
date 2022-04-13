import React from "react";
import { Link } from "gatsby";
import { RiArrowGoBackFill } from "react-icons/ri";

const Navigation = () => {
  return (
    <header className="bg-dark border-b-2 border-dark">
      <div className="container max-w-6xl flex justify-center text-sky-100 transition duration-300 hover:text-white mx-auto ">
        <Link
          to="/"
          className="-mb-[2px] group p-3 font-serif text-sm tracking-widest font-black border-b-2 opacity-50 border-transparent hover:border-neutral-400 hover:opacity-100 transition-all w-3/4 text-center"
        >
          <div className="flex justify-center gap-2 items-center transition">
            <RiArrowGoBackFill className="w-4 h-4 -ml-4 opacity-0 duration-300 group-hover:opacity-100" />
            Fostan
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navigation;

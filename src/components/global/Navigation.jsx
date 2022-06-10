import React from "react";
import { Link } from "gatsby";
import {
  RiHome6Line,
  RiHome6Fill,
  RiBriefcase2Line,
  RiBriefcase2Fill,
  RiMailSendLine,
  RiMailSendFill,
  RiMoonClearLine,
  RiMoonClearFill,
} from "react-icons/ri";

const Navigation = () => {
  return (
    <nav className="nav container px-0 mb-12 md:mb-36">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <Link to="/" className="nav-link group">
            <RiHome6Fill className="nav-link-icon  text-gray-300 opacity-0 group-hover:opacity-100 absolute" />
            <RiHome6Line className="nav-link-icon group-hover:opacity-0" />
            <span className="sr-only">Home</span>
          </Link>
          <Link to="/" className="nav-link group">
            <RiBriefcase2Fill className="nav-link-icon  text-gray-300 opacity-0 group-hover:opacity-100 absolute" />
            <RiBriefcase2Line className="nav-link-icon group-hover:opacity-0" />
            <span className="sr-only">Work</span>
          </Link>
          <Link to="/" className="nav-link group">
            <RiMailSendFill className="nav-link-icon  text-gray-300 opacity-0 group-hover:opacity-100 absolute" />
            <RiMailSendLine className="nav-link-icon group-hover:opacity-0" />
            <span className="sr-only">Contact</span>
          </Link>
        </div>
        <Link to="/" className="nav-link group">
          <RiMoonClearFill className="nav-link-icon  text-gray-300 opacity-0 group-hover:opacity-100 absolute" />
          <RiMoonClearLine className="nav-link-icon group-hover:opacity-0" />
          <span className="sr-only">Dark Mode</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;

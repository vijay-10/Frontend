import React from "react";
import { FiVideo } from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";
import { FiBox } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { BiLogoFacebookCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-6">
      <div className="flex flex-row items-center gap-6">
        <h1 className="font-bold">Dashboard</h1>
        <FiVideo />
        <FiAlertTriangle />
      </div>

      <div className="relative">
        <FiSearch className="text-slate-400 absolute top-[0.68rem] left-4"/>
        <input type="text" placeholder="Search for anything..." className="placeholder:text-slate-400 px-16 py-1 rounded-3xl border-2 border-light" />
      </div>

      <div className="flex flex-row items-center gap-6">
        <FiBox />
        <FiBell />
        <FiMessageCircle />
        <BiLogoFacebookCircle className="text-5xl"/>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { FiAirplay } from "react-icons/fi";
import { FiAperture } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiCodepen } from "react-icons/fi";
import { FiCopy } from "react-icons/fi";
import { FiFileMinus } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";

const Navigation = (props) => {
  return (
    <div className={props.className}>
      <div className="flex flex-col items-center gap-8 text-gray-600">
        <div class="w-10 h-10 rounded-full border-2 border-gray-200 flex justify-center items-center">
          <span class="text-2xl font-bold">S</span>
        </div>
        <div className="flex flex-col gap-6">
          <FiAirplay className="text-black"/>
          <FiAperture />
          <FiBookOpen />
          <FiCalendar />
          <FiCodepen />
          <FiCopy />
          <FiFileMinus />
        </div>
      </div>
      <div className="text-gray-600">
        <FiDownload />
      </div>
    </div>
  );
};

export default Navigation;

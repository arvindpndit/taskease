import React from "react";
import { IoMdNotifications } from "react-icons/io";

const CommonHeader = ({ heading }) => {
  return (
    <div className="w-full md:w-4/5 mx-auto md:px-6 lg:px-8 mb-4 md:mb-6">
      <div className="sticky top-0 flex justify-between items-center backdrop-filter backdrop-blur-md  p-4 ">
        <div className="flex items-center">
          <h2 className=" text-xl md:text-2xl font-bold">{heading}</h2>
        </div>

        <h3 className="text-2xl text-gray-800">
          <IoMdNotifications />
        </h3>
      </div>
      <div className="px-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full mt-2 md:mt-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-slate-300  "
        />
      </div>
    </div>
  );
};

export default CommonHeader;

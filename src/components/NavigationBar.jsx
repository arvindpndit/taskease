import React from "react";
import { FaHome, FaTasks, FaSearch, FaEnvelope, FaUser } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <div class="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full md:w-4/5 mx-auto md:px-6 lg:px-8 backdrop-filter backdrop-blur-md p-5">
      <ul className="flex justify-between text-lg font-semibold">
        <li>
          <FaHome />
        </li>
        <li>
          <FaTasks />
        </li>
        <li>
          <FaSearch />
        </li>
        <li>
          <FaEnvelope />
        </li>
        <li>
          <FaUser />
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;

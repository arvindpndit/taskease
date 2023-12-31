import React from "react";
import { FaHome, FaTasks, FaSearch, FaEnvelope, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full md:w-4/5 mx-auto md:px-6 lg:px-8 bg-white  p-5">
      <div className="flex justify-between text-xl  font-semibold">
        <Link to="/">
          <FaHome />
        </Link>
        <Link to="/tasks">
          <FaTasks />
        </Link>
        <Link to="/search">
          <FaSearch />
        </Link>
        <Link to="messages">
          <FaEnvelope />
        </Link>
        <Link to="/profile">
          <FaUser />
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;

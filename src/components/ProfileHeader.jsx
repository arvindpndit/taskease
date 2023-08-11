import React from "react";
import { IoMdNotifications } from "react-icons/io";

const ProfileHeader = () => {
  return (
    <div>
      <div className="sticky top-0 flex justify-between items-center backdrop-filter backdrop-blur-md p-4">
        <div className="flex items-center">
          <h2 className="text-xl md:text-2xl font-bold">Profile</h2>
        </div>

        <h3 className="text-2xl text-gray-800">
          <IoMdNotifications />
        </h3>
      </div>

      <div className="p-4 flex space-x-2 md:space-x-4 border">
        <img
          src="/assets/images/dp/1.jpg"
          alt="Profile"
          className="rounded-full w-24 h-24"
        />
        <div className="text-left">
          <div className="font-semibold text-lg md:text-xl">Arvind</div>
          <div className="text-sm md:text-base  text-gray-500">4.8 stars</div>
          <div className="text-sm md:text-base  text-gray-500">
            99% completion rate
          </div>
          <div className="text-sm md:text-base  text-gray-500">
            Dehradun, India
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

import React from "react";
import {
  IoLocationOutline,
  IoCalendarOutline,
  IoTimeOutline,
} from "react-icons/io5";

const TaskList = () => {
  return (
    <div className=" w-full md:w-4/5 mx-auto lg:px-8  md:mb-6 px-2 md:px-4 pb-14">
      <div className="space-y-6 md:px-2 ">
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              Convert .jsx files to .tsx
            </h3>
            <p className="text-gray-600 text-base">Rs 650</p>
          </div>

          <p className="text-gray-500 flex items-center">
            <IoLocationOutline className="mr-1 text-gray-400" />
            Remote
          </p>
          <p className="text-gray-500 flex items-center">
            <IoCalendarOutline className="mr-1 text-gray-400" />
            28, October, 2023
          </p>
          <p className="text-gray-500 flex items-center">
            <IoTimeOutline className="mr-1 text-gray-400" />
            Anytime
          </p>
          <button className="text-green-500 font-medium  ">DRAFT</button>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              Implement live chat feature
            </h3>
            <p className="text-gray-600 text-base">Rs 1650</p>
          </div>

          <p className="text-gray-500 flex items-center">
            <IoLocationOutline className="mr-1 text-gray-400" />
            Sector 5, New Delhi
          </p>
          <p className="text-gray-500 flex items-center">
            <IoCalendarOutline className="mr-1 text-gray-400" />
            28, August, 2023
          </p>
          <p className="text-gray-500 flex items-center">
            <IoTimeOutline className="mr-1 text-gray-400" />
            Anytime
          </p>
          <button className="text-blue-500 font-medium  ">COMPLETED</button>
        </div>

        <div className="border rounded-lg p-4 ">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Fix Bugs</h3>
            <p className="text-gray-600 text-base">Rs 1950</p>
          </div>

          <p className="text-gray-500 flex items-center ">
            <IoLocationOutline className="mr-1 text-gray-400" />
            Remote
          </p>
          <p className="text-gray-500 flex items-center">
            <IoCalendarOutline className="mr-1 text-gray-400" />
            28, October, 2020
          </p>
          <p className="text-gray-500 flex items-center">
            <IoTimeOutline className="mr-1 text-gray-400" />
            Anytime
          </p>
          <button className="text-orange-500 font-medium  ">POSTED</button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;

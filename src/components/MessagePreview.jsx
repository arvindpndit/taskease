import React from "react";

const MessagePreview = ({ name, text, dp }) => {
  return (
    <div className="flex  items-center  gap-2 md:gap-4 py-3 w-full md:w-4/5 mx-auto px-2 md:px-6 lg:px-8 hover:bg-slate-50 rounded-md">
      <div className="w-12 h-12 md:w-16 md:h-16">
        <img
          src={dp}
          alt="Profile"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 ">
        <div className="font-semibold text-base">{name}</div>
        <div className="text-xs md:text-sm text-gray-600">{text}</div>
      </div>
      <div className="text-xs md:text-sm text-gray-400">Wed</div>
    </div>
  );
};

export default MessagePreview;

import React from "react";

const MessagePreview = () => {
  return (
    <div className="flex  items-center  gap-2 md:gap-4 py-3 w-full md:w-4/5 mx-auto px-2 md:px-6 lg:px-8 ">
      <div className="w-12 h-12 md:w-16 md:h-16">
        <img
          src="../../public/assets/images/avatar.png"
          alt="Profile"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 ">
        <div className="font-semibold text-base">arvind 🌻</div>
        <div className="text-xs md:text-sm text-gray-600">
          Hi, I'm happy to help today. I build applications which eventually
          makes the lives of humans easy.
        </div>
      </div>
      <div className="text-xs md:text-sm text-gray-400">Wed</div>
    </div>
  );
};

export default MessagePreview;

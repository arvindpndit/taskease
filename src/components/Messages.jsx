import React from "react";
import CommonHeader from "./CommonHeader";
import MessagePreview from "./MessagePreview";

const Messages = () => {
  return (
    <div>
      <CommonHeader heading={"Messages"} />
      {Array(12)
        .fill("")
        .map((index) => {
          return <MessagePreview />;
        })}
    </div>
  );
};

export default Messages;

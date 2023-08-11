import React from "react";
import CommonHeader from "./CommonHeader";
import MessagePreview from "./MessagePreview";

const messages = [
  {
    name: "arvind",
    message: `Hi, I'm Arvind. I'm passionate about crafting software solutions that make the world a better place.`,
    profilePic: ".../../public/assets/images/dp/1.jpg",
  },
  {
    name: "shreya",
    message: `Hey, this is Shreya. I enjoy creating applications that simplify people's lives and bring joy.`,
    profilePic: ".../../public/assets/images/dp/2.jpg",
  },
  {
    name: "prashant",
    message: `Hello, I'm Prashant. I love building applications that have a positive impact on society.`,
    profilePic: ".../../public/assets/images/dp/3.jpg",
  },
  {
    name: "kartic",
    message: `Greetings, I'm Kartic. My goal is to develop applications that enhance human experiences and productivity.`,
    profilePic: ".../../public/assets/images/dp/4.jpg",
  },
  {
    name: "sara",
    message: `Hey there, I'm Sara. I'm dedicated to building user-centered applications that foster meaningful interactions.`,
    profilePic: ".../../public/assets/images/dp/5.png",
  },
  {
    name: "meg",
    message: `Hi, I'm Meg. I'm passionate about creating intuitive applications that simplify complex tasks.`,
    profilePic: ".../../public/assets/images/dp/6.jpg",
  },
  {
    name: "piyush",
    message: `Hello, I'm Piyush. I enjoy developing innovative applications that push the boundaries of technology.`,
    profilePic: ".../../public/assets/images/dp/7.png",
  },
  {
    name: "olivia",
    message: `Greetings, I'm Olivia. My focus is on crafting applications that enrich people's lives through creativity and efficiency.`,
    profilePic: ".../../public/assets/images/dp/8.jpg",
  },
];

const Messages = () => {
  return (
    <div>
      <CommonHeader heading={"Messages"} />
      {Array(8)
        .fill("")
        .map((_, index) => {
          return (
            <MessagePreview
              name={messages[index].name}
              text={messages[index].message}
              dp={messages[index].profilePic}
            />
          );
        })}
    </div>
  );
};

export default Messages;

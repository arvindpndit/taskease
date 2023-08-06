import React from "react";
import Header from "./Header";
import Slogan from "./Slogan";
import TaskCategories from "./TaskCategories";
import HomeFooter from "./HomeFooter";

const LandingPage = () => {
  return (
    <div className="w-full md:w-4/5 mx-auto md:px-6 lg:px-8 mb-20">
      <Header />
      <Slogan />
      <TaskCategories />
      <HomeFooter />
    </div>
  );
};

export default LandingPage;

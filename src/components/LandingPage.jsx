import React from "react";
import Header from "./Header";
import Slogan from "./Slogan";
import TaskCategories from "./TaskCategories";

const LandingPage = () => {
  return (
    <div class=" md:p-6 lg:p-8">
      <Header />
      <Slogan />
      <TaskCategories />
    </div>
  );
};

export default LandingPage;

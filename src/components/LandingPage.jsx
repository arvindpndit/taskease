import React from "react";
import Header from "./Header";
import Slogan from "./Slogan";
import TaskCategories from "./TaskCategories";

const LandingPage = () => {
  return (
    <div class="w-full md:w-4/5 mx-auto md:px-6 lg:px-8">
      <Header />
      <Slogan />
      <TaskCategories />
    </div>
  );
};

export default LandingPage;

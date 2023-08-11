import React from "react";
import CommonHeader from "./CommonHeader";
import TaskList from "./TaskList";

const Tasks = () => {
  return (
    <div>
      <CommonHeader heading={"My Tasks"} />
      <TaskList />
    </div>
  );
};

export default Tasks;

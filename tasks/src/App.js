import React, { useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import AllTasks from "./components/Tasklist/AllTasks";
import ClearList from "./components/ClearList/ClearList";

const DUMMY_DATA = [{ task: "Feed The dog", id: Math.random() }];

const App = () => {
  const [tasks, setTask] = useState(DUMMY_DATA);

  const taskListHandler = (totalTasks) => {
    setTask((prevTasks) => {
      return [totalTasks, ...prevTasks];
    });
  };

  const deleteTaskHandler = (totalTasks) => {
    setTask((prevTasks) => {
      const emptyTask = [totalTasks, ...prevTasks];
      return emptyTask.filter((task) => task.id > 1);
    });
  };

  const deleteItemHandler = (taskID) => {
    setTask((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskID);
    });
  };

  return (
    <div>
      <TaskForm onSaveTasksList={taskListHandler} />
      <ClearList onPress={deleteTaskHandler}></ClearList>
      <AllTasks items={tasks} delete={deleteItemHandler}></AllTasks>
    </div>
  );
};

export default App;

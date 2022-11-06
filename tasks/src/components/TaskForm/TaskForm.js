import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./TaskForm.css";

const TaskForm = (props) => {
  const [addedTask, setEnteredTask] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTasks = {
      task: addedTask,
      id: Math.random(),
    };

    if (enteredTasks.task.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onSaveTasksList(enteredTasks);
    setEnteredTask("");
  };

  return (
    <Card className="form-container">
      <form className = {`content ${!isValid ? 'invalid' : ''}`}onSubmit={submitHandler}>
        <label>Task:</label>
        <input type="text" value={addedTask} onChange={inputHandler}></input>
        <Button>Add Task</Button>
      </form>
    </Card>
  );
};

export default TaskForm;

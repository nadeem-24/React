import React from "react";
import Card from "../UI/Card";
import "./TaskList.css";

const TaskList = (props) => {
  const deleteTask = () => {
    props.deleteIndTask(props.id);
  };

  return (
    <React.Fragment>
      <Card className="list-container">
        <p>{props.title}</p>
        <button onClick={deleteTask}>Delete</button>
      </Card>
    </React.Fragment>
  );
};

export default TaskList;

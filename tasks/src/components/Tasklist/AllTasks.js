import React from "react";
import TaskList from "./TaskList";
import Error from "../Error/Error";

const AllTasks = (props) => {
  return (
    <React.Fragment>
      {props.items.length === 0 ? (
        <Error>Please Add some tasks.</Error>
      ) : (
        props.items.map((tasks) => (
          <TaskList
            key={tasks.id}
            id={tasks.id}
            title={tasks.task}
            deleteIndTask={props.delete}
          />
        ))
      )}
    </React.Fragment>
  );
};

export default AllTasks;

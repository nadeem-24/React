import TaskList from "./TaskList";
import Error from "../Error/Error";

const AllTasks = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default AllTasks;

import Card from "../UI/Card";
import "./TaskList.css";

const TaskList = (props) => {

    const deleteTask = () => {
        props.deleteIndTask(props.id);
    }
    
    return(
            <Card className="list-container">
                <p>{props.title}</p>
                <button onClick={deleteTask}>Delete</button>
            </Card>
    );
}

export default TaskList;
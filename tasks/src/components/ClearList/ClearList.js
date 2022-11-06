import "./ClearList.css";
import Button from "../UI/Button";
const ClearList = (props) => {

  return (
  <div className="list-clear" onClick={props.onPress}>
    <Button>
        Clear All Tasks
    </Button>
  </div>
  );
};

export default ClearList;
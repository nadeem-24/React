import ExpenseDate from "./ExpenseDate";
import ExpenseText from "./ExpenseText";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}></ExpenseDate>
      <ExpenseText title = {props.title}/>
      <div className="expense-amount">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;

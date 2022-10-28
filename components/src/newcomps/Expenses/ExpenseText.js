import "./ExpenseText.css";

const ExpenseText = (props)  => {
    return (
        <div className="expense-text">
            <h2>{props.title}</h2>
        </div>
    );
}

export default ExpenseText;
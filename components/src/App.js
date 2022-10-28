import ExpenseItem from "./newcomps/Expenses/ExpenseItem";

const App = () => {
  const expenses = [
    { title: "Car insurance", amount: 240.53, date: new Date(2022, 10, 11) },
    { title: "Bike insurance", amount: 53.43, date: new Date(2021, 3, 23) },
    { title: "Home insurance", amount: 0.53, date: new Date(2022, 10, 11) },
    { title: "Life insurance", amount: 3430.53, date: new Date(2022, 5, 8) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
      title={expenses[0].title }
      amount ={expenses[0].amount} 
      date ={expenses[0].date}>
      </ExpenseItem>

      <ExpenseItem
      title={expenses[1].title }
      amount ={expenses[1].amount} 
      date ={expenses[1].date}>
      </ExpenseItem>

      <ExpenseItem
      title={expenses[2].title }
      amount ={expenses[2].amount} 
      date ={expenses[2].date}>
      </ExpenseItem>

      <ExpenseItem
      title={expenses[3].title }
      amount ={expenses[3].amount} 
      date ={expenses[3].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;

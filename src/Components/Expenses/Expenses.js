import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem
          name={expense.name}
          date={expense.date}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;

import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        name={props.items[0].name}
        date={props.items[0].date}
        amount={props.items[0].amount}
      ></ExpenseItem>

      <ExpenseItem
        name={props.items[1].name}
        date={props.items[1].date}
        amount={props.items[1].amount}
      ></ExpenseItem>

      <ExpenseItem
        name={props.items[2].name}
        date={props.items[2].date}
        amount={props.items[2].amount}
      ></ExpenseItem>

      <ExpenseItem
        name={props.items[3].name}
        date={props.items[3].date}
        amount={props.items[3].amount}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;

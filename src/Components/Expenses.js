import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = () => {
  const items = [
    { id: "i1", name: "Car", date: new Date(2020, 1, 13), amount: 200 },
    { id: "i2", name: "PC", date: new Date(2021, 11, 23), amount: 400 },
    { id: "i3", name: "Pen", date: new Date(2023, 12, 12), amount: 600 },
    { id: "i4", name: "Book", date: new Date(2022, 5, 17), amount: 900 },
  ];
  return (
    <div className="expenses">
      <ExpenseItem
        name={items[0].name}
        date={items[0].date}
        amount={items[0].amount}
      ></ExpenseItem>

      <ExpenseItem
        name={items[1].name}
        date={items[1].date}
        amount={items[1].amount}
      ></ExpenseItem>

      <ExpenseItem
        name={items[2].name}
        date={items[2].date}
        amount={items[2].amount}
      ></ExpenseItem>

      <ExpenseItem
        name={items[3].name}
        date={items[3].date}
        amount={items[3].amount}
      ></ExpenseItem>
    </div>
  );
};

export default Expenses;

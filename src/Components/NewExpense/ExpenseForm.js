import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInputs, setUserInputs] = useState({
  //     name: '',
  //     amount: '',
  //     date: ''
  // });
  const nameHandler = (e) => {
    setEnteredName(e.target.value);
    // setUserInputs({
    //     ...userInputs,
    //     name: e.target.value
    // })
  };

  const amountHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInputs({
    //     ...userInputs,
    //     amount: e.target.value
    // })
  };

  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
    //  setUserInputs({
    //     ...userInputs,
    //     name: e.target.value
    // })

    // setUserInputs((preState) => {
    //     return ({...preState,enteredName: e.target.value})
    // })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const inputData = {
      name: enteredName,
      amount: enteredAmount,
      date: enteredDate,
    };
    props.getData(inputData);

    setEnteredAmount('');
    setEnteredDate('');
    setEnteredName('');

  };


  return (
    <form action="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Name </label>
          <input type="text" value={enteredName} onChange={nameHandler} />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input type="number" value={enteredAmount} onChange={amountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateHandler} />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

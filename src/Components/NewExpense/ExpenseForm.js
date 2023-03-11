import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enterdAmount, setEnteredAmount] = useState('');
    const [enterdDate, setEnteredDate] = useState('');
    const nameHandler = (e) => {
        setEnteredName(e.target.value);
    }

    const amountHandler = (e) =>{
        setEnteredAmount(e.target.value);
    }

    const dateHandler = (e) => {
        setEnteredDate(e.target.value);
    }

    return(
       <form action="">
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label> Name </label>
            <input type="text" onChange={nameHandler}/>
            </div>
            <div className='new-expense__control'>
                <label> Amount </label>
            <input type="number" onChange={amountHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
            <input type="date" onChange={dateHandler} />
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
       </form>
    );
}

export default ExpenseForm;

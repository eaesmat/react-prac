import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem = (props) => {
    const [name, setName] = useState(props.name);

  const clickHandler = () => {
    setName('Updated Name');
  };
    return (
        <Card className='expense-item'>
            <div className=''>
                {<ExpenseDate date = {props.date}></ExpenseDate>}
            </div>
            <div className='expense-item__description'>
                <h2>{name}</h2>
            </div>

            <div className='expense-item__price'>
                {props.amount}
            </div>
            <button onClick={clickHandler}>Cick Me </button>
        </Card>
    );
}

export default ExpenseItem;

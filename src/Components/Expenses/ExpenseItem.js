import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const clickHandler = () => {
    console.log('clickHandler');
  };
    return (
        <Card className='expense-item'>
            <div className=''>
                {<ExpenseDate date = {props.date}></ExpenseDate>}
            </div>
            <div className='expense-item__description'>
                <h2>{props.name}</h2>
            </div>

            <div className='expense-item__price'>
                {props.amount}
            </div>
            <button onClick={clickHandler}>Cick Me </button>
        </Card>
    );
}

export default ExpenseItem;

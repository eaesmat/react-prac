import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const getData = (data) => {
        const newExpenseData = {
            ...data,
            id: Math.random().toString()
        }
        // console.log(newExpenseData);
        props.getData(newExpenseData);
    }

    return(
        <div className='new-expense'>
            <ExpenseForm getData = {getData} />
        </div>

    );
}

export default NewExpense;

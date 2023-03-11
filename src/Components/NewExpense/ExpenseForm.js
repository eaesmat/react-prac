import './ExpenseForm.css';

const ExpenseForm = () => {

    const nameHandler = (e) => {
        console.log(e.target.value);
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
            <input type="number" />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
            <input type="date" />
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
       </form>
    );
}

export default ExpenseForm;

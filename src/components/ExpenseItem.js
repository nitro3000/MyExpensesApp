import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    //const expenseDate = new Date(2021, 2, 28); <!--div> {props.date.toISOString()} </div> 
    //const expenseTitle = "Car Insurance";
    //const expenseAmount = 294.67; 
    //<!--<div> {props.date.toISOString()} </div>
    // const month = props.date.toLocaleString('en-US', {month:'long'})
    // const day = props.date.toLocaleString('en-US', {day:'2-digit'})
    // const year = props.date.getFullYear();
    return (
        <div className="expense-item">
            <ExpenseDate date = {props.date}></ExpenseDate>
      {/*  <div>
                <div> {month} </div>
                <div> {day} </div> 
                <div> {year}</div> 
            </div> */}
            <div className="expense-item__description"><h2>{props.title}</h2> </div>
            <div className="expense-item__price" >${props.amount} </div>
        </div>
    );
}

export default ExpenseItem;
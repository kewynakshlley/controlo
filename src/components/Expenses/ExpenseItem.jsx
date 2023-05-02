import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React from 'react';

function ExpenseItem(props) {
  return (
    <li>
      <div className="expense-item">
        <div className="exp-container">
          <ExpenseDate date={props.date} />
          <div className="expense-el exp-title"> {props.title} </div>
        </div>

        <div className="expense-el exp-amount"> {props.amount}$ </div>
      </div>
    </li>
  );
}

export default ExpenseItem;

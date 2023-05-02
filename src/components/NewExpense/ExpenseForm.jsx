import './ExpenseForm.css';
import React, { useState } from 'react';

function NewExpense(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onExpenseSubmitted(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    props.changeState();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control__title">
          <label className="input-title">Title</label>
          <input
            className="input-field"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control__amount">
          <label className="input-title">Amount</label>
          <input
            className="input-field"
            type="number"
            min="0.00"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control__date">
          <label className="input-title">Date</label>
          <input
            className="input-field"
            type="date"
            min="2023-01-01"
            max="2028-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>

        <div className="new-expense__actions">
          <button className="btn" type="cancel">
            Cancel
          </button>
          <button className="btn" type="submit" onClick={props.changeState}>
            Add expense
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewExpense;

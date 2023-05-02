import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react';

function NewExpense(props) {
  const [newExpenseState, setNewExpenseState] = useState(false);
  const saveExpenseHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const stateHandler = () => {
    setNewExpenseState((prev) => {
      return !prev;
    });
  };

  let displayMode = (
    <button className="btn" onClick={stateHandler}>
      Add expense
    </button>
  );

  if (newExpenseState) {
    displayMode = (
      <ExpenseForm
        changeState={stateHandler}
        onExpenseSubmitted={saveExpenseHandler}
      />
    );
  }

  return <div className="form-container">{displayMode}</div>;
}

export default NewExpense;

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';
import ExpensestList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState('2023');

  const retrieveSelectedYear = (selectedYear) => {
    setEnteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div className="expenses-container">
      <ExpensesFilter
        selected={enteredYear}
        onSelectedYear={retrieveSelectedYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensestList items={filteredExpenses} />
    </div>
  );
}

export default Expenses;

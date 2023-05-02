import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react';

const DUMMY_DATA = [
  {
    id: '1',
    title: 'Car insurence',
    amount: 234.43,
    date: new Date(2023, 2, 9),
  },
  { id: '2', title: 'Groceries', amount: 78.23, date: new Date(2023, 3, 12) },
  { id: '3', title: 'Gas', amount: 45.67, date: new Date(2022, 2, 14) },
];

function App() {
  const [expenses, setExpense] = useState(DUMMY_DATA);

  const addExpenseHandler = (newExpense) => {
    setExpense((previousExpense) => {
      return [newExpense, ...previousExpense];
    });
  };
  return (
    <div className="base_container">
      <div className="container">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;

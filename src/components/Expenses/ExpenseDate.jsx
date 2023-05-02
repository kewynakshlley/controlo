import './ExpenseDate.css';

function ExpenseDate(props) {
  const day = props.date.getDate();
  const month = props.date.toLocaleString('en-US', { month: 'short' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-el exp-date">
      <div className="exp-month">{month}</div>
      <div className="exp-year">{year}</div>
      <div className="exp-day">{day}</div>
    </div>
  );
}

export default ExpenseDate;

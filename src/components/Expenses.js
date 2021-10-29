import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
  const expenses = [
    { title: "Car Insurence", amount: 294.67, date: new Date(2021, 3, 28) },
    { title: "Car green card", amount: 104.99, date: new Date(2021, 3, 28) },
    { title: "Starting cabels", amount: 29.37, date: new Date(2021, 3, 28) },
    { title: "Brakes", amount: 354.00, date: new Date(2021, 3, 28) },
    { title: "Tyre", amount: 120, date: new Date(2021, 3, 28) },
    { title: "Engine", amount: 29000, date: new Date(2021, 3, 28) },
    { title: "Oils and fluids", amount: 294.67, date: new Date(2021, 3, 28) },
    { title: "Damping", amount: 554.67, date: new Date(2021, 3, 28) },
  ];
  const expenseComponents = expenses.map((x) => (
    <ExpenseItem key={x.title + x.amount} title={x.title} amount={x.amount} date={x.date} />
  ));

  return <div className="expenses">{expenseComponents}</div>;
};

export default Expenses;

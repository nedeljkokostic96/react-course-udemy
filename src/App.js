import Expenses from "./components/Expenses.js";
import NewExpense from "./components/NewExpense.js";

function App() {
  return (
    <div className="App">
      <NewExpense />
      <Expenses />
    </div>
  );
}

export default App;

import './App.css';
import UserForm from './components/Users/UserForm.js';
import UserList from './components/Users/UserList.js';
import ExpenseList from './components/Expenses/ExpenseList';
import AddExpenseForm from './components/Expenses/AddExpenseForm';
//import userList from './data.js';
//import expenseList from './data.js';

function App() {
  return (
    <>
      <UserList/>
      <UserForm/>
      <ExpenseList/>
      <AddExpenseForm/>
    </>
    );

}





export default App;

import './App.css';
import UserList from './components/Users/UserList.js';
import ExpenseList from './components/Expenses/ExpenseList';
import AddExpenseForm from './components/Expenses/AddExpenseForm';
import CompanyExpensesList from './components/CompanyExpenses/CompanyExpenseList';
import {
    userList,
    expenseList,
} from './data.js';
import { useState, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './routes/layout';
import { v4 as uuidv4 } from 'uuid';




//userList displays be default
//have buttons to show different tables
//UserList - All Expenses - Company Expenses


function App() {
  //initial lists
  const [ulist, setUlist] = useState(userList);
  const [explist, setExplist] = useState(expenseList);


return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={
        <UserList 
        ulist={ulist}
        setUlist={setUlist}
        explist={explist}
        setExplist={setExplist} />} />
    <Route path="expenses" element={
        <ExpenseList 
        ulist={ulist}
        setUlist={setUlist}
        explist={explist}
        setExplist={setExplist} />} />
    <Route path="companyexpenses" element={
        <CompanyExpensesList 
        explist={explist}/>} />
    </Route>
  </Routes>
</BrowserRouter>
);



}





export default App;

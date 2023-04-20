import './App.css';
import UserList from './components/Users/UserList.js';
import ExpenseList from './components/Expenses/ExpenseList';
import CompanyExpensesList from './components/CompanyExpenses/CompanyExpenseList';
import {
    userList,
    expenseList,
} from './data.js';
import { useState, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './routes/layout';




//browser router for single page app

function App() {
  //initial lists
  //ulist = user hash table
  const [ulist, setUlist] = useState(userList);
  //explist = expense hash table
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

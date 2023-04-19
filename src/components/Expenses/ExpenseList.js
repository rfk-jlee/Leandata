import React from 'react'
import ExpenseItem from './ExpenseItem';
//import user data based off the ids that match
 
const expenseList =[
    {
        userId:12,
        expenseId: 313,
        fullname: 'Jonathan Lee',
        category: 'food',
        description: 'had dinner with client',
        cost: 130.31   
    },
    {
        userId:12,
        expenseId: 314,
        fullname:'Jonathan Lee',
        category: 'travel' ,
        description: 'had dinner with client',
        cost: 50.00
    }
];


const ExpenseList = () => {
    function Mapping({expenses}){
        return expenses.map((expense) => (
          <ExpenseItem 
            fullname={expense.fullname} //fullname is userItem.firstname + userItem.lastname
            category={expense.category} 
            description = {expense.description}
            cost={expense.cost} //TEMPORARY - needs to link to expense data.
          />
        ));
    }



    return (
        <table>
          <tr>
            <th>Full Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Cost</th>
          </tr>
          <Mapping expenses={expenseList}/>
        </table>
      )
}

export default ExpenseList
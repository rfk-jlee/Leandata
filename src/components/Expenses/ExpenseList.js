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


const ExpenseList = ({explist, setExplist}) => {


  function Mapping({explist}){
    console.log('exp list lego')
    console.log(explist);
  
    return Object.entries(explist).map( 
      ([key, expense]) => {
         return <ExpenseItem 
          userId={expense.userId} 
          description={expense.description} 
          category={expense.category}
          cost={expense.cost}
        />

        } 
      )
    
  }


    return (
        <table>
          <tr>
            <th>Full Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Cost</th>
          </tr>
          <Mapping explist={explist}/>
        </table>
      )
}

export default ExpenseList
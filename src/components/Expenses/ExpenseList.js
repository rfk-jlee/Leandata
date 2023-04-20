import React from 'react'
import ExpenseItem from './ExpenseItem';
//import user data based off the ids that match


const ExpenseList = ({explist, setExplist, ulist, setUlist}) => {


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
          expId = {expense.expId}
          deleteExpenses={DeleteExpenses}
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

      function DeleteExpenses(props){
        //copy the dict
        console.log(props);
        let copyexplist = {...explist};

        //delete expenses from user
         DeleteExpensesFromUser();

        //delete expId from copied explist
        delete copyexplist[props.expId];

        //rerender new Exp list
        setExplist(copyexplist);
         // then find expense ID from users list and delete it from there 
      }

      
      function DeleteExpensesFromUser(props){
        //copy the dict
        console.log(props);
        let copyexplist = {...explist};
        //delete expId from copied explist
        delete copyexplist[props.expId];

        //rerender new Exp list
        setExplist(copyexplist);
         // then find expense ID from users list and delete it from there 
      }
}

export default ExpenseList
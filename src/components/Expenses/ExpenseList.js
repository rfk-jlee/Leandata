import React from 'react'
import {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import AddExpenseForm from './AddExpenseForm';
//import user data based off the ids that match


const ExpenseList = ({explist, setExplist, ulist, setUlist}) => {


  const [showForm, setShowForm] = useState(false);

  function Mapping({explist}){
    console.log('exp list lego')
    console.log(explist);
    return Object.entries(explist).map( 
      ([key, expense]) => {
         return <ExpenseItem 
          userId={expense.userId} 
          fullname= {ulist[expense.userId].firstname +' ' + ulist[expense.userId].lastname}
          description={expense.description} 
          category={expense.category}
          cost={expense.cost}
          expId = {expense.expId}
          deleteExpenses={DeleteExpenses}
          explist = {explist}
          setExplist = {setExplist}
          catSelect ={CategorySelect}
          buildName = {BuildSelect}
          ulist = {ulist}
          setUlist={setUlist}
          deleteExpensesFromUser={DeleteExpensesFromUser}
        />

        } 
      )
    
  }


    return (      
    <>

        <table>
          <tr>
            <th>Full Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Cost</th>
          </tr>
          <Mapping explist={explist}/>
          <div>
            <button onClick={()=>{setShowForm(!showForm)}}>Add New Expense</button>
          </div>
        </table>
        <div  className={showForm?'show' : 'hide'}>

              <AddExpenseForm 
              ulist={ulist}
              setUlist={setUlist}
              explist={explist}
              setExplist={setExplist}
              catSelect ={CategorySelect}
              buildName = {BuildSelect}
              />
         </div>

        </>

      
      )

      function DeleteExpenses(props){
        //copy the dict
        console.log(props);
        let copyexplist = {...explist};

        //delete expenses from user
         DeleteExpensesFromUser(props.userId, props.expId);

        //delete expId from copied explist
        delete copyexplist[props.expId];

        //rerender new Exp list
        setExplist(copyexplist);
         // then find expense ID from users list and delete it from there 
      }

      
      function DeleteExpensesFromUser(userId, expId){
       //copy Dictionary
       let copyUList = {...ulist};
       //get User
       let user = copyUList[userId];
       //check Ids - if match destroy the id
       console.log('user.expenseIds');
       console.log(user.expenseIds);
       for(let i in user.expenseIds){
        if(user.expenseIds[i] == expId){
          user.expenseIds.splice(i, 1);
          //end 1nce found
          break;
        }
       }
       console.log('copyUList');
       console.log(copyUList);
       setUlist(copyUList);
      }

      //build a select based on all usernames
      function BuildSelect({setUserId, userId}){        
        //if userid is empty
        return (
            <select value={userId==''?setUserId(1):userId} onChange={(e)=>{setUserId(e.target.value)}}>
              {Object.entries(ulist).map(([key, user]) => (
                <option value={user.userId}>{user.firstname+ ' ' + user.lastname}</option>
              ))}
            </select>
        );
      
    
      }
      
      //build the category selection
      function CategorySelect({setCategory, category}){
        return (
            <select value={category ==''?setCategory('food'):category} onChange={(e)=>{setCategory(e.target.value)}}>
                <option value='food'>food</option>
                <option value='travel'>travel</option>
                <option value='equipment'>equipment</option>
            </select>
        );   
      }

}

export default ExpenseList
import React from 'react'
import UserItem from './UserItem';
import { userList,
         expenseList } from '../../data'; //get userList from data
import UserForm from './UserForm.js';
import {useState } from 'react';


//move these eventually to UserFunc.js
function DeleteUser(userId){
  //delete user from list
  //delete user dependencies ie delete all expenses of user
  userList.delete(userId);
}


function GetExpensesFromUser(expIds){
  let accum = 0;
  for (let i in expIds){
    accum += expenseList[expIds[i]].cost; //retrieve from expenseList dictionary using unique expenseId keys
  }
  return accum;
}







const UserList = ({ulist, setUlist, explist, setExplist}) => {
  //state test
  //state of add/edit Form
  const [showForm, setShowForm] = useState(false);
  console.log('new Ulist');
  console.log(ulist);
  console.log('new explist');
  console.log(explist);


  function Mapping({users}){  
    return Object.entries(users).map( 
      ([key, user]) => {
         return <UserItem 
          userId={user.userId} 
          firstname={user.firstname} 
          lastname={user.lastname} 
          totalExpenses={GetExpensesFromUser(user.expenseIds)}
          edituser={EditUser}
          deleteuser={DeleteUser}
        />

        } 
      )
    
  }


    //on Click run add new user form
    return (
      <>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Total Expenses</th>
        </tr>
        <Mapping users={ulist}/>
      </table>
      <div className="addUser">
        <button onClick={()=>{setShowForm(!showForm)}}>Add New User</button>
      </div>
      <UserForm 
        ulist={ulist}
        setUlist={setUlist}/>
      </>
    );

    function EditUser({props}){
      //open UserForm
      //get User Data
      //populate Form with info
      let existingUser = ulist[this.userId];
      
  }
  
  //move this later
  function DeleteUser(props){
    //copy the dict
    let userid = this.userId;
    let copylist = {...ulist};
    //find all existing expenses from the
    let userExpenses;
    if (copylist[userid].expenseIds.length > 0) {
      userExpenses = copylist[userid].expenseIds;
      DeleteExpenses(userExpenses);

    }
  
    //delete dictionary entry
    delete copylist[this.userId];
    setUlist(copylist);

  }
//move this later
  function DeleteExpenses(expIdList){
    //copy the dict
    let copyexplist = {...explist};
    console.log("expIdList");
    console.log(copyexplist);
    //iterate thru expIdList and delete all keys that match from expList
    for (let i in expIdList){
      console.log("expIdList");
      delete copyexplist[expIdList[i]];
    }
    //setexplist to trigger rerender.
    setExplist(copyexplist);

  }
  

}

export default UserList


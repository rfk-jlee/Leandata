import React from 'react'
import UserItem from './UserItem';
import UserForm from './UserForm.js';
import {useState } from 'react';

const UserList = ({ulist, setUlist, explist, setExplist}) => {
  //state of add/edit Form
  const [showForm, setShowForm] = useState(false);
  //master edit
  const [masterEdit, setMasterEdit] = useState('');

  function Mapping({users}){  
    return Object.entries(users).map( 
      ([key, user]) => {
         return <UserItem 
          userId={user.userId} 
          firstname={user.firstname} 
          lastname={user.lastname} 
          totalExpenses={GetExpensesFromUser(user.expenseIds)}
          deleteuser={DeleteUser}
          setUlist={setUlist}
          ulist={ulist}
          masterEdit={masterEdit}
          setMasterEdit={setMasterEdit}
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
        <button onClick={()=>{setShowForm(!showForm)}}>{showForm ? 'Cancel' :'Add New User'}</button>
      </div>
      <div className={showForm?'show' : 'hide'}>
      <UserForm 
          ulist={ulist}
          setUlist={setUlist}/>
      </div>

      </>
    );

  //move this later
  function DeleteUser(props){
    //copy the dict
    let userid = this.userId;
    let copylist = {...ulist};
    //find all existing expenses from the
    let userExpenses;
    //if expenses exist for this userid
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

  function GetExpensesFromUser(expIds){
    let accum = 0;
    for (let i in expIds){
      accum += parseFloat(explist[expIds[i]].cost); //retrieve from expenseList dictionary using unique expenseId keys
    }
    return accum;
  }
  
  

}

export default UserList


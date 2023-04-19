import React from 'react'
import UserItem from './UserItem';
//gotta import data from Total Expenses as well!
//grabExpense(userId) function to get total expenses and render!
//


const userlist = [
  {     
    userId: 12, 
    firstname:'Jonathan',
    lastname: 'Lee',
    expenseId: [
      313,
      314
    ],
    totalExpenses:150
  }

];


const UserList = () => {
  function Mapping({users}){
    return users.map((user) => (
      <UserItem 
        id={user.id} 
        firstname={user.firstname} 
        lastname={user.lastname} 
        totalExpenses={user.totalExpenses} //TEMPORARY - needs to link to expense data.
      />
    ));
  }


    return (
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Total Expenses</th>
        </tr>
        <Mapping users={userlist}/>
      </table>
    )

}

export default UserList
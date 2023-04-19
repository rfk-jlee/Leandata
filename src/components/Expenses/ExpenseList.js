import React from 'react'
import UserItem from './UserItem';

const ExpenseList = () => {
   
   
    const expenses =[
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


    return (
		<ul className='list-group'>
			{users.map((user) => (
				<UserItem id={user.id} firstname={user.firstname} lastname={user.lastname} totalExpenses={user.totalExpenses} />
			))}
		</ul>
    )
}

export default UserList
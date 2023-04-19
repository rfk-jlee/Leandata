import React from 'react'
import UserItem from './UserItem';

const UserList = () => {
    const users = [
		{     id: 12, 
          firstname:'Jonathan',
          lastname: 'Lee',
          expenses: [],
          totalExpenses: '$100' 
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


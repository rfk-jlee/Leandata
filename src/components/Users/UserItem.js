import React from 'react';
//users need to import total expenses

const UserItem = (props) => {
	return (
	<tr>
		<td>{props.firstname}</td>
		<td>{props.lastname}</td>
		<td>${props.totalExpenses}</td>
	</tr>);
};

export default UserItem;
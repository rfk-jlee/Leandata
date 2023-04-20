import React from 'react';
import AddUserForm from './UserForm';
//users need to import total expenses


/* gets key from value */
function getKeyByValue(object, value) {
	return Object.keys(object).find(key => object[key] === value);
}
  


const UserItem = (props) => {
	return (
	<tr>
		<td>{props.firstname}</td>
		<td>{props.lastname}</td>
		<td>${props.totalExpenses}</td>
		<div className="mod">
			<button onClick={()=>{props.deleteuser(props.userId)}}>delete</button>
			<button onClick={()=>{props.edituser(props.userId)}}>edit</button>
		</div>
	</tr>);
};


export default UserItem;
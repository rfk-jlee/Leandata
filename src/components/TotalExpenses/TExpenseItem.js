import React from 'react';
import { TiDelete } from 'react-icons/ti';

const TExpenseItem = (props) => {
	return (
		<li className='Item'>
			{props.firstname} {props.lastname}
			<div>
				<span className=''>
					${props.totalExpenses}
				</span>
				<TiDelete size='1.5em'></TiDelete>
			</div>
		</li>
	);
};

export default UserItem;
import React from 'react';

const UserItem = (props) => {
	return (
		<li className='Item'>
			{props.firstname} {props.lastname}
			<div>
				<span className=''>
					${props.totalExpenses}
				</span>
			</div>
		</li>
	);
};

export default UserItem;
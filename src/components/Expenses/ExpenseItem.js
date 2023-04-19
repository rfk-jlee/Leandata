import React from 'react';

const ExpenseItem = (props) => {
	return (
		<li className='Item'>
            <div className="">{props.fullname}</div>
            <div className="">{props.category}</div>
            <div className="">{props.description}</div>
            <div className="">{props.cost}</div>

		</li>
	);
};

export default ExpenseItem;
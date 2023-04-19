import React from 'react';

const ExpenseItem = (props) => {
	return (
        <tr>
            <td>{props.fullname}</td>
            <td>{props.category}</td>
            <td>{props.description}</td>
            <td>${props.cost}</td>
        </tr>
    );
}

export default ExpenseItem;
import React from 'react';

const CompanyExpenseItem = (props) => {
	return (
        <tr>
            <td>{props.fullname}</td>
            <td>{props.category}</td>
            <td>{props.description}</td>
            <td>${props.cost}</td>
        </tr>
    );
}

export default CompanyExpenseItem;
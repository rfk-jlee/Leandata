import React from 'react';

//returns each company expense item
const CompanyExpenseItem = (props) => {
	return (
        <tr>
            <td>{props.category}</td>
            <td>{props.total}</td>
        </tr>
    );
}
export default CompanyExpenseItem;
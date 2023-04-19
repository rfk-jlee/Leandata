import React from 'react'
import TExpenseItem from './TExpenseItem';

const TExpenseList = () => {
   //hardcode data
    let totalExpenses = [
		{
			userId:12,
			travelExp: 50.00,
			foodExp: 130.31,
			equipmentExp: 0
		}
    ];


    return (
		<ul className='list-group'>
			{totalExpenses.map((texp) => (
				<TExpenseItem 
                id={texp.id} 
                firstname={texp.firstname} 
                lastname={texp.lastname} 
                totalExpenses={texp.totalExpenses} />
			))}
		</ul>
    )
}

export default TExpenseList
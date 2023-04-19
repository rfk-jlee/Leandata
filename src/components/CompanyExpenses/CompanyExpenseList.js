import React from 'react'
import CompanyExpenseItem from './ExpenseItem';
//import expense DB - use reducer to group all by category 
//generate the expense list using a reducer 
//combine all expenses based on category
 
const companyExpenses = [
    {
        category:'travel',
        total: 50.00
    },
    {
        category:'food',
        total: 130.31
    },
    {
        category:'equipment',
        total: 0
    }
]


const companyExpensesList = () => {
    function Mapping({companyExpenses}){
        return companyExpenses.map((companyExpense) => (
          <CompanyExpenseItem 
            category={companyExpense.category} 
            cost={companyExpense.cost} //TEMPORARY - needs to link to expense data.
          />
        ));
    }

    return (
        <table>
          <tr>
            <th>Category</th>
            <th>Cost</th>
          </tr>
          <Mapping companyExpenses={companyExpenses}/>
        </table>
      )
}

export default companyExpensesList
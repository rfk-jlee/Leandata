import React from 'react'
import CompanyExpenseItem from './CompanyExpenseItem';
 
const CompanyExpensesList = ({explist}) => {
    //combine into dictionary with Reduce function
    let combined = Reduce({explist});

    //get every key/value pair and generate A category expense component for each one.
    function Mapping({combined}){
        return Object.entries(combined).map(([key, value]) => {
            return <CompanyExpenseItem total={value} category={key}/>
         });
    }

    return (
        <table>
          <tr>
            <th>Category</th>
            <th>Total ($)</th>
          </tr>
          <Mapping combined={combined}/>
        </table>
      )

      //this function takes all the expenses - 
      //adds them up by category
      // returns category: total cost
      function Reduce({explist}){
          //add up all the expenses and sort by category
          const groupByCategory = Object.values(explist).reduce((cat, expense) => {
            //if the category hasnt been found yet, set cost to 0 intially.
            if (!cat[expense.category]){
                cat[expense.category] = 0;
            }
            //increment existing cost by the new cost not yet added
            cat[expense.category] += parseFloat(expense.cost);
            return cat;
          }, {});
          
          return groupByCategory;

      }
}

export default CompanyExpensesList
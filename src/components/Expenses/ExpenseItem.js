import React from 'react';
import {useState} from 'react';

const ExpenseItem = (props) => {

    const [edit, setEdit] = useState(false);
    /*
	const [fullname, setFullname] = useState(props.fullname);
	const [category, setCategory] = useState(props.category);
    const [description, setDescription] = useState(props.description);
	const [cost, setCost] = useState(props.cost);
*/
	return (
        <tr>
            <td>{props.fullname}</td>
            <td>{props.category}</td>
            <td>{props.description}</td>
            <td>${props.cost}</td>
            <div className="mod">
                <button onClick={()=>{props.deleteExpenses(props)}}>delete</button>
                <button onClick={()=>{}}>{edit == true? 'Save': 'Edit'}</button>
            </div>
        </tr>
    );

    		//edit press turn into inputs
            /*
		function Edit(){
			let userId = props.userId;
			let copyList = {...props.ulist};
			//copyList[userId].firstname =fname;
			//copyList[userId].lastname =lname;
			//saves edit if edit is false
			if(edit){
				props.setUlist(copyList);
			}
			setEdit(!edit);
			
		}*/



}

export default ExpenseItem;
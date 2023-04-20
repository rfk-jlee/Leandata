import React from 'react';
import {useState} from 'react';

const ExpenseItem = (props) => {

    const [edit, setEdit] = useState(false);
	const [userId, setUserId] = useState(props.userId);
    const [oldUserId, setOldUserId] = useState(props.userId);
	const [category, setCategory] = useState(props.category);
    const [description, setDescription] = useState(props.description);
	const [cost, setCost] = useState(props.cost);
    
    //only allow 1 edit at a time
    if (props.masterEdit != props.expId && edit==true){
		setEdit(false);
	} else if (props.masterEdit == props.expId && edit==false){
		setEdit(true);
	}

    
	return (
        <tr>
             {edit==true ? (<>
                <td>{props.buildName({setUserId, userId})}</td>
			    <td>{props.catSelect({setCategory, category})}</td>
                <td><input value={description} onChange={(e) => {setDescription(e.target.value)}}/></td>
			    <td><input value={cost} onChange={(e) => {setCost(e.target.value)}}/></td>
            </>):
             (
             <>
                <td>{props.fullname}</td>
                <td>{props.category}</td>
                <td>{props.description}</td>
                <td>${props.cost}</td>
            </>)}

            <div className="mod">
                <button onClick={()=>{Edit()}}>{edit == true? 'Save': 'Edit'}</button>
                <button onClick={()=>{props.deleteExpenses(props)}}>delete</button>
                {isNaN(cost) ?<label className="err">Cost must be a number</label>:''}
            </div>
        </tr>
    );

    		//edit press turn into inputs
		function Edit(){
            props.setMasterEdit(props.expId);
			let expId = props.expId;
			let copyList = {...props.explist};
            let newUID = userId;
			let copyUserList = {...props.ulist};
            //validate cost is a number
            if (isNaN(cost) ){
                return;
            }
            
            //update Expense dictionary
            copyList[expId].userId = userId;
			copyList[expId].category =category;
			copyList[expId].description =description;
            copyList[expId].cost = parseFloat(cost);
            
            //remove and add link to expId.
          // props.deleteExpenses(oldUserId, expId);

            //adding expense Id to newly edited list if userId has changed
            // and deleting old userId
            if(oldUserId != newUID){
                copyUserList[newUID].expenseIds.push(expId);
                console.log('oldUserId');
                console.log(oldUserId);
                console.log('expId');
                console.log(expId);
                props.deleteExpensesFromUser(oldUserId, expId);

            }

			//saves edit if edit is false
			if(props.masterEdit == props.expId){
				props.setExplist(copyList);
                props.setUlist(copyUserList);
                props.setMasterEdit('');

			} else{
                console.log('setting new userID');
                setOldUserId(userId);
            }
            //toggle edit
			setEdit(!edit);
			
		}

}

export default ExpenseItem;
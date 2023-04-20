import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';


const AddExpenseForm = (props) => {
    const [userId, setUserId] = useState('');
    const [category, setCategory] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');


    //form for adding a brand new expense
	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label for='fullname'>Full Name</label>
                    {props.buildName({setUserId, userId})}

				</div>
				<div className='col-sm'>
					<label for='category'>Category</label>
                    {props.catSelect({setCategory, category})}
				</div>
                <div className='col-sm'>
					<label for='description'>Description</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='description'
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}

					></input>
                    
				</div>
                <div className='col-sm'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='cost'
                        value={cost}
                        onChange={(e)=>{setCost(e.target.value)}}
					></input>
                    {isNaN(cost)?<label className="err">Cost must be a number</label>:''}
				</div>
			</div>
            <div className='row'>
            	<div className='col-sm'>
					<button type='submit' className=''>
						Save
					</button>
				</div>
            </div>
		</form>
	);

    
	function onSubmit(event){
        console.log('submitted');
		event.preventDefault();
		//when submitting - check if editing or creating new user
		let copyList = {...props.ulist};
        let copyExpList={...props.explist};
		//GENERATE UNIQUE KEY with uuidv4
		let newkey = uuidv4();
		//construct key-value pair
        //cannot build with empty userId
        //validate cost is a number
        if (isNaN(cost) ){
            return;
        }

        setDescription('');
        setCost('');
        //add new key/value pair to copied hashtable
		copyExpList[newkey] = {
				userId: userId,
                expId: newkey,
				category: category,
                description:event.target[2].value,
				cost:cost,
		};

        //modify dictionary by userId and add the newkey to expenseIds list
        copyList[userId].expenseIds.push(newkey);
		//add user
        console.log('copyExpList');        
        console.log(copyExpList);
		props.setExplist(copyExpList);
		props.setUlist(copyList);

	}
};

export default AddExpenseForm;

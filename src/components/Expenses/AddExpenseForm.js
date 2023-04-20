import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';


const AddExpenseForm = (props) => {
    const [userId, setUserId] = useState('');
    const [category, setCategory] = useState('');

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
					></input>
				</div>
                <div className='col-sm'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='cost'
					></input>
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
		copyExpList[newkey] = {
				userId: userId,
                expId: newkey,
				category: category,
                description:event.target[2].value,
				cost:event.target[3].value,
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

//gonna need setState use States to update the form
//import save user
import React from 'react';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';


const AddUserForm = ({ulist, setUlist}) => {

	const [userValues, setUserValues] = useState('');


	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label for='fname'>First Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='fname'
					></input>
				</div>
				<div className='col-sm'>
					<label for='cost'>Last Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='lname'

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
		event.preventDefault();
		//when submitting - check if editing or creating new user
		let copyList = {...ulist};
		//GENERATE UNIQUE KEY with uuidv4
		let newkey = uuidv4();
		//construct key-value pair
		copyList[newkey] = {
				userId: newkey,
			 	firstname:event.target[0].value,
				lastname:event.target[1].value,
				expenseIds:[]
		};
		//add user
		setUlist(copyList);
	}
};

export default AddUserForm;

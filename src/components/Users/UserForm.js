//gonna need setState use States to update the form
//import save user
import React from 'react';
import {useState} from 'react';


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

		//edit existing dictionary or creating new key/value pair -


		let copyList = {...ulist};
		//TEMPORARY WAY TO GENERATE UNIQUE KEY - LOOK INTO LATER LMAO
		let newkey = uuid();
		//THERES GOTTA BE A BETTER WAY TO GET THE VALUE OF THIS IN REACT -
		//construct key-value pair
		copyList[newkey] = {
				userId: newkey,
			 	firstname:event.target[0].value,
				lastname:event.target[1].value,
				expenseIds:[]
		};
		//add user
		setUlist(test);
	}
};

export default AddUserForm;

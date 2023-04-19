import React from 'react';

const AddUserForm = () => {
	return (
		<form>
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
};

export default AddUserForm;

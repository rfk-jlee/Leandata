import React from 'react';

const AddExpenseForm = () => {
	return (
		<form>
			<div className='row'>
				<div className='col-sm'>
					<label for='fullname'>Full Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='fullname'
					></input>
				</div>
				<div className='col-sm'>
					<label for='category'>Category</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='category'
					></input>
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
};

export default AddExpenseForm;

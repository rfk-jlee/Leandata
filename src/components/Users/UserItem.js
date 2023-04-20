import React from 'react';
import AddUserForm from './UserForm';
import {useState} from 'react';
//users need to import total expenses  


const UserItem = (props) => {	
	const [edit, setEdit] = useState(false);
	const [fname, setFname] = useState(props.firstname);
	const [lname, setLname] = useState(props.lastname);
	return (
		<tr>
        {edit==true ? (<>
			<td><input value={fname} onChange={(e) => {setFname(e.target.value)}}/></td>
			<td><input value={lname} onChange={(e) => {setLname(e.target.value)}}/></td>
			</>
			)
			:
			(<>
			<td>{props.firstname}</td>
			<td>{props.lastname}</td>
			</>
			)
			}

			<td>${props.totalExpenses}</td>		
			<div className="mod">
				<button onClick={()=>{props.deleteuser(props.userId)}}>delete</button>
				<button onClick={()=>{Edit()}}>{edit == true? 'Save': 'Edit'}</button>
			</div>
		</tr>
		);


		//edit press turn into inputs
		function Edit(){
			let userId = props.userId;
			let copyList = {...props.ulist};
			copyList[userId].firstname =fname;
			copyList[userId].lastname =lname;
			//saves edit if edit is false
			if(edit){
				props.setUlist(copyList);
			}
			setEdit(!edit);
			
		}


};


export default UserItem;
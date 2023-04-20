import React from 'react';
import {useState} from 'react';
//users need to import total expenses  


const UserItem = (props) => {	
	const [edit, setEdit] = useState(false);
	const [fname, setFname] = useState(props.firstname);
	const [lname, setLname] = useState(props.lastname);

	console.log('userid' + props.userId);
	console.log('masteredit' + props.masterEdit);

	//only allow 1 edit at a time
	if (props.masterEdit != props.userId && edit==true){
		setEdit(false);
	} else if (props.masterEdit == props.userId && edit==false){
		console.log('setting true');
		setEdit(true);
	}
		


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
				<button onClick={()=>{Edit()}}>{edit == true? 'Save': 'Edit'}</button>
				<button onClick={()=>{props.deleteuser(props.userId)}}>delete</button>
			</div>
		</tr>
		);


		//edit press turn into inputs
		function Edit(){
			props.setMasterEdit(props.userId);
			let userId = props.userId;
			let copyList = {...props.ulist};
			copyList[userId].firstname =fname;
			copyList[userId].lastname =lname;

			//saves edit if edit is false
			if(props.masterEdit == props.userId){
				props.setUlist(copyList);
				props.setMasterEdit('');
			}
			setEdit(!edit);

		}


};


export default UserItem;
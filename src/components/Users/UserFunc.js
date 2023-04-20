import { userList,
    expenseList } from '../../data'; //get userList from data
import { useReducer } from "react";



export function DeleteUser(userId){
    //delete user from list
    //delete user dependencies ie delete all expenses of user
    userList.delete(userId);
  }
  
  export function SaveUser(userId){

  }
  
  export function GetExpensesFromUser(expIds){
    let accum = 0;
    for (let i in expIds){
      accum += expenseList[expIds[i]].cost; //retrieve from expenseList dictionary using unique expenseId keys
    }
    return accum;
  }

  //add it later
  const userReducer = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        });
      default:
        return state;
    }
  };
  

  export default {
    DeleteUser,
    SaveUser,
    GetExpensesFromUser,
    userReducer
  } 
export const data = [
{
  firstname: "Jon",
  lastname: "Lee",
  expenses: 100
}];

export const userList = [
  {     
    userId: 12, 
    firstname:'Jonathan',
    lastname: 'Lee',
    expenseId: [
      313,
      314
    ],
    totalExpenses:150
  }];

export const expenseList =[
  {
      userId:12,
      expenseId: 313,
      fullname: 'Jonathan Lee',
      category: 'food',
      description: 'had dinner with client',
      cost: 130.31   
  },
  {
      userId:12,
      expenseId: 314,
      fullname:'Jonathan Lee',
      category: 'travel' ,
      description: 'had dinner with client',
      cost: 50.00
  }];

export default {
    data,
    userList,
    expenseList,
}

/*INITIAL DATA FOR TEST */
/*
expense and users seperated into own dictionaries because if i want 2 show all expenses, 
i cannot nest inside users or else itd have 2 iterate thru 
all users to show expenses - including users with 0 expenses.

*/

export const userList = {
  1:  {     
    userId:1,
    firstname:'Jonathan',
    lastname: 'Lee',
    expenseIds: [
      1,
      2,
      3,
      4
    ]
  },
  2:  {     
    userId:2,
    firstname:'Todd',
    lastname: 'Don',
    expenseIds: [
      5
    ]
  }
}; 
//remove fullname - will just combine fname/lname from user
export const expenseList =
{
    1:{
        userId: 1,
        fullname: 'Jonathan Lee',
        category: 'food',
        description: 'had dinner with client',
        cost: 130.31   
    },
    2:{
        userId: 1,
        fullname:'Jonathan Lee',
        category: 'travel' ,
        description: 'had dinner with client',
        cost: 50.00
    },
    3:{
      userId: 1,
      fullname:'Jonathan Lee',
      category: 'travel' ,
      description: 'travel expenses',
      cost: 150.00
    },
    4:{
      userId: 1,
      fullname:'Jonathan Lee',
      category: 'equipment' ,
      description: 'expensing new laptop',
      cost: 1500.00
    },
    5:{
      userId: 1,
      fullname:'Todd Don',
      category: 'equipment' ,
      description: 'expensing new laptop',
      cost: 1500.00
    }
  };

export default {
    userList,
    expenseList
}

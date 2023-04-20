/*INITIAL DATA FOR TEST */
/*
 2 hash tables - 
  linked together by expenseId/userId
*/

//user hash table

export const userList = {
  1:  {     
    userId:1,
    firstname:'Jonathan',
    lastname: 'Lee',
    expenseIds: [
      10,
      20,
      30,
      40
    ]
  },
  2:  {     
    userId:2,
    firstname:'Todd',
    lastname: 'Don',
    expenseIds: [
      50
    ]
  }
}; 

//expense hash table
export const expenseList =
{
    10:{
        userId: 1,
        expId: 10,
        category: 'food',
        description: 'had dinner with client',
        cost: 130.31   
    },
    20:{
        userId: 1,
        expId: 20,
        category: 'travel' ,
        description: 'had dinner with client',
        cost: 50.00
    },
    30:{
      userId: 1,
      expId: 30,
      category: 'travel' ,
      description: 'travel expenses',
      cost: 150.00
    },
    40:{
      userId: 1,
      expId: 40,
      category: 'equipment' ,
      description: 'expensing new laptop',
      cost: 1500.00
    },
    50:{
      userId: 2,
      expId: 50,
      category: 'equipment' ,
      description: 'expensing new laptop',
      cost: 1100.00
    }
  };

export default {
    userList,
    expenseList
}

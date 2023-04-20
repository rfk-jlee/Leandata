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
/*

export const userList = {
  1:  {     
    userId:1,
    firstname:'Jonathan',
    lastname: 'Lee',
    expenseIds: {
        10:{
              userId: 1,
              expId: 10,
              fullname: 'Jonathan Lee',
              category: 'food',
              description: 'had dinner with client',
              cost: 130.31   
          },
          20:{
              userId: 1,
              expId: 20,
              fullname:'Jonathan Lee',
              category: 'travel' ,
              description: 'had dinner with client',
              cost: 50.00
          },
          30:{
            userId: 1,
            expId: 30,
            fullname:'Jonathan Lee',
            category: 'travel' ,
            description: 'travel expenses',
            cost: 150.00
          },
          40:{
            userId: 1,
            expId: 40,
            fullname:'Jonathan Lee',
            category: 'equipment' ,
            description: 'expensing new laptop',
            cost: 1500.00
          }
      }
  },
  2:  {     
    userId:2,
    firstname:'Todd',
    lastname: 'Don',
    expenseIds: {
      50 :{
      userId: 1,
      expId: 50,
      fullname:'Todd Don',
      category: 'equipment' ,
      description: 'expensing new laptop',
      cost: 1500.00
    }
  }
  }
}; 


*/

//remove fullname - will just combine fname/lname from user
//expense cannot exist without a user
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

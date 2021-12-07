const {sequelize} = require('../db')

const {Waiter} = require('../models/Waiter')

const seedWaiter = [
    {
        waiter_name: 'James', 
        waiter_salary: 700
    },
    {   waiter_name: 'Cathy', 
        waiter_salary: 1000
    },

     {  waiter_name: 'Jimmy', 
        waiter_salary: 800
    },
    {   waiter_name: 'Lacy', 
        waiter_salary: 1700
    },
]
// const arrayOfCustomer = [
//     {customer_name: 'Anuja', payment_type: 'Card', customer_address: "101 main street", phone_number : 123456789, waiter_id : 1},
//     {customer_name: 'Crystal', payment_type: 'Card', customer_address: "500 apple aver", phone_number : 659384567, waiter_id : 1},
//     {customer_name: 'Nahima', payment_type: 'Cash', customer_address: "200 river Rd", phone_number : 987654321, waiter_id : 1},
//     {customer_name: 'Lamin', payment_type: 'Cash', customer_address: "2304 main street", phone_number : 342516789, waiter_id : 2}

//     ]
//     const arrayOfMenu = [
//         {food_name: 'Eggs', chef_id: '2', price: 2},
//         {food_name: 'Pancakes', chef_id: '3', price: 5},
//         {food_name:  'Burger', chef_id: '3', price: 6},
//         {food_name: 'Fries', chef_id: '2', price: 3},
//         {food_name: 'Pasta', chef_id: '1', price: 8},
//         {food_name: 'Daquiri', chef_id: '3', price: 6},
//         {food_name: 'Steak', chef_id: '4', price: 8},
//         {food_name: 'Martini', chef_id: '1', price: 5}
// ]

const seed = async () => {
    try {
      await sequelize.sync({force: true})
      await Waiter.bulkCreate(seedWaiter, {validate: true})
      //await Customer.bulkCreate(arrayOfCustomer, {validate: true})
     // await Menus1.bulkCreate(arrayOfMenu, {validate: true})
      console.log('Seeding success!')
      sequelize.close()
    } catch (error) {
      console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
    }
  }
  seed();


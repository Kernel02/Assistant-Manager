
const { Employee } = require('../models');

const employeedata = [
  {
    Employee_First_name: 'Alex',
    Employee_Last_name: 'September',
    Employee_Email: 'alexseptember@gmail.com',
    Employee_Adress: '10000 Alexandria, VA',
    Employee_Salary: 50000.66,
    Employee_Role: 'cashier'
 
  },

  {
    Employee_First_name: 'Barbara',
    Employee_Last_name: 'Eden',
    Employee_Email: 'barbaraeden12@gmail.com',
    Employee_Adress: '2000 Silver Spring, MD',
    Employee_Salary: 55000.66,
    Employee_Role: 'assistant cook'
 
  },

  {
    Employee_First_name: 'Lukaku',
    Employee_Last_name: 'April',
    Employee_Email: 'lukakuapril56@gmail.com',
    Employee_Adress: '500 Alexandria, VA',
    Employee_Salary: 60000.66,
    Employee_Role: 'chef'
 
  },

  {
    Employee_First_name: 'Lili',
    Employee_Last_name: 'August',
    Employee_Email: 'liliaugust88@gmail.com',
    Employee_Adress: '00 Alexandria, VA',
    Employee_Salary: 5500.66,
    Employee_Role: ' senior cook'
 
  },
    
  {
    Employee_First_name: 'Ja',
    Employee_Last_name: 'January',
    Employee_Email: 'jajanuary98@gmail.com',
    Employee_Adress: '55 Washington, DC',
    Employee_Salary: 65000.66,
    Employee_Role: ' admin'
 
  },
   
];

const seedEmployee = () => Employee.bulkCreate(employeedata);

module.exports = seedEmployee;
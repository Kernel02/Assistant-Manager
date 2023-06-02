

const sequelize = require('../config/connection');
const {Employee, Menu} = require('../models');
const employeeData = require('./employeeData.json');
const roleData = require('./roleData.json');
const menuData = require('./menuData.json');

 const seedEmpMenudb = async () =>{
    await sequelize.sync({force: true});
 

  const employees = await Employee.bulkCreate(employeeData, {
    individualHooks: true,
    returning: true
  })
  const menuItems = await Menu.bulkCreate(menuData, {
    individualHooks: true,
    returning:  true,
  })
  process.exit(0);
}

seedEmpMenudb();
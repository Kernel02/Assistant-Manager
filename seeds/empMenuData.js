

const sequelize = require('../config/connection');
const {Employee, Menu} = require('../models');
const employeeData = require('./employeeData.json');
const menuData = require('./menuData.json');

 const seedEmpMenudb = async () =>{
    await sequelize.sync({force: true});
 

  const employees = await Employee.bulkCreate(employeeData, {
    induvidualHooks: true,
    returning: true
  })
  const menuItems = await Menu.bulkCreate(menuData, {
    induvidualHooks: true,
    returning:  true,
  })
  process.exit(0);
}

seedEmpMenudb();
const Employee = require("./employee");
const Menu = require("./menu");
const Role = require("./Role");

Employee.belongsTo(Role, {
  foreignKey: "role_id",
});

module.exports = { Employee, Menu, Role };

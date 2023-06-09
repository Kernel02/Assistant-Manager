const Employee = require("./employee");
const Menu = require("./menu");
const Role = require("./Role");
const User = require("./User");

Employee.belongsTo(Role, {
  foreignKey: "role_id",
});

Menu.hasOne(User, {
  foreignKey: "user_id",
});

Employee.hasOne(User, {
  foreignKey: "user_id",
});

module.exports = { Employee, Menu, Role, User };

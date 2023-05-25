const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employees extends Model {}

Employees.init(
  {
    employee_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_name: {
      type: DataTypes.STRING,
    },
    employee_email: {
      type: DataTypes.STRING,
    },
    employee_address: {
      type: DataTypes.STRING,
    },
    employee_salary: {
      type: DataTypes.float,
    },
    employee_role:{
   type:DataTypes.STRING,
    },
    employee_phone: {
      type: DataTypes.INTEGER,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }
);

module.exports = Employees;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Employee_First_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Employee_Last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },


    Employee_Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Employee_Adress: {
      type: DataTypes.STRING,
      allowNull: false,
       
    },
    Employee_Salary: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    Employee_Role: {
      type: DataTypes.STRING,
      allowNull: false,
 
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
  }
);

module.exports = Employee;
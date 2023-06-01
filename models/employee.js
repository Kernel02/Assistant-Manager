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
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },


    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
       
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    role: {
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
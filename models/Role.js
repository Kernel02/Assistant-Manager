const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.TEXT,
      allowNull: false,
  
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      foriegnKey : true
    },

     salary:{
        type: DataTypes.FLOAT,
        allowNull: false
     }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'role',
  }
);

module.exports = Role;
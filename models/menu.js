const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Menu extends Model {}

Menu.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Menu_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Menu_Description: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    Menu_Category: {
        type: DataTypes.STRING,
        allowNull: false
      },

    Menu_Price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

    Menu_Calory: {
      type: DataTypes.STRING,
      allowNull: false,
       
    },
 
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'menu',
  }
);

module.exports = Menu;
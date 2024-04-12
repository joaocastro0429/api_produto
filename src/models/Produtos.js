// Produtos.js
const { DataTypes } = require('sequelize')

const sequelize=require('../config/db')

const Produtos = sequelize.define('produtos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.DECIMAL
  },
},{
  tableName:'produtos'
});



console.log(Produtos)

module.exports = Produtos;

const { DataTypes } = require('sequelize')

const sequelize = require('../Database')

module.exports = sequelize.define('Usuario', {
  id_usuario:             { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome:                   { type: DataTypes.STRING },
  email:                  { type: DataTypes.STRING },
  senha:                  { type: DataTypes.STRING },
}, {
  tableName: 'usuarios',
  timestamps: false
})
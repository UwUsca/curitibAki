const { DataTypes } = require('sequelize')

const sequelize = require('../Database')

module.exports = sequelize.define('Local', {
  id_local:               { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome:                   { type: DataTypes.STRING },
  slug:                   { type: DataTypes.STRING },
  tipo:                   { type: DataTypes.STRING },
  sobre:                  { type: DataTypes.TEXT },
  horarios:               { type: DataTypes.TEXT },
  ingressos:              { type: DataTypes.TEXT },
  endereco:               { type: DataTypes.TEXT },
  iframe_maps:            { type: DataTypes.TEXT },
  foto:                   { type: DataTypes.STRING },
}, {
  tableName: 'locais',
  timestamps: false
})
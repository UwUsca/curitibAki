const { Sequelize } = require('sequelize')

const { MYSQL_DATABASE, MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD } = require('./globals')

let sequelize = null

if (!sequelize) {
  sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    dialect: 'mysql'
  })
}

module.exports = sequelize
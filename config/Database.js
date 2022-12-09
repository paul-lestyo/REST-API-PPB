const Sequelize = require('sequelize')

const db = new Sequelize('personal_web', 'root', '', {
	host: 'localhost',
	dialect: 'mysql'
})

module.exports = {
	db
}
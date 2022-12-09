const Sequelize = require('sequelize')
const { db } = require('../config/Database.js')

const {DataTypes} = Sequelize

const Category = db.define('categories', {
	name: DataTypes.STRING
}, {
	freezeTableName:true
})

module.exports = {
	Category
};

(async() => {
	await db.sync()
})()
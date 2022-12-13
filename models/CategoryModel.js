const Sequelize = require('sequelize')
const { db } = require('../config/Database.js')
const { Product } = require('./ProductModel.js')

const {DataTypes} = Sequelize

const Category = db.define('categories', {
	name: DataTypes.STRING,
	icon: DataTypes.STRING
}, {
	freezeTableName:true
})

Category.associate = function() {
	Category.hasMany(Product, {
		foreignKey: 'category_id',
	})
}

module.exports = {
	Category
};


(async() => {
	await db.sync()
})()
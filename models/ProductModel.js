const Sequelize = require('sequelize')
const { db } = require('../config/Database.js')
const { Category } = require('./CategoryModel.js')

const {DataTypes} = Sequelize

const Product = db.define('products', {
	name: DataTypes.STRING,
	desc: DataTypes.STRING,
	img_path: DataTypes.STRING,
	rating: DataTypes.STRING,
	price: DataTypes.STRING,
	stock: DataTypes.STRING,
	toko: DataTypes.STRING,
	discount: DataTypes.STRING,
	category_id: DataTypes.STRING
}, {
	freezeTableName:true
})

Product.associate = function(models) {
	Product.belongsTo(Category, {
		foreignKey: "category_id"
	})
}



module.exports = {
	Product
};

(async() => {
	await db.sync()
})()
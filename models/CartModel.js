const Sequelize = require('sequelize')
const { db } = require('../config/Database.js')
const { Product } = require('./ProductModel.js')
const { User } = require('./UserModel.js')

const {DataTypes} = Sequelize

const Cart = db.define('carts', {
	quantity: DataTypes.INTEGER
})

module.exports = {
	Cart
};

Cart.belongsTo(Product, {
	foreignKey: 'product_id'
});
Cart.belongsTo(User, {
	foreignKey: 'user_id'
});

(async() => {
	await db.sync()
})()
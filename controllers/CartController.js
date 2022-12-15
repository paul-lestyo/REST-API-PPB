const e = require('express')
const {Cart} = require('../models/CartModel.js')
const { Product } = require('../models/ProductModel.js')

const getCarts = async(req, res) => {
	try {
		console.log(req.userId)
		const response = await Cart.findAll({
			where: {
				user_id: req.userId
			},
			include: [
				{model: Product}
			]
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
	}
}

const createCart = async(req, res) =>{
    try {
		let cart = await Cart.findOne({
			where: {
				product_id: req.body.product_id
			}
		})

		if(cart) {
			await Cart.increment('quantity', {
				where: {
					id: cart.id 
				}
			});
		} else {
			await Cart.create({...req.body, 'user_id': req.userId});
		}
        res.status(201).json({msg: "Cart Created"});
    } catch (error) {
        console.log(error.message);
    }
}

const updateCart = async(req, res) =>{
    try {
        await Cart.update(req.body, {
			where: {
				id: req.params.id
			}
		});
        res.status(200).json({msg: "Cart Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

const deleteCart = async(req, res) =>{
    try {
        await Cart.destroy({
			where: {
				id: req.params.id
			}
		});
        res.status(200).json({msg: "Cart Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { 
	getCarts,
	createCart,
	updateCart,
	deleteCart
}
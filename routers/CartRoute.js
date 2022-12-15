const express = require('express')
const cart = require('../controllers/CartController.js')
const { authJwt } = require("../middleware");
const CartRoute = express.Router()

CartRoute.get('/carts', [authJwt.verifyToken], cart.getCarts)
CartRoute.post('/cart', [authJwt.verifyToken], cart.createCart)
CartRoute.patch('/cart/:id', [authJwt.verifyToken], cart.updateCart)
CartRoute.delete('/cart/:id', [authJwt.verifyToken], cart.deleteCart)

module.exports = {
	CartRoute
}
const express = require('express')
const product = require('../controllers/ProductController.js')

const ProductRoute = express.Router()

ProductRoute.get('/product', product.geProducts)
ProductRoute.get('/product/:id', product.geProductById)

module.exports = {
	ProductRoute
}
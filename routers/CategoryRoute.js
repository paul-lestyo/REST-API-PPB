const express = require('express')
const category = require('../controllers/CategoryController.js')

const CategoryRoute = express.Router()

CategoryRoute.get('/categories', category.getCategories)

module.exports = {
	CategoryRoute
}
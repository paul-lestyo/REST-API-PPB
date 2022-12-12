const express = require('express')
const category = require('../controllers/CategoryController.js')
const { authJwt } = require("../middleware");

const CategoryRoute = express.Router()

CategoryRoute.get('/categories', [authJwt.verifyToken], category.getCategories)

module.exports = {
	CategoryRoute
}
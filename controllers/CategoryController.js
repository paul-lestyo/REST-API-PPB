const {Category} = require('../models/CategoryModel.js')

const getCategories = async(req, res) => {
	try {
		const response = await Category.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
	}
}

module.exports = { 
	getCategories
}
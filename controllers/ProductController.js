const {Product} = require('../models/ProductModel.js')

const geProducts = async(req, res) => {
	try {
		const response = await Product.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
	}
}

const geProductById = async(req, res) => {
	try {
		const response = await Product.findOne({
			where: {
				id: req.params.id
			}
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
	}
}


module.exports = {
	geProductById, 
	geProducts, 
}
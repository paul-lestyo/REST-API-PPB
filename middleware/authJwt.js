const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const {
	User
} = require('../models/UserModel.js')
const { validationResult } = require('express-validator');

verifyToken = (req, res, next) => {
	let token
	const authHeader = req.header('authorization')
	if (authHeader.startsWith("Bearer ")) {
		token = authHeader.substring(7, authHeader.length)
	}
	console.log(token);
	if (!token) {
		return res.status(403).send({
			message: "No token provided!"
		});
	}

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err) {
			return res.status(401).send({
				message: "Unauthorized!"
			});
		}
		req.userId = decoded.id;
		next();
	});
};

verifyInputSignIn = (req, res, next) => {
	
	const errors = validationResult(req);
	console.log(errors);
	if (!errors.isEmpty()) {
		return res.status(400).json({
			errors: errors.array()
		});
	}
	next();
}

const authJwt = {
	verifyToken: verifyToken,
	verifyInputSignIn: verifyInputSignIn
};
module.exports = authJwt;
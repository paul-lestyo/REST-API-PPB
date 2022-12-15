const express = require('express')
const {
	verifySignUp
} = require("../middleware");
const controller = require("../controllers/AuthController.js");
const { authJwt } = require("../middleware");
const { body } = require('express-validator');
const AuthRoute = express.Router()

AuthRoute.post(
	"/signup",
	body('username').notEmpty(),
	body('email').isEmail(),
	body('password').isLength({
		min: 3
	}),
	[
		authJwt.verifyInputSignIn,
		verifySignUp.checkDuplicateUsernameOrEmail
	],
	controller.signup
);

AuthRoute.post("/signin", controller.signin);

module.exports = {
	AuthRoute
}
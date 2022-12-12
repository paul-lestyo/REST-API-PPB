const express = require('express')
const {
	verifySignUp
} = require("../middleware");
const controller = require("../controllers/AuthController.js");

const AuthRoute = express.Router()

AuthRoute.post(
	"/signup",
	[
		verifySignUp.checkDuplicateUsernameOrEmail
	],
	controller.signup
);

AuthRoute.post("/api/auth/signin", controller.signin);

module.exports = {
	AuthRoute
}
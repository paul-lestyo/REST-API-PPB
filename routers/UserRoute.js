const express = require('express')
const user = require('../controllers/UserController.js')

const UserRoute = express.Router()

UserRoute.get('/users', user.getUsers)
UserRoute.get('/users/:id', user.getUserById)
UserRoute.post('/users', user.createUser)
UserRoute.patch('/users/:id', user.updateUser)
UserRoute.delete('/users/:id', user.deleteUser)

module.exports = {
	UserRoute
}
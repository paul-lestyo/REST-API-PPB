const express = require('express')
const cors = require('cors')
const { UserRoute } = require('./routers/UserRoute.js')
const { CategoryRoute } = require('./routers/CategoryRoute.js')
const { AuthRoute } = require('./routers/AuthRoute.js')

const app = express()
app.use(cors())
app.use(express.json())

app.use(UserRoute)
app.use(CategoryRoute)
app.use(AuthRoute)

app.listen(5000, () => console.log('Server up and running....'))


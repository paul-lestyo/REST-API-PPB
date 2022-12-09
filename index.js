const express = require('express')
const cors = require('cors')
const { UserRoute } = require('./routers/UserRoute.js')

const app = express()
app.use(cors())
app.use(express.json())
// console.log();
app.use(UserRoute)

app.listen(5000, () => console.log('Server up and running....'))


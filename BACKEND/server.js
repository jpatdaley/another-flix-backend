// IMPORTS
const express = require('express')
const app = express()
require('dotenv').config()


// PORT
const port = 8080 

app.listen(port, () => console.log (`Express App Running on Port ${port}`))


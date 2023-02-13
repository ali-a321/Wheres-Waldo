const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const cors = require('cors')
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require('./config/db')

connectDB()
const app = express()

app.use(cors({
    origin:"http://localhost:3000",
}))
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

// Import routes
app.use("/waldo/scores", require('./routes/scoreRoutes'))
app.use(errorHandler)


app.listen(port, ()=> console.log("Server Running"))


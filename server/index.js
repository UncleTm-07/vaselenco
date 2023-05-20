require("dotenv").config()
const express = require("express")
const sequelize = require("./config/dataBase")
const models = require("./models/db_models")
const cors = require("cors")
const passport = require("passport")
const cookieParser = require("cookie-parser")
const fileUpload = require('express-fileupload')
const router = require('./routes/router')
const errorMiddleware = require('./middleware/errorMiddleware')
const path = require('path')
const sessions = require("express-session")

const PORT = process.env.PORT

const app = express()
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(sessions({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true

}))
app.use(cookieParser("secretcode"))
app.use(passport.initialize())
app.use(passport.session())
require('./config/passportConfig')(passport)
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorMiddleware);


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start().then()

require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const path = require('path')
const chalk = require('chalk')
const cors = require('cors')

// --- DATABASE CONFIGURATION
require('./configs/db.config')

//--- EXPRESS
const app = express()

// --- PORT
const PORT = process.env.PORT || 3000

// --- MIDDLEWARE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

// --- PASSPORT CONFIGURATION
require('./configs/passport.config')

// --- ROUTES
const index = require('./routes/index.routes')
app.use('/', index)
const auth = require('./routes/auth.routes')
app.use('/auth', auth)

//-- ERROR ROUTES
app.use((req, res, next) => {
    res.status(400)
    res.send('NOT FOUND')
})
app.use((err, req, res, next) => {
    if(!res.headersSent) {
        res.status(500)
        res.send('ERROR')
    }
})

// --- LISTEN
app.listen(PORT, () => {
    console.log(chalk.blue.inverse.bold('Conectado al puerto ', PORT))
})
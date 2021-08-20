import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import path from 'path'
import chalk from 'chalk'
import passport from 'passport'

import index from '../routes/index.routes.js'
import auth from '../routes/auth.routes.js'
import cv from '../routes/cv.routes.js'
import oferta from '../routes/oferta.routes.js'

import '../configs/passport.config.js'

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(passport.initialize())
app.use(cors({
    origin: [ 'http://localhost:3000', 'https://acs-back.vercel.app', 'http://localhost:3001']
}))
app.use(cors())

// Routes
app.use('/', index)
app.use('/auth', auth)
app.use('/cv', cv)
app.use('/oferta', oferta)

export default app
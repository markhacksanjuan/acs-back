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
import candidato from '../routes/candidato.routes.js'
import estudio from '../routes/estudio.routes.js'
import estudio2 from '../routes/estudio2.routes.js'
import experiencia from '../routes/exp.routes.js'
import idioma from '../routes/idiomas.routes.js'
import otrosDatos from '../routes/otrosDatos.routes.js'
import users from '../routes/user.routes.js'

import '../configs/passport.config.js'

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(passport.initialize())
app.use(cors())
app.use(cors({
    origin: [ 'http://localhost:3000', 'https://acs-back.vercel.app', 'http://localhost:3001'],
    methods: ["GET", "POST"],
    allowedHeaders: ["Access-Control-Allow-Origin"],

}))

// Routes
app.use('/', index)
app.use('/auth', auth)
app.use('/cv', cv)
app.use('/oferta', oferta)
app.use('/candidato', candidato)
app.use('/estudio', estudio)
app.use('/estudio2', estudio2)
app.use('/exp', experiencia)
app.use('/idioma', idioma)
app.use('/otrosDatos', otrosDatos)
app.use('/user', users)

export default app
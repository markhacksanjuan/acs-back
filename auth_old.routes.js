import { Router } from 'express'
const User = require('./models/user.model.js')
const passport = require('passport')
const jwt = require('jsonwebtoken')

import { index, signup, login } from './controllers/auth.controller.js'

const router = Router()

router.get('/', (req, res, next) => {
    res.send('AUTH PAGE')
})
router.post('/signup', async (req, res, next) => {
    passport.authenticate('signup', async (err, user, info) => {
        if(err){
            res.status(500).send({ errorMessage: 'Algo ha ido mal con Signup' })
            return
        }
        if(!user){
            res.send(info)
            return
        }
        res.send(user)
    })(req, res, next)
})
router.post('/login', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
        if(err){
            res.status(500).send({ errorMessage: 'Algo ha ido mal autenticando el usuario' })
            return
        }
        if(!user){
            res.send(info)
            return
        }
        req.login(
            user,
            { session: false },
            (error) => {
                if(error){
                    res.status(400).send({ errorMessage: 'Algo ha ido mal con el login' })
                    return next(error)
                }
                const body = { _id: user._id, email: user.email }
                const token = jwt.sign({ user: body }, process.env.JWT_SECRET, { expiresIn: 86400 })
                return res.send({ user, token, message: info.message })
            }
        )
    })(req, res, next)
})
router.get('/logout', (req, res, next) => {
    req.logout()
    res.status(200).send({ message: 'Logout success!' })
})

module.exports = router
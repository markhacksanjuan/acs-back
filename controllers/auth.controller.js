import passport from 'passport'
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

export const index = (req, res, next) => {
    res.send('AUTH PAGE')
}

export const signup = async (req, res, next) => {
    const { role } = req.body
    passport.authenticate('signup', async (err, user, info) => {
        if(err){
            res.status(500).send({ errorMessage: 'Algo ha ido mal con Signup' })
            return
        }
        if(!user){
            res.send(info)
            return
        }
        if(role){
            await User.findByIdAndUpdate({ _id: user._id }, { role })
        }
        res.send({ user, message: info })
    })(req, res, next)
}

export const login = async (req, res, next) => {
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
}

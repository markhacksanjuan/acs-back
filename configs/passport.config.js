import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import { Strategy as LocalStrategy } from 'passport-local'
import User from '../models/user.model.js'
import bcrypt from 'bcrypt'

passport.use(
    'signup',
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try{
                const userExists = await User.findOne({ email })
                if(userExists){
                    return done(null, false, { errorMessage: 'Email ya existe'})
                }
                const salt = await bcrypt.genSalt(10)
                const hashedPwd = await bcrypt.hash(password, salt)
                const user = await User.create({ email, password: hashedPwd })
                done(null, user, { message: 'User created successfully' })
            }catch(e){
                console.error(e)
            }

        }
    )
)
passport.use(
    'login',
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try{
                const user = await User.findOne({ email })
                if(!user){
                    return done(null, false, { errorMessage: 'User not found' })
                }
                const result = await bcrypt.compare(password, user.password)
                if(!result){
                    return done(null, false, { errorMessage: 'Wrong password' })
                }
                return done(null, user, { message: 'Logged in successfully'})
            }catch(e){
                console.error(e)
            }
        }
    )
)
passport.use(
    'jwt',
    new JwtStrategy(
        {
            secretOrKey: process.env.JWT_SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        },
        (token, done) => {
            try{
                return done(null, token.user)
            }catch(e){
                done(e)
            }
        }
    )
)
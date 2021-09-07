import User from '../models/user.model.js'
import bcrypt from 'bcrypt'

export const index = (req, res, next) => {
    res.status(200).send('USER PAGE')
}

export const getUsers = async (req, res, next) => {
    try{
        const users = User.find({})
        res.status(200).send(users)
    }catch(e) {
        console.error(e)
    }
}

export const createUser = async (req, res, next) => {
    const { username, password, role } = req.body
    try{
        const userExists = User.findOne({ username })
        if(userExists){
            res.send({ errorMessage: 'El usuario ya existe' })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPwd = await bcrypt.hash(password, salt)
        const user = await User.create({ username, password: hashedPwd, role })
        if(user){
            res.status(200).send({ message: 'User created successfully' })
        }else {
            res.send({ errorMessage: 'Error al crear recruiter' })
        }
    }catch(e) {
        console.error(e)
    }
}
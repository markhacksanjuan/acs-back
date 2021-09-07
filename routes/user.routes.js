import { Router } from 'express'
import { getUsers, createUser } from '../controllers/user.controller.js'

const router = Router()

router.get('/')
router.get('/getUsers', getUsers)
router.post('/createUser', createUser)
router.patch('/editUser')
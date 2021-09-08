import { Router } from 'express'
import { getUsers, createUser, index, getOneUser } from '../controllers/user.controller.js'

const router = Router()

router.get('/', index)
router.get('/getUsers', getUsers)
router.post('/createUser', createUser)
router.patch('/editUser')
router.get('getOneUser/:id', getOneUser)

export default router
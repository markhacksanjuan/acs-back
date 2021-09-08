import { Router } from 'express'
import { getUsers, createUser, index, getOneUser, updateUser, deleteUser } from '../controllers/user.controller.js'

const router = Router()

router.get('/', index)
router.get('/getUsers', getUsers)
router.post('/createUser', createUser)
router.get('/oneUser/:id', getOneUser)
router.patch('/oneUser/:id', updateUser)
router.delete('/oneUser/:id', deleteUser)

export default router
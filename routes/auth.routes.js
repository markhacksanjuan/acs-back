import { Router } from 'express'
import { index, signup, login } from '../controllers/auth.controller.js'

const router = Router()

router.get('/', index)
router.post('/signup', signup)
router.post('/login', login)

export default router
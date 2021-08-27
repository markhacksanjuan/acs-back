import { Router } from 'express'
import { updateExp } from '../controllers/exp.controller.js'

const router = Router()

router.patch('/:id', updateExp)

export default router
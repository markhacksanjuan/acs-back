import { Router } from 'express'
import { updateEstudio2 } from '../controllers/estudios2.controller.js'

const router = Router()

router.patch('/:id', updateEstudio2)

export default router
import { Router } from 'express'
import { updateEstudio } from '../controllers/estudios.controller.js'

const router = Router()

router.patch('/:id', updateEstudio)

export default router
import { Router } from 'express'
import { updateComentario, createComentario } from '../controllers/recruiter.controller.js'

const router = Router()

router.post('/', createComentario)
router.patch('/:id', updateComentario)

export default router
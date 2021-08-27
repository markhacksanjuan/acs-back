import { Router } from 'express'
import { updateOtrosDatos } from '../controllers/otrosDatos.controller.js'

const router = Router()

router.patch('/:id', updateOtrosDatos)

export default router
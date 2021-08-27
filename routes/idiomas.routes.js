import { Router } from 'express'
import { updateIdioma } from '../controllers/idiomas.controller.js'

const router = Router()

router.patch('/:id', updateIdioma)

export default router
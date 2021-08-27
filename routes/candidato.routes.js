import { Router } from 'express'
import { updateCandidato
 } from '../controllers/candidato.controller.js'

 const router = Router()

 router.patch('/:id', updateCandidato)

 export default router
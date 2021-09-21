import { Router } from 'express'
import { updateCandidato,
 updateComentario} from '../controllers/candidato.controller.js'

 const router = Router()

 router.patch('/info/:id', updateCandidato)
 router.patch('/comentario/:id', updateComentario)

 export default router
import { Router } from 'express'
import { index, createOferta, getAllOfertas } from '../controllers/oferta.controller.js'

const router = Router()

router.get('/', index)
router.post('/createOferta', createOferta)
router.get('/getAll', getAllOfertas)

export default router
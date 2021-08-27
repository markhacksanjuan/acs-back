import { Router } from 'express'
import { index, createOferta, getAllOfertas, getOneOferta, deleteOneOferta } from '../controllers/oferta.controller.js'

const router = Router()

router.get('/', index)
router.post('/createOferta', createOferta)
router.get('/getAll', getAllOfertas)
router.get('/getOne/:id', getOneOferta)
router.delete('/getOne/:id', deleteOneOferta)

export default router
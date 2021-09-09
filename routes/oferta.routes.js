import { Router } from 'express'
import { index, createOferta, getAllOfertas, getOneOferta, deleteOneOferta, createOfertasFromCsv } from '../controllers/oferta.controller.js'
import { uploadBuffer } from '../configs/bufferMulter.js'

const router = Router()

router.get('/', index)
router.post('/createOferta', createOferta)
router.get('/getAll', getAllOfertas)
router.get('/getOne/:id', getOneOferta)
router.delete('/getOne/:id', deleteOneOferta)
router.post('/addCsv', uploadBuffer.single('csv'), createOfertasFromCsv)

export default router
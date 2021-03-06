import { Router } from 'express'
import { index, createOferta, getAllOfertas, getOneOferta, deleteOneOferta, createOfertasFromCsv, updateOferta, createOfertasFromXls } from '../controllers/oferta.controller.js'
import { uploadBuffer } from '../configs/bufferMulter.js'

const router = Router()

router.get('/', index)
router.post('/createOferta', createOferta)
router.get('/getAll', getAllOfertas)
router.get('/getOne/:id', getOneOferta)
router.delete('/getOne/:id', deleteOneOferta)
router.patch('/getOne/:id', updateOferta)
router.post('/addCsv', uploadBuffer.single('csv'), createOfertasFromCsv)
router.post('/addXls', uploadBuffer.single('xls'), createOfertasFromXls)

export default router
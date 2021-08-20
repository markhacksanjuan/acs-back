import { Router } from 'express'
import { index,
    createCV, 
    getCV, 
    deleteCV, 
    getOneCV, 
    insertFromCsv, 
    addFoto, 
    addCsv, 
    updateCV,
    deleteManyCandidato } from '../controllers/cv.controller.js'
import  {uploadCloud}  from '../configs/cloudinary.config.js'
import { uploadBuffer } from '../configs/bufferMulter.js'

const router = Router()

router.get('/', index)
router.post('/createCV', createCV)
router.get('/getCV', getCV)
router.delete('/cv/:id', deleteCV)
router.patch('/cv/:id', updateCV)
router.get('/cv/:id', getOneCV)
router.get('/insertFromCsv', insertFromCsv)
router.post('/addFoto/:id', uploadCloud.single('fotografia'), addFoto)
router.post('/addCsv', uploadBuffer.single('csv'), addCsv)
router.delete('/deleteCsv', deleteManyCandidato)

export default router

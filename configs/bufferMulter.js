import multer from 'multer'
const storage = multer.memoryStorage()
export const uploadBuffer = multer({ storage })
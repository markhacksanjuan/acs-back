import cloudinary from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import multer from 'multer'

const cloud = cloudinary.v2
cloud.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})
const storage = new CloudinaryStorage({
    cloudinary: cloud,
    params: async (req, file) => {
        const name = file.originalname
        return {
            folder: 'acs',
            format: 'jpg',
            public_id: name
        }
    }
})
export const uploadCloud = multer({ storage })
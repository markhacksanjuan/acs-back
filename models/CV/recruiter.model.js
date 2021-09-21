import mongoose from 'mongoose'
const { Schema, model } = mongoose

const recruiterSchema = new Schema(
    {
        comentarioRecruiter: String,
        empresaPropuesta: String,
        fechaPropuesta: Date
    },
    {
        timestamps: true
    }
)
const Recruiter = model('Recruiter', recruiterSchema)
export default Recruiter
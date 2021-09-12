import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['admin', 'recruiter'],
            default: 'recruiter'
        },
        pwdPlain: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const User = model('User', userSchema)
export default User
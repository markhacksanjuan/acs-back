import mongoose from 'mongoose'
const { Schema, model } = mongoose

const estudio2Schema = new Schema(
    {
        nombreEstudio: String,
        centro: String,
        desdeEstudio: Date,
        hastaEstudio: Date,
        horasEstudio: Number,
        comentarioEstudio2: String,
        candidato: {
            type: Schema.Types.ObjectId,
            ref: 'Candidato'
        }
    },
    {
        timestamps: true
    }
)

const Estudio2 = model('Estudio2', estudio2Schema)
export default Estudio2
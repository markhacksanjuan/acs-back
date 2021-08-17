import mongoose from 'mongoose'
const { Schema, model } = mongoose

const estudioSchema = new Schema(
    {
        titulacion: String,
        especialidad: String,
        comentarioEstudio: String,
        ultimoAno: String,
        estudiosFinalizados: Boolean,
        candidato: {
            type: Schema.Types.ObjectId,
            ref: 'Candidato'
        }
    },
    {
        timestamp: true
    }
)

const Estudio = model('Estudio', estudioSchema)
export default Estudio
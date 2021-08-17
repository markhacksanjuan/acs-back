import mongoose from 'mongoose'
const { Schema, model } = mongoose

const experienciaSchema = new Schema(
    {
        empresa: String,
        puesto: String,
        desdeExperiencia: Date,
        hastaExperiencia: Date,
        responsabilidades: String,
        descripcion: String,
        candidato: {
            type: Schema.Types.ObjectId,
            ref: 'Candidato'
        }
    },
    {
        timestamps: true
    }
)

const Experiencia = model('Experiencia', experienciaSchema)
export default Experiencia
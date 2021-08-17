import mongoose from 'mongoose'
const { Schema, model } = mongoose

const idiomaSchema = new Schema(
    {
        idioma: String,
        titulo: String,
        nivelConversacion: String,
        nivelEscrito: String,
        nivelComprension: String,
        comentarioIdioma: String,
        candidato: {
            type: Schema.Types.ObjectId,
            ref: 'Candidato'
        }
    },
    {
        timestamps: true
    }
)

const Idioma = model('Idioma', idiomaSchema)
export default Idioma
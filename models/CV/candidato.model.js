import mongoose from 'mongoose'
const { Schema, model } = mongoose

const candidatoSchema = new Schema(
    {
        dni: {
            type: String,
            required: true
        },
        nombre: String,
        apellido1: String,
        apellido2: String,
        email: String,
        nacimiento: Date,
        sexo: String,
        pais: String,
        provincia: String,
        fotografiaName: String,
        fotografiaPath: String,
        estudios: {
            type: [Schema.Types.ObjectId],
            ref: 'Estudio'
        },
        estudios2: {
            type: [Schema.Types.ObjectId],
            ref: 'Estudio2'
        },
        idiomas: {
            type: [Schema.Types.ObjectId],
            ref: 'Idioma'
        },
        experiencia: {
            type: [Schema.Types.ObjectId],
            ref: 'Experiencia'
        },
        otrosDatos: {
            type: [Schema.Types.ObjectId],
            ref: 'OtrosDatos'
        },
        empresaActual: String,
        puestoActual: String,
        fechaContacto: [Date],
        puntuacionACS: Number,
        fechaPuntuacion: Date,
        comentariosCandidato: String
    },
    {
        timestamps: true
    }
)

const Candidato = model('Candidato', candidatoSchema)
export default Candidato
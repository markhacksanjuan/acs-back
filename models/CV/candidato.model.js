import mongoose from 'mongoose'
const { Schema, model } = mongoose

const candidatoSchema = new Schema(
    {
        dni: {
            type: String
        },
        nombre: String,
        apellido1: String,
        apellido2: String,
        email: String,
        nacimiento: String,
        sexo: String,
        pais: String,
        provincia: String,
        direccion: String,
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
        puntuacionACS: String,
        fechaPuntuacion: Date,
        comentariosCandidato: String,
        cpostal: String,
        telefono: String,
        movil: String,
        estudiosOld: String,
        origen: String,
        tecnologias: String,
        comentarioRecruiter: {
            type: Schema.Types.ObjectId,
            ref: 'Recruiter'
        },
        estado: String
    },
    {
        timestamps: true
    }
)

const Candidato = model('Candidato', candidatoSchema)
export default Candidato
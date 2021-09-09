import mongoose from 'mongoose'
const { Schema, model } = mongoose

const ofertaSchema = new Schema(
    {
        servicio: String,
        fechaPublicacion: Date,
        puesto: String,
        ubicacion: String,
        titulacion: String,
        tecnologias: String,
        experiencia: String,
        idiomas: String,
        desplazamientos: String,
        jornada: String
    },
    {
        timestamps: true
    }
)

const Oferta = model('Oferta', ofertaSchema)
export default Oferta
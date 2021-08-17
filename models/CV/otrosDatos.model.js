import mongoose from 'mongoose'
const { Schema, model } = mongoose

const otrosDatosSchema = new Schema(
    {
        disponibilidadViajar: Boolean,
        cambioResidencia: Boolean,
        carnetConducir: Boolean,
        comentarioOtros: String,
        candidato: {
            type: Schema.Types.ObjectId,
            ref: 'Candidato'
        }
    },
    {
        timestamps: true
    }
)

const OtrosDatos = model('OtrosDatos', otrosDatosSchema)
export default OtrosDatos
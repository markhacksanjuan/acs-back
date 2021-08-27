import OtrosDatos from "../models/CV/otrosDatos.model.js";

export const updateOtrosDatos = async (req, res, next) => {
    const { id } = req.params
    const { disponibilidadViajar, cambioResidencia, carnetConducir, comentarioOtros } = req.body
    const datos = {
        disponibilidadViajar,
        cambioResidencia,
        carnetConducir,
        comentarioOtros
    }
    try {
        await OtrosDatos.findByIdAndUpdate({ _id: id }, datos)
        res.status(200).send({ message: 'Datos actualizados' })
    }catch(e) {
        console.error(e)
    }
}
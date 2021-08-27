import Estudio2 from "../models/CV/estudios2.model.js"

export const updateEstudio2 = async (req, res, next) => {
    const { id } = req.params
    const { nombreEstudio, centro, desdeEstudio, hastaEstudio, horasEstudio, comentarioEstudio2 } = req.body
    const estudio = {
        nombreEstudio,
        centro,
        desdeEstudio,
        hastaEstudio,
        horasEstudio,
        comentarioEstudio2
    }
    try {
        await Estudio2.findByIdAndUpdate({ _id: id }, estudio)
        res.status(200).send({ message: 'Estudio actualizado' })
    }catch(e) {
        console.error(e)
    }
}
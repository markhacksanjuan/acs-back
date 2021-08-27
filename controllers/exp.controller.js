import Experiencia from "../models/CV/experiencia.model.js"

export const updateExp = async (req, res, next) => {
    const { id } = req.params
    const { empresa, puesto, desdeExperiencia, hastaExperiencia, responsabilidades, descripcion } = req.body
    const exp = {
        empresa,
        puesto,
        desdeExperiencia,
        hastaExperiencia,
        responsabilidades,
        descripcion
    }
    try {
        await Experiencia.findByIdAndUpdate({ _id: id }, exp)
        res.status(200).send({ message: 'Experiencia actualizada' })
    }catch(e) {
        console.error(e)
    }
}
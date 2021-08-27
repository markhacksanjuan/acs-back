import Idioma from "../models/CV/idiomas.model.js"

export const updateIdioma = async (req, res, next) => {
    const { id } = req.params
    const { idioma, titulo, nivelConversacion, nivelEscrito, nivelComprension, comentarioIdioma } = req.body
    const newIdioma = {
        idioma,
        titulo,
        nivelConversacion,
        nivelEscrito,
        nivelComprension,
        comentarioIdioma
    }
    try {
        await Idioma.findByIdAndUpdate({ _id: id }, newIdioma)
        res.status(200).send({ message: 'Idioma actualizado' })
    }catch(e) {
        console.error(e)
    }
}
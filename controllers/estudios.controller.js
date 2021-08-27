import Estudio from "../models/CV/estudios.model.js"

export const updateEstudio = async (req, res, next) => {
    const { id } = req.params
    const { titulacion, especialidad, comentarioEstudio, ultimoAno, estudiosFinalizados } = req.body
    const estudio = {
        titulacion,
        especialidad,
        comentarioEstudio,
        ultimoAno,
        estudiosFinalizados
    }
    try{
        await Estudio.findByIdAndUpdate({ _id: id }, estudio)
        res.status(200).send({ message: 'Estudio actualizado'})
    }catch(e){
        console.error(e)
    }
}
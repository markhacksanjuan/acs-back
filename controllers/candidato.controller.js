import Candidato from "../models/CV/candidato.model.js"

export const updateCandidato = async (req, res, next) => {
    const { id } = req.params
    const { dni, nombre, apellido1, apellido2, email, nacimiento, sexo, pais, provincia, direccion,
    empresaActual, puestoActual, fechaContacto, puntuacionACS, fechaPuntuacion, comentariosCandidato,
cpostal, telefono, movil, tecnologias } = req.body
    const candidato = {
        dni, nombre, apellido1, apellido2, email, nacimiento, sexo, pais, provincia, direccion,
        empresaActual, puestoActual, fechaContacto, puntuacionACS, fechaPuntuacion, comentariosCandidato,
        cpostal, telefono, movil, tecnologias
    }
    try {
        await Candidato.findByIdAndUpdate({ _id: id }, candidato)
        res.status(200).send({ message: 'Candidato actualizado' })
    }catch(e) {
        console.error(e)
    }
}
export const updateComentario = async (req, res, next) => {
    const { id } = req.params
    const { comentarioRecruiter } = req.body
    const candidato = { comentarioRecruiter }
    console.log(candidato)
    try{
        await Candidato.findByIdAndUpdate({ _id: id }, candidato)
        res.status(200).send({ message: 'Comentario actualizado' })
    }catch(e) {
        console.error(e)
    }
}
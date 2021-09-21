import Recruiter from "../models/CV/recruiter.model.js"
import Candidato from '../models/CV/candidato.model.js'


export const createComentario = async (req, res, next) => {
    const { id } = req.params
    const { comentarioRecruiter, empresaPropuesta, fechaPropuesta, idCandidato } = req.body
    const newComment = {
        comentarioRecruiter,
        empresaPropuesta,
        fechaPropuesta
    }
    try{
        const commentCreado = await Recruiter.create(newComment)
        if(commentCreado){
            await Candidato.findByIdAndUpdate({ _id: idCandidato }, { comentarioRecruiter: commentCreado._id })
            res.status(200).send({ message: 'Comentario creado correctamente' })
        }
    }catch(e) {
        console.error(e)
    }
}
export const updateComentario = async (req, res, next) => {
    const { id } = req.params
    const { comentarioRecruiter, empresaPropuesta, fechaPropuesta, idCandidato } = req.body
    const newComment = {
        comentarioRecruiter,
        empresaPropuesta,
        fechaPropuesta
    }
    try{
        await Recruiter.findByIdAndUpdate({ _id: id }, newComment)
        res.status(200).send({ message: 'Comentario de recruiter creado' })
    }catch(e) {
        console.error(e)
    }
}
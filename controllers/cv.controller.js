import Candidato from '../models/CV/candidato.model.js'
import Estudio from '../models/CV/estudios.model.js'
import Estudio2 from '../models/CV/estudios2.model.js'
import Experiencia from '../models/CV/experiencia.model.js'
import Idioma from '../models/CV/idiomas.model.js'
import OtrosDatos from '../models/CV/otrosDatos.model.js'

import { csvToJson, csvToJsonFromFile } from '../middlewares/csvToJson.js'

export const index = (req, res, next) => {
    res.send('CV PAGE')
}

export const createCV = async (req, res, next) => {
    const { dni, nombre, apellido1, apellido2, email, sexo, pais, provincia } = req.body
    const { titulacion, especialidad, comentarioEstudio, ultimoAno, estudiosFinalizados } = req.body
    const { nombreEstudio, centro, desdeEstudio, hastaEstudio, horasEstudio, comentarioEstudio2 } = req.body
    const { empresa, puesto, desdeExperiencia, hastaExperiencia, responsabilidades, descripcion } = req.body
    const { idioma, titulo, nivelConversacion, nivelEscrito, nivelComprension, comentarioIdioma } = req.body
    const { disponibilidadViajar, cambioResidencia, carnetConducir, comentarioOtros } = req.body
    const newCandidato = { dni, nombre, apellido1, apellido2, email, sexo, pais, provincia }
    try {
        const candidatoCreado = await Candidato.create(newCandidato)
        if(candidatoCreado){
            const newEstudio = { titulacion, especialidad, comentarioEstudio, ultimoAno, estudiosFinalizados, candidato: candidatoCreado._id }
            const newEstudio2 = { nombreEstudio, centro, desdeEstudio, hastaEstudio, horasEstudio, comentarioEstudio2, candidato: candidatoCreado._id }
            const newExperiencia = { empresa, puesto, desdeExperiencia, hastaExperiencia, responsabilidades, descripcion, candidato: candidatoCreado._id }
            const newIdioma = { idioma, titulo, nivelConversacion, nivelEscrito, nivelComprension, comentarioIdioma, candidato: candidatoCreado._id }
            const newOtrosDatos = { disponibilidadViajar, cambioResidencia, carnetConducir, comentarioOtros, candidato: candidatoCreado._id }
            const estudioCreado = await Estudio.create(newEstudio)
            const estudio2Creado = await Estudio2.create(newEstudio2)
            const experienciaCreado = await Experiencia.create(newExperiencia)
            const idiomaCreado = await Idioma.create(newIdioma)
            const otrosDatosCreado = await OtrosDatos.create(newOtrosDatos)
            if(estudioCreado && estudio2Creado && experienciaCreado && idiomaCreado && otrosDatosCreado){
                const candidatoUpdated = await Candidato.findByIdAndUpdate({ _id: candidatoCreado._id }, {$push: {
                    estudios: estudioCreado._id,
                    estudios2: estudio2Creado._id,
                    idiomas: idiomaCreado._id,
                    experiencia: experienciaCreado._id,
                    otrosDatos: otrosDatosCreado._id
                }
                })
                const candidato = await Candidato.findById({ _id: candidatoUpdated._id }).populate([
                    {
                        path: 'estudios',
                        model: 'Estudio'
                    },
                    {
                        path: 'estudios2',
                        model: 'Estudio2'
                    },
                    {
                        path: 'idiomas',
                        model: 'Idioma'
                    },
                    {
                        path: 'experiencia',
                        model: 'Experiencia'
                    },
                    {
                        path: 'otrosDatos',
                        model: 'OtrosDatos'
                    }
                ])
                res.status(200).send(candidato)
            }
        }
    }catch(e){
        console.error(e)
    }
}
export const addFoto = async (req, res, next) => {
    const { path, originalname } = req.file
    const { id } = req.params
    const editedCandidato = {
        fotografiaName: originalname,
        fotografiaPath: path
    }
    try{
        const edited = await Candidato.findByIdAndUpdate({ _id: id }, editedCandidato)
        res.status(200).send(edited)
    } catch(e) {
        console.error(e)
    }
}
export const getCV = async (req, res, next) => {
    try{
        const candidatos = await Candidato.find({})
            .populate([
                {
                    path: 'estudios',
                    model: 'Estudio'
                },
                {
                    path: 'estudios2',
                    model: 'Estudio2'
                },
                {
                    path: 'idiomas',
                    model: 'Idioma'
                },
                {
                    path: 'experiencia',
                    model: 'Experiencia'
                },
                {
                    path: 'otrosDatos',
                    model: 'OtrosDatos'
                }
            ])
        res.send(candidatos)
    }catch(e){
        console.error(e)
    }
}
export const deleteCV = async (req, res, next) => {
    try{
        const { id } = req.params
        const candidato = await Candidato.findById({ _id: id }).populate([
            {
                path: 'estudios',
                model: 'Estudio'
            },
            {
                path: 'estudios2',
                model: 'Estudio2'
            },
            {
                path: 'idiomas',
                model: 'Idioma'
            },
            {
                path: 'experiencia',
                model: 'Experiencia'
            },
            {
                path: 'otrosDatos',
                model: 'OtrosDatos'
            }
        ])
        await Candidato.findByIdAndRemove({ _id: id })
        candidato.estudios.map(async estudio => {
            return (
                await Estudio.findByIdAndRemove({ _id: estudio._id })
            )
        })
        candidato.estudios2.map(async estudio => {
            return(
                await Estudio2.findByIdAndRemove({ _id: estudio._id })
            )
        })
        candidato.experiencia.map(async exp => {
            return(
                await Experiencia.findByIdAndRemove({ _id: exp._id })
            )
        })
        candidato.idiomas.map(async idioma => {
            return(
                await Idioma.findByIdAndRemove({ _id: idioma._id })
            )
        })
        candidato.otrosDatos.map(async dato => {
            return(
                await OtrosDatos.findByIdAndRemove({ _id: dato._id })
            )
        })
        res.status(200).send({message: 'Candidato eliminado correctamente'})
    }catch(e) {
        console.error(e)
    }
}
export const updateCV = async (req, res, next) => {
    const { id } = req.params
    try{
        await Candidato.findByIdAndUpdate({ _id: id }, req.body)
        res.status(200).send({ message: 'Candidato updated' })
    }catch(e) {
        console.error(e)
    }
}
export const getOneCV = async (req, res, next) => {
    const { id } = req.params
    try{
        const candidato = await Candidato.findById({ _id: id }).populate([
            {
                path: 'estudios',
                model: 'Estudio'
            },
            {
                path: 'estudios2',
                model: 'Estudio2'
            },
            {
                path: 'idiomas',
                model: 'Idioma'
            },
            {
                path: 'experiencia',
                model: 'Experiencia'
            },
            {
                path: 'otrosDatos',
                model: 'OtrosDatos'
            }
        ])
        res.status(200).send(candidato)
    }catch(e) {
        console.error(e)
    }
}
export const insertFromCsv = async (req, res, next) => {
    try{
        const newJson = await csvToJson()
        console.log(newJson)
        res.status(200).send(newJson)
    }catch(e){
        console.error(e)
    }
}
export const addCsv = async (req, res, next) => {
    const file = req.file
    try{
        const newJson = await csvToJsonFromFile(file)
        const candidatos = newJson.map(candidato => {
            const newCand = {
                nombre: candidato.Candidato.nombre,
                nacimiento: candidato.Candidato.fecha_nacimiento,
                cpostal: candidato.Candidato.cpostal,
                direccion: candidato.Candidato.direccion,
                telefono: candidato.Candidato.telefono,
                movil: candidato.Candidato.movil,
                estudiosOld: candidato.Candidato.estudios,
                provincia: candidato.Candidato.provincia,
                puntuacionACS: candidato.Candidato.puntuacion,
                dni: candidato.Candidato.NIF,
                origen: 'csv'
            }
            return newCand
        })
        const inserted = await Candidato.insertMany(candidatos)
        res.status(200).send(inserted)
    }catch(e) {
        console.error(e)
    }
}
export const deleteManyCandidato = async (req, res, next) => {
    await Candidato.deleteMany({ origen: 'csv' })
    res.status(200).send({ message: 'Deleted from csv origin' })
}
export const insertFromPage = async (req, res, next) => {
    console.log(req.body)
    const { dni, nombre, apellido1, apellido2, email, telefono, sexo, pais, provincia } = req.body
    const { titulacion, especialidad, ultimoAno, comentarioEstudio } = req.body
    const estudiosFinalizados = req.body.estudiosFinalizados === 'Si' ? true : false
    console.log(estudiosFinalizados)
    const candidato = {
        dni,
        nombre,
        apellido1,
        apellido2,
        email,
        telefono,
        sexo,
        pais,
        provincia
    }
    // const nuevoCandidato = await Candidato.create(candidato)

    res.status(200).send(req.body)
}
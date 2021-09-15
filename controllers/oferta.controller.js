import Oferta from '../models/ofertas.model.js'

import { csvToJsonFromFile } from '../middlewares/csvToJson.js'

export const index = (req, res, next) => {
    res.status(200).send('OFFER PAGE')
}

export const createOferta = async (req, res, next) => {
    const { servicio, puesto, ubicacion, titulacion, tecnologias, experiencia, desplazamientos, idiomas } = req.body
    try {
        const ofertaCreada = await Oferta.create(req.body)
        res.status(200).send(ofertaCreada)
    }catch(e){
        console.error(e)
    }
}
export const getAllOfertas = async (req, res, next) => {
    try{
        const ofertas = await Oferta.find({})
        res.status(200).send(ofertas)
    }catch(e) {
        console.error(e)
    }
}
export const getOneOferta = async (req, res, next) => {
    const { id } = req.params
    try {
        const oferta = await Oferta.findById({ _id: id })
        res.status(200).send(oferta)
    }catch(e){
        console.error(e)
    }
}
export const deleteOneOferta = async (req, res, next) => {
    const { id } = req.params
    try {
        await Oferta.findByIdAndRemove({ _id: id })
        res.status(200).send({ mensaje: 'Oferta eliminada' })
    }catch(e) {
        console.error(e)
    }
}
export const updateOferta = async (req, res, next) => {
    const { id } = req.params
    try {
        await Oferta.findByIdAndUpdate({ _id: id }, req.body)
        res.status(200).send({ mensaje: 'Oferta actualizada' })
    }catch(e) {
        console.error(e)
    }
}

export const createOfertasFromCsv = async (req, res, next) => {
    const file = req.file
    try{
        const newJson = await csvToJsonFromFile(file)
        const ofertas = newJson.map(oferta => {
            let idiomas = ofertas.idioma
            const newOffer = {
                idiomas: oferta.Idioma,
                jornada: oferta.Jornada,
                experiencia: oferta.Experiencia,
                desplazamientos: oferta.desplazamientos,
                servicio: oferta.servicio,
                ubicacion: oferta.ubicacion,
                puesto: oferta.puesto,
                tecnologias: oferta.tecnologias,
                titulacion: oferta.titulacion,
            }
            const existOffer = await Oferta.find({ puesto: newOffer.puesto })
            let inserted
            if(!existOffer) {
                inserted = Oferta.insert(newOffer)
                return
            }
            return inserted
        })
        // const inserted = await Oferta.insertMany(ofertas)
        res.status(200).send(ofertas)
    }catch(e) {
        console.error(e)
    }
}
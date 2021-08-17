import Oferta from '../models/ofertas.model.js'

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
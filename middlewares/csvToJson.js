import csv from 'csvtojson'
const csvFilePath = '/resources/Candidato-5000.csv'
import path from 'path'
import { Readable } from 'stream'
import { request } from 'express'
// const __dirname = path.dirname(new URL(import.meta.url).pathname)
const __dirname = path.resolve()

export const csvToJson = async () => {
    try{
        const newJson = await csv().fromFile(path.join(__dirname, csvFilePath))
        return newJson
    }catch(e){
        console.error(e)
    }
}
export const csvToJsonFromFile = async (file) => {
    try{
        return await csv().fromString(file.buffer.toString())
    }catch(e) {
        console.error(e)
    }
}

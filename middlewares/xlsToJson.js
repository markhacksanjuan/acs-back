import excelToJson from "convert-excel-to-json"
import fs from 'fs'


export const xlsToJsonFromFile =  (file) => {
    try{
        const result =  excelToJson({
            source: file.buffer,
            sheets: ['Hoja1'],
            header: {
                rows: 1
            },
            columnToKey:{
                A: 'puesto',
                B: 'ubicacion',
                C: 'titulacion',
                D: 'experiencia',
                E: 'tecnologias',
                F: 'idiomas',
                G: 'jornada'
            }
        })
        return result
    }catch(e) {
        console.error(e)
    }
}
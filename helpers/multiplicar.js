const fs = require('fs');
require('colors')
// 5
const multiplicar = async (num, listar, max) => {

    console.clear()

    
    try {
        let salida = '';
        for (let i = 1; i <= max; i++) {
            salida += (`${num} x ${i} = ${num * i}\n`)
        }

        if(listar){
            console.log("=========================".green)
            console.log("      Tabla del:".green, `${num}`.cyan)
            console.log("=========================".green)
            console.log(salida)
        }

        fs.writeFileSync(`salida/tabla-${num}.txt`, salida)
        console.log("Archivo guardado".green)
        return `tabla-${num}.txt`
    } catch (err) {
        throw err;
    }



}

module.exports = {
    multiplicar
}

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        default: 5,
        description: "Base de la tabla de multiplicar"
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        description: "Listar la tabla en consola"
    })
    .option('m', {
        alias: 'max',
        type: 'number',
        demandOption: false,
        default: 10,
        description: "Listar la tabla en consola hasta un max"
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero'
        }
        return true;
    })
    .argv

module.exports = argv
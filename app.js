const {multiplicar} = require ('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

multiplicar(argv.b, argv.l, argv.m)
    .then( nameFile => console.log(nameFile))
    .catch(err => console.log(err))
const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Crea archivo con la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = { //EXPORTA OBJETO
    argv
}
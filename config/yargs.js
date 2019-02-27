const argv = require('yargs')
    .command('crear', 'Crear un elemento para la lista por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Crear un elemento para la lista por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Actualiza el estado de una tarea'
        },
        completado: {
            demand: true,
            alias: 'c',
            default: true,
            desc: 'Marca como completada una tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}
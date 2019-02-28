const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completada una tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento para la lista por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
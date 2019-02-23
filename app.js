const argv = require('yargs').argv;

console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log('Crear tarea por hacer');
        break;

    case 'listar':
        console.log('Listar tareas por hacer');
        break;

    case 'actualizar':
        console.log('Actualizar tarea por hacer');
        break;

    default:
        console.log('Comando no reconocido');

}
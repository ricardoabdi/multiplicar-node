// // requireds
// const fs = require('fs');
const { crearArchivo } = require('./multiplicar/multiplicar.js')
    //const fs = require('express'); //paquete express
    //const fs = require('./fs'); archivos locales (clases)

//console.log(multiplicar);

// let data = ''

// for (let i = 1; i < 11; i++) {
//     data += `${base} * ${i} = ${base * i}\n`;
// }


// //const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err; //si existe error mostrar el error
//     console.log(`The file tabla-${base}.txt has been saved!`);
// });


//let base = '3';
//crearArchivo(base);

console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]

//console.log(`el parametro es ${base}`);


crearArchivo(base)
    .then(archivo => console.log(`Archivo Creado: ${archivo}`))
    .catch(err => console.log(err));
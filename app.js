const {crearArchivo}=require('./helpers/multiplicar.js');
const argv=require('./config/yargs');
const colors =require('colors');
console.clear();

//console.log(argv)
//console.log('a:yargs',argv.a)

//para extraer argumento de consola
////const[,,arg3='base=5']=process.argv
/////const[,a=5]=arg3.split('=')
////console.log(a)//argumentos consola

//const a=3

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo =>console.log(nombreArchivo.rainbow, 'Creado'))    
    .catch((err => console.log(err))
    )
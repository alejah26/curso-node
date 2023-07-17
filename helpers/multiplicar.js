const fs = require("fs");
const colors =require('colors')
const crearArchivo = async (a = 5, l=false, h=10) => {
  try {

    let salida, consola = "";

    for (let b = 1; b <= h; b++) {
      //    let tabla =a*b;
      //    console.log(a,'x',b,'=',tabla)
      //    console.log(`${a}x${b}=${a*b}`)
      salida += `${a} x ${b} = ${a * b}\n`;
      consola += `${a} ${'x'.cyan} ${b} ${'='.cyan} ${a * b}\n`;
    }

    if(l){
      console.log('TABLA DEL'.green ,colors.bgGreen.underline.red(a));
      console.log(consola);
    }

    //fs.writeFile(`tabla-${a}.txt`,salida,(err)=>{
    // if(err) throw err;
    //console.log(`tabla-${a}.txt creado`);
    //});
    fs.writeFileSync(`./salida/tabla-${a}.txt`, salida);

    return `tabla-${a}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};

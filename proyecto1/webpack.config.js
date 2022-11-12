/* aqui se establecen configuraacion de las rutas de los modulos, puntos de entrada y salida de la app */

const path= require('path') /* capturar el modulo */
/*  constante de configuracion (ques es un objeto) */
const config = {
    entry : './src', /* aqui el entry point o punto de entrada es el index.js */
    output : /* resultado del empaquetado en un objeto */ {
        path: path.resolve(__dirname, 'dist'), /* aqui estoy importando el path de la const path */
        filename : 'main.js' /* nombre del archivo */
    },
    mode: 'development' /* modo desarrollo*/
}

module.exports = config /* exporta el modulo */
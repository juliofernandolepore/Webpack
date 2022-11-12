/* configurando el modo produccion para el script de package.json */

const common = require ('./webpack.comun.config.js')

const { merge } = require ('webpack-merge')

module.exports = merge (common, {
  mode: 'production',

})

 /* https://www.npmjs.com/package/webpack-merge 
 "webpack-merge" provides a merge function that concatenates arrays and merges objects creating a 
 new object. If functions are encountered, it will execute them, run the results through the algorithm, 
 and then wrap the returned values within a function again.
This behavior is particularly useful in configuring webpack although it has uses beyond it. Whenever 
you need to merge configuration objects, webpack-merge can come in handy  */
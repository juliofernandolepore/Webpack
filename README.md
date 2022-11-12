# Webpack

# instalar nodeJs (LTS https://nodejs.org/es/download/).

npm init -y (este comando crea el package.json por defecto).

---

npm install o npm install --save-dev webpack webpack-cli (este ultimo con dependencias para desarrollo).

---

si npm pide actualizarse, ejecutar el comando de update npm (npm install -g npm@9.1.1 por ejemplo).

---

crear una carpeta src dentro del directorio del proyecto( para el main.js)

# https://www.npmjs.com/package/npx

npx webpack (si la instalacion fue exitosa esto crea el directorio dist que contiene el main.js).

# npx mode: production/development/none

npx webpack --mode=development (modo desarrollo).
npx webpack --mode=production (modo produccion).

# modificar de ruta del index.html

 src del script con archivo ubicado en dist main.js

 ---

 configuracion default webpack.

 crear un archivo webpack.config.js (dentro del directorio del proyecto).

 dentro de archivo se debera importar el modulo 'path'

 ---

 en este punto hay que separar el codigo en varios archivos js dentro de la carpeta src.

 el contenido de la variable data pasara a un archivo.json

 ---

 ---
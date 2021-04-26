//Archivo que levanta la API (Archivo de arranque)

require('dotenv').config();

//leer el archivo server/index.js
const server = require('./server');

//Se define el puerto de la API si exite en .env se toma, sino toma el 8081
const PORT = process.env.Port || 8081
server.listen(PORT, ()=> console.log(`Server is live at localhost: ${PORT}`));
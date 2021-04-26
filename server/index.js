//Incluir cors y una instanica de express server

const cors = require('cors');
const express = require('express');

//Incluir archivo de rutas 
const routes = require('../routes');

//Crear instanciade express
const server = express();

//Usamos cors en nuestro server
server.use(cors());
server.options('*', cors());

server.use(express.json());

server.use('/api', routes);

module.exports = server;
//Importar clase Router de express
const { Router } = require('express');

//Leer controllers/index.js
const controllers = require('../controllers');

//Crear objeto router a partir de clase Router
const router = Router();

//Definir rutas

router.get('/', (req, res) => res.send('Welcome'));

router.post('/users', controllers.createUser);
router.get('/users', controllers.getAllUsers);

module.exports = router;

